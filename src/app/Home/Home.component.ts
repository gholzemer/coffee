import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


import * as AOS from 'aos';


@Component({ templateUrl: 'home.component.html',
styleUrls: ['./Home.component.css'],


})



export class HomeComponent implements OnInit  {
    
    constructor(){
        console.log(AOS);
    }
    
    ngOnInit(){
        AOS.init();

    }
    openPDF(){
        
        window.open("./src/assets/Resume 3.2.pdf");
    }
    
     
        
}



