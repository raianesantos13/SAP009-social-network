import { addPosts, printPost } from '../../Firebase/firestore.js';

export default function Feed() {
  const containerFeed = document.createElement('div');
  containerFeed.id = 'containerFeed';
  containerFeed.innerHTML = `<title>A rede social para leitoras</title>
  <h1>Olá, !</h1>
  <p>Compartilhe sua opinião, indique seus livros favoritos e curta as leituras das suas amigas!</p>
  
  <div class="container2">
  <label>O que você está lendo no momento?</label><br>
  <textarea></textarea><br>
  </div>
  <div class="buttons">
  <button type="button">Postar</button>
  <p id="Msg"></p>
  </div>
  <section id="allPosts">
 <ul id="feedComPosts"></ul>  
</section>
 `;
  const feedComPosts = containerFeed.querySelector('#feedComPosts');
  const text = containerFeed.querySelector('textarea');
  const botaoFeed = containerFeed.querySelector('button');
  botaoFeed.addEventListener('click', (event) => {
    event.preventDefault();

    if (text.value !== '') {
      addPosts(text.value)
        .then(() => {
        })
        .catch((error) => error);
    } else {
      const mensagem = containerFeed.querySelector('#mensagem');
      mensagem.innerHTML = 'O post não deve ser enviado vazio';
    }
  });
  async function feedInfo() {
    const posts = await printPost();
    feedComPosts.innerHTML = posts.map((post) => `
  <p>${post.texto}</p>
  `).join('');
  }
  feedInfo();
  return containerFeed;
}
