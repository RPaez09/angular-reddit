import { Component, OnInit } from '@angular/core'; //dependencies necessary for this component

@Component({ //component decorator
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  title = "Hello world!";
  
  constructor() { }

  ngOnInit() {
  }

}
