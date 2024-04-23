import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../api-controllers/pizza-controllers/api.pizza-service';
import { Pizza } from '../types';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrl: './pizza-menu.component.scss'
})
export class PizzaMenuComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private apiService: PizzaService) { }

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas() {
    this.apiService.getPizzas().subscribe({
      next: (data) => {
        this.pizzas = data;
      },
      error: (error) => {
        console.error('Error fetching pizzas:', error);
      },
    });
  }
}
