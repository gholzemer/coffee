import { Component, OnDestroy, OnInit } from '@angular/core';


import * as AOS from 'aos';


@Component({ templateUrl: 'home.component.html',
styleUrls: ['./Home.component.css'],


})



export class HomeComponent implements OnInit, OnDestroy  {

    greeting = '';
    private typer?: ReturnType<typeof setInterval>;

    ngOnInit(){
        AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });
        this.typeGreeting('HELLO, WORLD!');
    }

    ngOnDestroy(){
        clearInterval(this.typer);
    }

    // Types the greeting out one letter at a time, like a terminal.
    private typeGreeting(text: string){
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.greeting = text;
            return;
        }
        let i = 0;
        this.typer = setInterval(() => {
            this.greeting = text.slice(0, ++i);
            if (i >= text.length) clearInterval(this.typer);
        }, 120);
    }

    openPDF(){

        window.open("./src/assets/Resume 3.2.pdf");
    }



}
