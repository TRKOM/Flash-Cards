// Predefined flashcard data for each category
export interface FlashcardData {
  term: string;
  definition: string;
  imagePath: string;
}

export interface CategoryData {
  name: string;
  icon: string;
  flashcards: FlashcardData[];
}

export const categories: Record<string, CategoryData> = {
  animals: {
    name: "Animals",
    icon: "🐾",
    flashcards: [
      {
        term: "Cat",
        definition: "A small furry animal that says 'meow'",
        imagePath: "images/animals/cat.svg"
      },
      {
        term: "Dog",
        definition: "A loyal pet that says 'woof'",
        imagePath: "images/animals/dog.svg"
      },
      {
        term: "Bird",
        definition: "A flying animal with feathers and wings",
        imagePath: "images/animals/bird.svg"
      },
      {
        term: "Fish",
        definition: "An animal that lives in water and swims",
        imagePath: "images/animals/fish.svg"
      },
      {
        term: "Elephant",
        definition: "A very big animal with a long trunk",
        imagePath: "images/animals/elephant.svg"
      }
    ]
  },
  colors: {
    name: "Colors",
    icon: "🎨",
    flashcards: [
      {
        term: "Red",
        definition: "The color of apples and fire trucks",
        imagePath: "images/colors/red.svg"
      },
      {
        term: "Blue",
        definition: "The color of the sky and ocean",
        imagePath: "images/colors/blue.svg"
      },
      {
        term: "Yellow",
        definition: "The color of the sun and bananas",
        imagePath: "images/colors/yellow.svg"
      },
      {
        term: "Green",
        definition: "The color of grass and leaves",
        imagePath: "images/colors/green.svg"
      },
      {
        term: "Purple",
        definition: "The color of grapes and flowers",
        imagePath: "images/colors/purple.svg"
      }
    ]
  },
  fruits: {
    name: "Fruits",
    icon: "🍎",
    flashcards: [
      {
        term: "Apple",
        definition: "A red or green fruit that grows on trees",
        imagePath: "images/fruits/apple.svg"
      },
      {
        term: "Banana",
        definition: "A yellow fruit that monkeys love",
        imagePath: "images/fruits/banana.svg"
      },
      {
        term: "Orange",
        definition: "A round orange fruit that's juicy",
        imagePath: "images/fruits/orange.svg"
      },
      {
        term: "Grape",
        definition: "Small round fruits that grow in bunches",
        imagePath: "images/fruits/grape.svg"
      },
      {
        term: "Strawberry",
        definition: "A red fruit with tiny seeds on the outside",
        imagePath: "images/fruits/strawberry.svg"
      }
    ]
  }
};
