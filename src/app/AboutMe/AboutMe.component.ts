import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';




@Component({ templateUrl: 'AboutMe.component.html',
styleUrls: ['./AboutMe.component.css'],
})
export class AboutMeComponent implements OnInit {
    constructor(){
        console.log(AOS);
    }
    
    ngOnInit(){
        AOS.init();

    }

}