async function searchUser() {
    const query = document.getElementById('search').value;
    const resultDiv = document.getElementById('result');
    
    try {
        const response = await fetch(`https://api.github.com/users/${query}`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const userData = await response.json();
        
    
        resultDiv.innerHTML = `
            <h2>${userData.login}</h2>
            <img src="${userData.avatar_url}" alt="${userData.login}'s avatar" width="100">
            <p>Followers: ${userData.followers}</p>
            <p>Following: ${userData.following}</p>
            <p>Repositories: ${userData.public_repos}</p>
            <p>Bio: ${userData.bio ? userData.bio : 'No bio available'}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
