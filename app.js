document.getElementById('newCatButton').addEventListener('click', function() {
    loadCatImage();
});

window.onload = function() {
    loadCatImage();
};

function loadCatImage() {
    const url = 'https://api.thecatapi.com/v1/images/search';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const catImageElement = document.getElementById('catImage');
            catImageElement.src = data[0].url;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
}
