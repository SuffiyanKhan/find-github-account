// let API = 'https://api.github.com/users'
// let ApIkey2 = 'https://v2.jokeapi.dev/joke/programming'
let main = document.querySelector('.main');



let images = document.querySelector('#images');
let desc = document.querySelector('#desc');
let followers = document.querySelector('#followers')
let serac = document.querySelector('#serac')
let serachBtn = document.querySelector('#serachBtn');
let following = document.querySelector('#following');
let repo = document.querySelector('#repo');
let userName =document.querySelector('#userName');
let github = document.querySelector('#github');

serachBtn.addEventListener('click',()=>{
fetch(`https://api.github.com/users/${serac.value}`)
.then((Response)=> Response.json())
.then((data)=>{
  let getImage =data.avatar_url;
  images.src  = getImage;
  desc.innerHTML = data.bio;
  followers.textContent="Followers :" + data.followers
  ;
  following.textContent="Following :" + data.following;
  repo.textContent = "Repository :" + data.public_repos;
  userName.textContent = data.login;
  github.href = data.html_url
  // img.src = data.avatar_url
  // username.innerHTML = data.login
  // disc.innerHTML = data.bio
  // follower.innerHTML = data.followers
  // following.innerHTML = data.following
  // repo.innerHTML = data.public_repos
  // visit.href = data.html_url
// public_repos


  console.log(data)
})


})




















// fetch('https://v2.jokeapi.dev/joke/any')
// .then(data => data.json())
// .then(data => {
//     console.log(data.category)
//     console.log(data.setup)
//     console.log(data.joke)
//     // main.innerHTML='hi'

//     main.innerHTML = `
//     <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Jokes</h5>
//     <h6 class="card-subtitle mb-2 text-body-secondary">${data.category}</h6>
//     <p class="card-text">${data.setup} ${data.joke}</p>
//     <button onclick="next()" class="btn btn-dark">Next</button>
//   </div>
// </div>`
// })
//     let next=()=>{
//         location.reload()
//     }


