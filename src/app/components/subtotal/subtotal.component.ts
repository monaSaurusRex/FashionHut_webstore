import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.css']
})
export class SubtotalComponent implements OnInit {

  subTotal$: Observable<number> | undefined;

  constructor(){
    

  }

  ngOnInit(){
      
  }

}
