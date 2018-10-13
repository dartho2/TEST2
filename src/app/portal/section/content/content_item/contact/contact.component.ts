import {Component, Input, HostListener} from '@angular/core';
import { ConnectionService } from './connection.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input()
  data;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Wpisz email' :
        this.email.hasError('email') ? 'Nie poprawny email' :
            '';
  }
  
  contactForm: FormGroup;
disabledSubmitButton: boolean = false;
optionsSelect: Array<any>;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormMessage': ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.contactForm)
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Wiadomość nie została wysłana.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }
 

  
}
