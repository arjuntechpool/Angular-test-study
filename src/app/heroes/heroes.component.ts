import { Component } from '@angular/core';
// import { Hero } from '../hero';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, CommonModule, NgIf,FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
// export class HeroesComponent {
//   hero: Hero = {
//     id: 1,
//     name: 'Windstorm'
//   };
// }
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
