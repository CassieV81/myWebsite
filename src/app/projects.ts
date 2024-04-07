export class Project {
  title!: string;
  text!: string;
  imgUrl!: string;
  imgAlt!: string;
  viewLink: string | null = null;
  codeLink: string | null = null;
  techStack!: string;
}

export const projects: Project[] = [
  {
    title: "Message-based Contract for Processing Cypher Social Contract",
    text: "This project delivers a user-friendly solution for automated contract creation and management. Users interact through a chatbot built with Rasa, a conversational AI framework.  Behind the scenes, a custom 'Contract Manager' module, powered by Python, automates contract generation and processing using the Patti library for smart contracts.  The entire user interface is built with familiar web technologies (Javascript, HTML, CSS) for a seamless experience.  Users simply request services in plain language, and the system handles the entire contract lifecycle, eliminating manual steps and streamlining the process.",
    imgUrl: "assets/project_images/closed_source.jpg",
    imgAlt: "Closed Source Image",
    viewLink: null,
    codeLink: null,
    techStack: "Python, JavaScript, HTML, CSS, Rasa, Git",
  },
  {
    title: "Portfolio Website",
    text: "This portfolio website is built with Angular, a powerful framework known for its dynamic and responsive user interfaces.  Leveraging Angular's capabilities, I've crafted an interactive experience that showcases my work and skills in a visually engaging and user-friendly manner.",
    imgUrl: "assets/pexels-abdullah-ghatasheh-1631677.jpg",
    imgAlt: "",
    viewLink: null,
    codeLink: "https://github.com/CassieV81/myWebsite",
    techStack: "Angular, TypeScript, CSS, HTML"
  },
  {
    title: "BattleShip",
    text: "This project is a simplified implementation of the board game, Battleship, using Javascript, HTML and CSS. The purpose of building this project was to learn and practice unit testing using Jest.",
    imgUrl: "assets/project_images/battleship_image.png",
    imgAlt: "Battleship Screenshot",
    viewLink: "https://cassiev81.github.io/Battleship/",
    codeLink: "https://github.com/CassieV81/Battleship",
    techStack: "JavaScript, HTML, CSS"
  },
  {
    title: "Library",
    text: "This project is a simple library management application. You can add new books by entering details like title and author. It also lets you search for existing books and edit their information.  Even cooler, you can mark books as read and keep track of your progress! All this information is stored in a database (indexedDB)",
    imgUrl: "assets/project_images/library_image.png",
    imgAlt: "Library Screenshot",
    viewLink: "https://cassiev81.github.io/Library/",
    codeLink: "https://github.com/CassieV81/Library",
    techStack: "JavaScript, HTML, CSS"
  },
  {
    title: "TicTacToe",
    text: "This is an interactive Tic-Tac-Toe game that utilizes Javascript, HTML, and CSS to deliver a captivating single-player experience. The AI opponent uses the minimax algorithm to make strategic moves, adapting its difficulty based on your choice (easy, medium, or hard).  The code also shows a clear win detection with highlighted winning lines, and restarts seamlessly",
    imgUrl: "assets/project_images/tictactoe_image.png",
    imgAlt: "TicTacToe ScreenShot",
    viewLink: "https://cassiev81.github.io/TictactoeJS/",
    codeLink: "https://github.com/CassieV81/TictactoeJS",
    techStack: "JavaScript, HTML, CSS"
  }
];
