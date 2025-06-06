
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctAnswer: 1,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars appears red due to iron oxide (rust) on its surface."
  },
  {
    id: 3,
    question: "What is the speed of light in a vacuum?",
    options: ["299,792,458 m/s", "300,000,000 m/s", "186,000 mi/s", "All of the above"],
    correctAnswer: 0,
    explanation: "The exact speed of light in a vacuum is 299,792,458 meters per second."
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'Au'?",
    options: ["Silver", "Aluminum", "Gold", "Argon"],
    correctAnswer: 2,
    explanation: "Au comes from the Latin word 'aurum' meaning gold."
  },
  {
    id: 5,
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Lungs", "Skin"],
    correctAnswer: 3,
    explanation: "The skin is the largest organ, covering the entire surface of the body."
  },
  {
    id: 6,
    question: "Which programming language was created by Brendan Eich?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: 1,
    explanation: "JavaScript was created by Brendan Eich at Netscape in 1995."
  },
  {
    id: 7,
    question: "What is the smallest unit of matter?",
    options: ["Molecule", "Atom", "Electron", "Proton"],
    correctAnswer: 1,
    explanation: "An atom is the smallest unit of matter that retains the properties of an element."
  },
  {
    id: 8,
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    explanation: "The Pacific Ocean covers about 63 million square miles."
  },
  {
    id: 9,
    question: "What does 'HTTP' stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Tech Transfer Protocol", 
      "HyperText Transport Protocol",
      "High Transfer Text Protocol"
    ],
    correctAnswer: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol, used for web communication."
  },
  {
    id: 10,
    question: "Which scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    correctAnswer: 1,
    explanation: "Albert Einstein developed both special and general theories of relativity."
  }
];
