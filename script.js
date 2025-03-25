const card = document.getElementById('card');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const prevButton = document.getElementById('prev');
const flipButton = document.getElementById('flip');
const nextButton = document.getElementById('next');
const datasetSelector = document.getElementById('datasetSelector');

let flashCards = []; // Initialize empty array
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

function loadDataset(datasetPath) {
    fetch(datasetPath)
        .then(response => response.json())
        .then(data => {
            flashCards = data;
            currentCardIndex = 0; // Reset card index
            card.classList.remove('flipped'); // Ensure card is not flipped
            showCard();
        })
        .catch(error => console.error('Error loading dataset:', error));
}

// Function to dynamically populate the dataset selector
function populateDatasetSelector() {
    // This is a simplified example. In a real-world scenario, you might fetch a list of files from the server.
    const datasets = [
        'data/data-test.json', 
        'data/data-math.json', 
        'data/data-english.json'
    ]; // Add more paths

    datasets.forEach(datasetPath => {
        const option = document.createElement('option');
        // Extract the subject name from the path.
        const subjectName = datasetPath.split('/').pop().replace('.json', '');
        option.value = datasetPath;
        option.textContent = subjectName;
        datasetSelector.appendChild(option);
    });
}

// Event listener for dataset selection
datasetSelector.addEventListener('change', function() {
    const selectedDataset = this.value;
    if (selectedDataset) {
        loadDataset(selectedDataset);
    }
});
populateDatasetSelector();
loadDataset(datasetSelector.options[1].value);

flipButton.addEventListener('click', flipCard);
nextButton.addEventListener('click', nextCard);
prevButton.addEventListener('click', prevCard);

showCard(); // Initial card display
