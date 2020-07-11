import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  htmlLogo = './assets/html.jpg';
  cssLogo = './assets/css.jpg';
  jsLogo = './assets/js.jpg';
  angularLogo = './assets/angular.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
