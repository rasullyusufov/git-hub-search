const form = document.querySelector('form')
const input = document.getElementById('input')
const h1 = document.querySelector('h1')
const Name = document.getElementById('name')
const img = document.getElementById('img')
const link = document.getElementById('fullname')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const repos = document.getElementById('repos')
const header = document.querySelector('header')
const a = document.querySelector('a')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const api = `https://api.github.com/users/${input.value}`
    fetch(api).then(function (data) {
        return data.json()
    }).then(getResult)
    const repostApi = api + '/repos?sort=created'
    fetch(repostApi).then(function (datas) {
        return datas.json()
    }).then(showResult)

    header.classList.remove(`hidden`)


})
function getResult(newData) {
   
    img.src = `${newData.avatar_url}`
    Name.textContent = `${newData.name}`
    link.textContent = `${newData.bio}`
    followers.textContent = `${newData.followers} Followers `
    following.textContent = `${newData.following} Following `
    repos.textContent = `${newData.public_repos} Repos`
}

function showResult(newdatas) {
    for (let i = 0; i < 5; i++) {
        const a = document.createElement('a');
        a.href = `${newdatas[i].html_url}`;
        a.innerHTML = `${newdatas[i].name}`;
        document.querySelector('.repository').appendChild(a);
    }
}