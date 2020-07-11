import { Component, OnInit } from '@angular/core';
import  Typed  from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
bgMobile = './assets/jeuel600.jpg';
fbURL = './assets/fb.jpg';
twt = './assets/twt.jpg';
link = './assets/link.jpg';
git = './assets/git.jpg';

curlyBrace1 = '{';
curlyBrace2 = '}';


  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: [`${this.curlyBrace1} I am a Front-end Web Developer ${this.curlyBrace2}`, `${this.curlyBrace1} I design, program and build user interfaces. ${this.curlyBrace2}`],
      typeSpeed: 120
    };
    
    var typed = new Typed('#type-txt2', options);
  }

}
