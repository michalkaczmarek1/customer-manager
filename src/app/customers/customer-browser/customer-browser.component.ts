import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';

// import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

import { Observable } from 'rxjs';
import { CounterService } from 'src/app/core/counter.service';
import { MessageService } from 'src/app/core/message.service';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details') detailsComponent: CustomerDetailsComponent;

  customer: Customer;
  customers$: Observable<Customer[]>;
  // customers: Customer[];

  constructor(
    private customerService: CustomerService, 
    private counterService: CounterService,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {

    this.refresh();

    this.counterService.increase();
  }



  onShift(direction: string) {
    // const ids = this.customers.indexOf(this.customer);
    // if (ids > 0 && direction === "left") {
    //   this.customer = this.customers[ids - 1];
    // } else if (direction === "right" && ids < this.customers.length - 1) {
    //   this.customer = this.customers[ids + 1];
    // }
  }

  changeColor() {
    this.detailsComponent.changeColor();
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer).subscribe(
      () => {
        this.refresh();
        this.messageService.showSuccess("Udało sie usunac klienta");
      }
      // },
      // error => {
      //   console.log(error);
      //   this.messageService.showError('Blad w polaczeniu z serwerem');
      // }
    );
  }

  private refresh() {
    // this.customerService.getCustomers().subscribe(response => {
    //   this.customers = response;
    //   this.customer = this.customers[0];
    // });
    this.customer = null;
    this.customers$ = this.customerService.getCustomers();
  }
}
