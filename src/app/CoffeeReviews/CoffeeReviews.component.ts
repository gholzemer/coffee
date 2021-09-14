import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';




@Component({ templateUrl: 'CoffeeReviews.component.html',
styleUrls: ['./CoffeeReviews.component.css'],
})
export class CoffeeReviewsComponent implements OnInit {
    constructor(){
        console.log(AOS);
    }
    
    ngOnInit(){
        AOS.init();

    }

}