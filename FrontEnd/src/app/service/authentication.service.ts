import { Injectable } from '@angular/core';
import {customerAccountService, customeraccount} from './customerAccount.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public useraccounts:customeraccount;
  public useraccount:customeraccount;
  constructor(private useraccountservice: customerAccountService,private router: Router,
    private authService: AuthenticationService) { }

  authenticate(useraccount) {
    console.log("seventh");
    console.log("from authentication service"+this.useraccount.username);
    this.useraccountservice.getCustomerAccount(this.useraccount.username)
    .subscribe(data => this.useraccounts = data);
    this.router.navigate(['login']);
    return false;
  }

}
