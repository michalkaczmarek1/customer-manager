import { Injectable, Inject } from '@angular/core';
import { Customer, CustomerType } from './model';
import { Config, CONFIG } from '../model';
import { CounterService } from '../core/counter.service';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private counterService: CounterService,
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

 
  getCustomers() {
    this.counterService.increase();
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
      .pipe(map(customers => customers.slice(0, this.config.customerLimit)));
    
  }

  createCustomer(customer: Customer){
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer);
  }

  deleteCustomer(customer: Customer){
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`);
  }

}
