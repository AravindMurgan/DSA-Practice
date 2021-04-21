const postContainer = document.querySelector('.blogs');
const formInput = document.querySelector('.mypost');
const loading = document.querySelector('.loader');

let limit=3;
let page=1;

async function getPosts(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const data = await res.json();

    return data
}

async function showPosts(){
    const posts = await getPosts();
    console.log(posts);
    posts.forEach(function(post){
        const postEl=document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML=`
        <div class="post-number">${post.id}</div>
        <div class="post-body">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
        ` ;   
        postContainer.appendChild(postEl)
        
    });

}

showPosts()