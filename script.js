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
