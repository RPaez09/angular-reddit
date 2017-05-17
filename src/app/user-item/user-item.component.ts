import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

    Myname = 'User-Item Component'

    constructor(){ }

    ngOnInit(){

    }

}