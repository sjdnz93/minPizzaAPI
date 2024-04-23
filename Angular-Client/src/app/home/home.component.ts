import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  styles: [`
  :host {
    text-align: center;
  }
`]
})
export class HomeComponent {
  pizzaImage = '../../assets/pizza.avif';
}
