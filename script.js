const card = document.getElementById('card');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const prevButton = document.getElementById('prev');
const flipButton = document.getElementById('flip');
const nextButton = document.getElementById('next');

let flashCards = []; // Initialize empty array

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        flashCards = data;
        showCard(); // Show the first card after loading data
    })
    .catch(error => console.error('Error loading data:', error));

let currentCardIndex = 0;

function showCard() {
    questionElement.textContent = flashCards[currentCardIndex].question;
    answerElement.textContent = flashCards[currentCardIndex].answer;
}

function flipCard() {
    card.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashCards.length;
    card.classList.remove('flipped');
    showCard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashCards.length) % flashCards.length;
    card.classList.remove('flipped');
    showCard();
}

flipButton.addEventListener('click', flipCard);
nextButton.addEventListener('click', nextCard);
prevButton.addEventListener('click', prevCard);

showCard(); // Initial card display
