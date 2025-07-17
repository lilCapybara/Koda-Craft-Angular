import { Component } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(150)]),
    
  });

  onSubmit() {
    console.log('Formulario enviado:', this.contactForm.value);
    this.contactForm.reset();
  }

}
