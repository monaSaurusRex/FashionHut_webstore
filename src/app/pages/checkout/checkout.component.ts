import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
ContactForm = new FormGroup({
 firstName : new FormControl('') ,
 lastName : new FormControl(''),
 email : new FormControl(''),
 contactNo : new FormControl(''),
})
}
