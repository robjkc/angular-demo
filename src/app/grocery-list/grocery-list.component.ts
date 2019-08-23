import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

    list: any;

    constructor() { }

    ngOnInit() {
        this.list = [
            { name: 'Milk', price: 3 },
            { name: 'Cereal', price: 4 },
            { name: 'OJ', price: 2.50 },
        ];
    }

}
