import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CounterService } from 'src/app/core/counter.service';
import { MessageService } from 'src/app/core/message.service';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {
  
   
  
  constructor(private counterService: CounterService, private messageService: MessageService) { }

  ngOnInit() {
    console.log('init');
    this.counterService.increase();
    // this.counterHandle = setInterval(() => {
    //   this.counter++; 
    //   console.log(this.counter++);
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log('destroy');
    // clearInterval(this.counterHandle);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.customer.firstChange) {
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name} `);
    }
  }

  //wejscie/wiazanie za pomoca property bindingu (powiazanie customera z drugiego komponentu)
  @Input() customer: Customer;
  //wyemitowanie zdarzenia i skierowanie na wyjscie; <string> - parametr typowy
  @Output() shift: EventEmitter<string> = new EventEmitter();

  CustomerType = CustomerType;

  nameColor: string = "blue";
  isActive: boolean = false;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle;

  

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
    this.messageService.showSuccess("Udało sie zmienic kolor");
  }
  
  left() {
    this.shift.emit("left");
  }

  right() {
    this.shift.emit("right");
  }
  

}
