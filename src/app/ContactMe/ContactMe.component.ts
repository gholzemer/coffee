import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({ templateUrl: 'ContactMe.component.html',
styleUrls: ['./ContactMe.component.css'] 
})
export class ContactmeComponent implements OnInit{

    constructor(){
        console.log(AOS);
    }
    
    ngOnInit(){
        AOS.init();

    }

}