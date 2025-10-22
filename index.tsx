/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { categories, FlashcardData } from './flashcard-data.js';

interface Flashcard {
  term: string;
  definition: string;
  imageUrl?: string;
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing app...');
});

const categoryButtons = document.querySelectorAll('.category-btn') as NodeListOf<HTMLButtonElement>;
const nextCardButton = document.getElementById(
  'nextCardButton',
) as HTMLButtonElement;
const flashcardsContainer = document.getElementById(
  'flashcardsContainer',
) as HTMLDivElement;
const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;

// Store current category and card index
let currentCategory = '';
let currentCardIndex = 0;
let currentFlashcards: FlashcardData[] = [];

// Check if elements exist
console.log('Elements found:', {
  categoryButtons: categoryButtons.length,
  nextCardButton: !!nextCardButton,
  flashcardsContainer: !!flashcardsContainer,
  errorMessage: !!errorMessage
});

// Function to create a flashcard element
const createFlashcard = (flashcardData: FlashcardData) => {
  console.log('Creating flashcard:', flashcardData);
  
  // Clear previous cards
  flashcardsContainer.textContent = '';
  
  // Create single card structure
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('flashcard', 'single-card');
  cardDiv.dataset['index'] = '0';

  const cardInner = document.createElement('div');
  cardInner.classList.add('flashcard-inner');

  // Front side: Show the image and term
  const cardFront = document.createElement('div');
  cardFront.classList.add('flashcard-front');

  // Add image on front (main focus)
  const imageElement = document.createElement('img');
  imageElement.src = flashcardData.imagePath;
  imageElement.alt = flashcardData.term;
  imageElement.classList.add('flashcard-image', 'main-image');
  imageElement.loading = 'lazy';
  imageElement.onerror = () => {
    // Fallback if image doesn't exist
    imageElement.style.display = 'none';
  };
  cardFront.appendChild(imageElement);

  // Add term below image
  const termDiv = document.createElement('div');
  termDiv.classList.add('term');
  termDiv.textContent = flashcardData.term;
  cardFront.appendChild(termDiv);

  // Back side: Show definition only
  const cardBack = document.createElement('div');
  cardBack.classList.add('flashcard-back');

  const definitionDiv = document.createElement('div');
  definitionDiv.classList.add('definition');
  definitionDiv.textContent = flashcardData.definition;
  cardBack.appendChild(definitionDiv);

  // Add a small image on the back too
  const backImageElement = document.createElement('img');
  backImageElement.src = flashcardData.imagePath;
  backImageElement.alt = flashcardData.term;
  backImageElement.classList.add('flashcard-image', 'back-image');
  backImageElement.loading = 'lazy';
  backImageElement.onerror = () => {
    backImageElement.style.display = 'none';
  };
  cardBack.appendChild(backImageElement);

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  cardDiv.appendChild(cardInner);
  flashcardsContainer.appendChild(cardDiv);

  // Add click listener to toggle the 'flipped' class
  cardDiv.addEventListener('click', () => {
    cardDiv.classList.toggle('flipped');
  });
  
  // Show Next Card button
  nextCardButton.style.display = 'inline-block';
  
  // Clear any error messages
  errorMessage.textContent = '';
};

// Function to show a random card from the current category
const showRandomCard = () => {
  if (currentFlashcards.length === 0) return;
  
  // Get a random card
  const randomIndex = Math.floor(Math.random() * currentFlashcards.length);
  const flashcardData = currentFlashcards[randomIndex];
  
  createFlashcard(flashcardData);
  
  // Only add back button if it doesn't exist
  if (!document.querySelector('.back-button')) {
    addBackButton();
  }
};

// Category button click handlers
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    if (!category || !categories[category]) return;
    
    console.log('Category selected:', category);
    
    // Remove any existing back buttons when switching categories
    const existingBackButton = document.querySelector('.back-button');
    if (existingBackButton) {
      existingBackButton.remove();
    }
    
    // Store current category and flashcards
    currentCategory = category;
    currentFlashcards = categories[category].flashcards;
    currentCardIndex = 0;
    
    // Keep category selection visible - don't hide it
    // This allows kids to easily switch between categories
    
    // Show first card
    showRandomCard();
  });
});

// Next Card button functionality
nextCardButton.addEventListener('click', () => {
  console.log('Next Card button clicked!');
  if (currentFlashcards.length > 0) {
    showRandomCard();
  } else {
    errorMessage.textContent = 'Please select a category first.';
  }
});

// Add a "Back to Categories" button functionality
const addBackButton = () => {
  // Remove any existing back buttons first
  const existingBackButton = document.querySelector('.back-button');
  if (existingBackButton) {
    existingBackButton.remove();
  }
  
  const backButton = document.createElement('button');
  backButton.textContent = '← Back to Categories';
  backButton.classList.add('back-button');
  backButton.style.cssText = `
    background: #f8f9fa;
    color: #5f6368;
    border: 2px solid #e9ecef;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 15px;
    transition: all 0.3s ease;
    font-weight: 500;
  `;
  
  backButton.addEventListener('click', () => {
    // Hide cards and next button
    flashcardsContainer.textContent = '';
    nextCardButton.style.display = 'none';
    backButton.remove();
    
    // Clear current state
    currentCategory = '';
    currentFlashcards = [];
  });
  
  // Insert back button before next card button
  nextCardButton.parentNode?.insertBefore(backButton, nextCardButton);
};
