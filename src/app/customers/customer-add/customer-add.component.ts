import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerType } from '../model';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/core/message.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  name: string;
  age: number;
  type: CustomerType;

  CustomerType = CustomerType;

  constructor(
    private messageService: MessageService, 
    private customerService: CustomerService
    ) { }

  ngOnInit() {
  }

  add(form: NgForm){
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: '',
      categories: [],
      description: '',
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe(() => {
      this.messageService.showSuccess("Udało sie dodać klienta");
      form.resetForm();
    });
  }

}
