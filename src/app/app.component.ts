import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroesComponent],  // Make sure HeroesComponent is imported here
  template: `
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
