import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/class/hero.class';

@Component({
    selector: 'app-hero-td',
    templateUrl: './hero-td.component.html',
    styleUrls: ['./hero-td.component.scss']
})
export class HeroTDComponent implements OnInit {

    @ViewChild('form', { static: true }) form!: NgForm;

    poteri = ['Super Intelligente', 'Super forte',
    'Immortale', 'Super Veloce'];

    //model = new Hero(1, 'Mr.Veloce', this.poteri[3], 'Dr.Lumaca', 'Terra', 'Ossigeno', 'Blabla');
    model = {
        name: '',
        alterEgo: '',
        enemy: '',
        planet: '',
        weakness: ''
    }

    submit() {
        console.log(this.model)

        this.form.reset();
    }

    //myHero = new Hero(1, 'Mr.Veloce', this.poteri[3], 'Dr.Lumaca', 'Terra', 'Ossigeno', 'Blabla');

    ngOnInit(): void {
        //console.log(this.myHero);

    }

}
