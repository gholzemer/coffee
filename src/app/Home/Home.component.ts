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

    // Easter egg: the prompt at the bottom of the About code block accepts commands.
    termLines: { text: string; reply: boolean }[] = [];
    termFocused = false;
    private roastIndex = 0;
    private readonly roasts = [
        'Are you trying to hack my website???',
        'What are you trying to do?',
        "Incorrect command. Don't try again.",
        'Access denied. Nice try though.',
        'This incident will be reported.',
        "Command not found. Neither is your sense of direction.",
        "I'm telling my mom.",
        'Error 418: I am a teapot.',
    ];

    runCommand(input: HTMLInputElement){
        const cmd = input.value.trim();
        input.value = '';
        if (!cmd) return;
        if (cmd.toLowerCase() === 'clear') {
            this.termLines = [];
            return;
        }
        this.termLines = [
            ...this.termLines,
            { text: cmd, reply: false },
            { text: this.replyTo(cmd.toLowerCase()), reply: true },
        ].slice(-8);
    }

    private replyTo(cmd: string): string {
        if (cmd === 'help') return 'Help?! Very funny!';
        if (cmd === 'ls') return 'secrets.txt  definitely_not_passwords.txt  resume.pdf';
        if (cmd.startsWith('cat ')) return 'Permission denied. What did you expect?';
        if (cmd.startsWith('sudo')) return 'You are not in the sudoers file. This incident will be reported.';
        if (cmd.startsWith('rm ')) return 'Absolutely not.';
        if (cmd === 'exit' || cmd === 'quit') return 'There is no escape.';
        if (cmd === 'whoami') return 'Someone who should probably email grantholzemer@gmail.com.';
        if (cmd.includes('hire')) return 'Great idea. Email grantholzemer@gmail.com.';
        if (cmd.includes('coffee')) return 'Brewing... error: out of beans.';
        const reply = this.roasts[this.roastIndex % this.roasts.length];
        this.roastIndex++;
        return reply;
    }

    openPDF(){

        window.open("./src/assets/Resume 3.2.pdf");
    }



}
