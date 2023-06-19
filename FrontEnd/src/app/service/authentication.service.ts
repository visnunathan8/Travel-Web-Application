import { Injectable } from '@angular/core';
import { customerAccountService, customeraccount } from './customerAccount.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public useraccounts: customeraccount = new customeraccount();
  public useraccount: customeraccount = new customeraccount();

  constructor(
    private useraccountservice: customerAccountService,
    private router: Router
  ) { }

  authenticate(useraccount: customeraccount) {
    console.log("seventh");
    console.log("from authentication service" + this.useraccount.username);

    if (this.useraccount.username !== undefined) {
      this.useraccountservice.getCustomerAccount(this.useraccount.username)
        .subscribe(data => this.useraccounts = data);
    }

    this.router.navigate(['login']);
    return false;
  }
}
