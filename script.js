const apiUrl= 'https://musicsysbackend-5w2rfrynk-rutams-projects-23ed9584.vercel.app/';
function getRecommendations() {
    const mood = document.getElementById('mood').value;

    fetch(`/recommendations?mood=${mood}`)
    .then(response => response.json())
    .then(data => {
        displayRecommendations(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayRecommendations(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (data.success) {
        const recommendations = data.recommendations;
        const resultHTML = recommendations.map(rec => `
            <div>
                <h3>${rec.title}</h3>
                <p>${rec.artist}</p>
                <iframe src="${rec.embedUrl}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        `).join('');
        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = '<p>No recommendations found.</p>';
    }
}
