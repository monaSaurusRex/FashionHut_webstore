import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  @ViewChild('paymentAccordion', { static: false }) paymentAccordion!: ElementRef;
  streetAddressControl: FormControl = new FormControl('', Validators.required);
  streetAddress2Control: FormControl = new FormControl('', Validators.required);

  suburbCityControl: FormControl = new FormControl('', Validators.required);
  provinceControl: FormControl = new FormControl('', Validators.required);
  postalCodeControl: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]);
  countryControl: FormControl = new FormControl('', Validators.required);
  cardNameControl: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  cardNumberControl: FormControl = new FormControl('', [ Validators.required,
Validators.pattern('^[0-9]{16}$')
    
  ]);
  cardExpirationControl: FormControl = new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]);
  
  securityCodeControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{3}$')
  ]);
  orderInfo: any = {};
  constructor() { }
  
  updateOrderReview() {

    this.orderInfo = {
      streetAddress: this.streetAddressControl.value,
      streetAddress2: this.streetAddress2Control.value,
      suburbCity: this.suburbCityControl.value,
      province: this.provinceControl.value,
      postalCode: this.postalCodeControl.value,
      country: this.countryControl.value,
      cardName: this.cardNameControl.value,
      cardNumber: this.cardNumberControl.value,
      cardExpiration: this.cardExpirationControl.value,
      securityCode: this.securityCodeControl.value
    };

  
  }
  
  update(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your order has been successfully purchased',
      showConfirmButton: false,
      timer: 1500
    });
  }
  
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
  isDeliveryFormValid(): boolean {
    return (
      this.streetAddressControl.valid &&
      this.streetAddress2Control.valid &&
      this.suburbCityControl.valid &&
      this.provinceControl.valid &&
      this.postalCodeControl.valid &&
      this.countryControl.valid
    );
  }
  
  isPaymentFormValid(): boolean {
    return (
      this.cardNameControl.valid &&
      this.cardNumberControl.valid &&
      this.cardExpirationControl.valid &&
      this.securityCodeControl.valid
    );
  }
  
    }
    
  
  
  

