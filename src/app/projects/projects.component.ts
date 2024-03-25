import { Component } from '@angular/core';
import { Project } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Array<Project> = [
    {
      title: "BattleShip",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fuga corporis ab, perferendis distinctio adipisci eaque error qui accusamus porro quasi consequatur non sapiente ex voluptate, nihil maxime consequuntur suscipit",
      imgUrl: "../../assets/project_images/battleship_image.png",
      imgAlt: "Battleship Screenshot",
      viewLink: "https://cassiev81.github.io/Battleship/",
      codeLink: "https://github.com/CassieV81/Battleship"
    },
    {
      title: "Library",
      text: "Aspernatur quasi fuga eius obcaecati praesentium itaque officia nulla officiis ducimus perferendis accusantium exercitationem maiores corrupti, neque, nam inventore dicta temporibus? Quisquam perferendis dolor aut a",
      imgUrl: "../../assets/project_images/library_image.png",
      imgAlt: "Library Screenshot",
      viewLink: "https://cassiev81.github.io/Library/",
      codeLink: "https://github.com/CassieV81/Library"
    },
    {
      title: "TicTacToe",
      text: "Aspernatur quasi fuga eius obcaecati praesentium itaque officia nulla officiis ducimus perferendis accusantium exercitationem maiores corrupti, neque, nam inventore dicta temporibus? Quisquam perferendis dolor aut a",
      imgUrl: "../../assets/project_images/tictactoe_image.png",
      imgAlt: "TicTacToe ScreenShot",
      viewLink: "https://cassiev81.github.io/TictactoeJS/",
      codeLink: "https://github.com/CassieV81/TictactoeJS"
    }
  ]
}
