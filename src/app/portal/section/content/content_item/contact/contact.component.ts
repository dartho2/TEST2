import { Component, Input, HostListener, OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input()
  data;
  sender = false;

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
      'name': ['', Validators.required],
      'from': ['', Validators.compose([Validators.required, Validators.email])],
      'message': ['', Validators.required]
    });
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      this.sender = true;

      window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
          $(this).remove();
        });
      }, 4000);
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }
  ngOnInit() {

  }

}
