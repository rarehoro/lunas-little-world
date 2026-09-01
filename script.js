async function loadPosts(){
  const container = document.querySelector('#posts');
  try{
    const res = await fetch('posts.json');
    const posts = await res.json();
    container.innerHTML = posts.map(post => `
      <article class="post-card">
        <div class="post-meta">
          <span>${post.date}</span>
          <span>${post.readingTime}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <span class="tag"># ${post.tag}</span>
      </article>
    `).join('');
  }catch(err){
    container.innerHTML = '<p>暫時讀不到手札資料。</p>';
  }
}

document.querySelector('.menu-btn').addEventListener('click', ()=>{
  document.querySelector('.nav').classList.toggle('open');
});

loadPosts();
