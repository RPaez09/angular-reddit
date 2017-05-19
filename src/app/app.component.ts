import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[]; // component property

  constructor(){
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Composing Software', 'https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea', 5),
      new Article('Angular Homepage', 'http://angular.io', 1),
      new Article('Stack Overflow', 'http://stackoverflow.com/', 2)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
    console.log(`Adding article: ${title.value} and link: ${link.value}`);
    return false;
  }
}
