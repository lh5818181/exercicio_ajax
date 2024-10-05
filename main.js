document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#usuario');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repositorio');
    const followersElement = document.querySelector('#seguidores');
    const followingElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');


    fetch('https://api.github.com/users/lh5818181')
    .then(function(res) {
        return res.json();

    })
    .then(function(json) {
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        repos.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
})