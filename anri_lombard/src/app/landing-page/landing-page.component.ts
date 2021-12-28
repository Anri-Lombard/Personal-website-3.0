import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    this.meta.addTags([
      {name: 'description', content: 'The personal website of Anri Lombard'},
      {name: 'author', content: 'Anri Lombard'},
      {name: 'keywords', content: 'Anri Lombard, UCT'}
    ]);
    this.setTitle('Home Page')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

  // public init() {
  //   var stage = new createjs.Stage("demoCanvas");

  //   var circle = new creat.Shape();
  //   circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  //   circle.x = 100;
  //   circle.y = 100;
  //   stage.addChild(circle);

  //   stage.update();
  // }

}
