import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
    private count: number;

    constructor() { }

    ngOnInit() {
        this.count = 0;
    }

    handleClick() {
        this.count += 1;
    }

}
