// src/app/components/client-form/client-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {ClientService} from '../../../services/client.service';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass']
})
export class ClientFormComponent {

  clientForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', Validators.required),
    date_inscription: new FormControl<Date | null>(null, Validators.required)
  });


  constructor(private fb: FormBuilder, private clientService: ClientService) {}

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.clientService.addClient(this.clientForm.value).subscribe({
        next: () => {
          alert('Client ajouté avec succès !');
          this.clientForm.reset();
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de l’ajout du client.');
        }
      });
    }
  }
}
