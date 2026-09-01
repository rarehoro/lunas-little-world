const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const guestbookForm = document.querySelector('#guestbook-form');
const guestbookMessage = document.querySelector('#guestbook-message');
const messageCount = document.querySelector('#message-count');
const guestbookStatus = document.querySelector('#guestbook-status');

function updateMessageCount() {
  if (guestbookMessage && messageCount) {
    messageCount.textContent = `${guestbookMessage.value.length} / 800`;
  }
}

if (guestbookMessage) {
  guestbookMessage.addEventListener('input', updateMessageCount);
}

if (guestbookForm && guestbookStatus) {
  guestbookForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = guestbookForm.querySelector('[type="submit"]');
    const originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = '正在送進森林……';
    guestbookStatus.className = 'form-status';
    guestbookStatus.textContent = '';

    try {
      const response = await fetch(guestbookForm.action, {
        method: 'POST',
        body: new FormData(guestbookForm),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      guestbookForm.reset();
      updateMessageCount();
      guestbookStatus.classList.add('success');
      guestbookStatus.textContent = '紙條收到囉。謝謝你在森林裡留下足跡 ♡';
    } catch (error) {
      guestbookStatus.classList.add('error');
      guestbookStatus.textContent = '紙條暫時迷路了，請稍後再試一次。';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });
}

const visitsToday = document.querySelector('#visits-today');
const visitsTotal = document.querySelector('#visits-total');
const footprintsStatus = document.querySelector('#footprints-status');

function taipeiDateString() {
  const parts = new Intl.DateTimeFormat('en', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

async function fetchFootprintCount(url) {
  const response = await fetch(url, { headers: { Accept: 'application/json' } });
  if (response.status === 404) return '0';
  if (!response.ok) throw new Error('Footprint count unavailable');
  const data = await response.json();
  return data.count || '0';
}

async function loadForestFootprints() {
  if (!visitsToday || !visitsTotal || !footprintsStatus) return;

  const counterUrl = 'https://lunas-little-world.goatcounter.com/counter/TOTAL.json';
  const todayUrl = `${counterUrl}?start=${taipeiDateString()}`;

  try {
    const [today, total] = await Promise.all([
      fetchFootprintCount(todayUrl),
      fetchFootprintCount(counterUrl),
    ]);
    visitsToday.textContent = today;
    visitsTotal.textContent = total;
  } catch (error) {
    footprintsStatus.classList.add('error');
    footprintsStatus.textContent = '森林正在整理足跡，晚一點再回來看看。';
  }
}

loadForestFootprints();

const musicStage = document.querySelector('#music-stage');
const musicPlay = document.querySelector('#music-play');
const musicTitle = document.querySelector('#music-title');
const musicSubtitle = document.querySelector('#music-subtitle');
const trackButtons = [...document.querySelectorAll('.track-button')];

function loadYouTubeTrack(button) {
  if (!musicStage || !musicTitle || !musicSubtitle || !button) return;

  const { videoId, title, subtitle } = button.dataset;
  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return;

  trackButtons.forEach((track) => track.classList.toggle('active', track === button));
  musicTitle.textContent = title;
  musicSubtitle.textContent = subtitle;

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
  iframe.title = `YouTube 播放器：${title}`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  musicStage.replaceChildren(iframe);
}

if (musicPlay && trackButtons.length) {
  musicPlay.addEventListener('click', () => loadYouTubeTrack(trackButtons[0]));
}

trackButtons.forEach((button) => {
  button.addEventListener('click', () => loadYouTubeTrack(button));
});
