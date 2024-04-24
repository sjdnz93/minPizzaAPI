import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  id: number;
  name: string;
  description: string;

  constructor(private http: HttpClient) {
    this.id = 0;
    this.name = '';
    this.description = '';
  }

  submitForm() {
    const formData = {
      id: this.id,
      name: this.name,
      description: this.description
    };

    console.log(formData);

    this.http.post('http://localhost:5105/pizzas', formData).subscribe({
      next: (response) => {
        return response;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
