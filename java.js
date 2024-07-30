function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const reviewer = document.getElementById('reviewer').value;
    const reviewText = document.getElementById('review-text').value;
    
    const reviewElement = document.createElement('div');
    reviewElement.innerHTML = `<strong>${reviewer}</strong><p>${reviewText}</p>`;
    document.getElementById('reviews-list').appendChild(reviewElement);
    
    document.getElementById('review-form').reset();
});
