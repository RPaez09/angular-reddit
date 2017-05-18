import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

    @Input() name:string; // the name property added to the UserItemComponent class

    constructor(){
        
     }

    ngOnInit(){

    }

}