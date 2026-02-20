/** Project data — preserved from the original portfolio */

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  viewUrl: string | null;
  codeUrl: string | null;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: 'Message-based Contract Processing',
    description:
      'A user-friendly solution for automated contract creation and management. Users interact through a chatbot built with Rasa, a conversational AI framework. Behind the scenes, a custom "Contract Manager" module powered by Python automates contract generation and processing using the Patti library for smart contracts. Users simply request services in plain language, and the system handles the entire contract lifecycle.',
    image: 'project_images/closed_source.jpg',
    imageAlt: 'Closed Source Project',
    viewUrl: null,
    codeUrl: null,
    techStack: ['Python', 'Rasa', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Portfolio Website',
    description:
      'This portfolio website showcases my work and skills. Originally built with Angular, it has been modernized with Vite, TypeScript, and Tailwind CSS for a faster, cleaner, and more maintainable codebase.',
    image: 'project_images/website_page.jpeg',
    imageAlt: 'Portfolio Website Screenshot',
    viewUrl: null,
    codeUrl: 'https://github.com/CassieV81/myWebsite',
    techStack: ['TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Battleship',
    description:
      'A simplified implementation of the board game Battleship using JavaScript, HTML and CSS. Built to learn and practice unit testing with Jest.',
    image: 'project_images/battleship_image.png',
    imageAlt: 'Battleship Screenshot',
    viewUrl: 'https://cassiev81.github.io/Battleship/',
    codeUrl: 'https://github.com/CassieV81/Battleship',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Jest'],
  },
  {
    title: 'Library',
    description:
      'A simple library management application where you can add, search, and edit books. Track reading progress and store information using IndexedDB.',
    image: 'project_images/library_image.png',
    imageAlt: 'Library Screenshot',
    viewUrl: 'https://cassiev81.github.io/Library/',
    codeUrl: 'https://github.com/CassieV81/Library',
    techStack: ['JavaScript', 'HTML', 'CSS', 'IndexedDB'],
  },
  {
    title: 'Tic-Tac-Toe',
    description:
      'An interactive Tic-Tac-Toe game with an AI opponent using the minimax algorithm. Features adjustable difficulty (easy, medium, hard), clear win detection with highlighted winning lines, and seamless restarts.',
    image: 'project_images/tictactoe_image.png',
    imageAlt: 'TicTacToe Screenshot',
    viewUrl: 'https://cassiev81.github.io/TictactoeJS/',
    codeUrl: 'https://github.com/CassieV81/TictactoeJS',
    techStack: ['JavaScript', 'HTML', 'CSS'],
  },
];
