import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cardNameControl: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  cardNumberControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{16}$')
    
  ]);
  cardExpirationControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^((0[1-9])|(1[0-2]))\/(\d{2})$')
  ]);
  securityCodeControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{3}$')
  ]);

  suburbCityControl: FormControl = new FormControl('', Validators.required);
  provinceControl: FormControl = new FormControl('', Validators.required);
  countryControl: FormControl = new FormControl('', Validators.required);
  postalCodeControl: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]);

  get showErrorMessage() {
    return this.cardExpirationControl.invalid && this.cardExpirationControl.touched;
  }

  limitCharacterCount(event: any) {
    const input = event.target as HTMLInputElement;
    const maxLength = 16;

    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      this.cardNumberControl.setValue(input.value);
    }
    
  }
  limitSecurityCode(event: any) {
    const input = event.target as HTMLInputElement;
    const maxLength = 3;

    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      this.securityCodeControl.setValue(input.value);

    }

    this.securityCodeControl.setValue(input.value);
  }
    }
  
  
