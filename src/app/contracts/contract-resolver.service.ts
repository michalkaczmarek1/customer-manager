import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Contract } from './model';
import { Observable } from 'rxjs';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root'
})
export class ContractResolver implements Resolve<Contract> {

  constructor(private contractService: ContractService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contract> | Promise<Contract> | Contract{
    const id = parseInt(route.params['id']);
    return this.contractService.getContract(id);
  }


}
