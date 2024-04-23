import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pasta } from '../types';

@Component({
  selector: 'app-pasta-menu',
  templateUrl: './pasta-menu.component.html',
  styleUrl: './pasta-menu.component.scss'
})
export class PastaMenuComponent implements OnInit {
  pastas: Pasta[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPasta();
  }

  getPasta() {
    this.apiService.getPasta().subscribe({
      next: (data) => {
        this.pastas = data;
      },
      error: (error) => {
        console.error('Error fetching pasta:', error);
      },
    });
  }
}
