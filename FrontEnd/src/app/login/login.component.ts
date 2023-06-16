import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';
import { travelagentaccount, TravelagentService } from '../service/travelagent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  accountType = ''
  invalidLogin = false
  customer: customeraccount;
  travelagent: travelagentaccount;
  type: Number
  constructor(private customerService: customerAccountService, private travelAgentService: TravelagentService, private router: Router, private loginservice: AuthenticationService) { }
  ngOnInit() {
  }
  private checkLogin() {
    if(this.accountType == "admin") {
      this.travelagent = new travelagentaccount(this.username,this.password,this.accountType);
      console.log(this.travelagent)
      this.travelAgentService.checkTravelAgentAccount(this.travelagent)
      .subscribe( (data) => {
        this.type = data
        console.log(data)
        if(this.type == 1) {
          this.travelAgentService.setLoggedIn(true);
          this.router.navigate(['admin'])
        }else{
            alert("ENTER THE CORRECT USERNAME AND PASSWORD :(");
       }
      })
    }else if(this.accountType == "customer") {
      this.customer = new customeraccount(this.username,this.password,this.accountType);
      this.customerService.checkCustomerAccount(this.customer)
      .subscribe( (data) => {
        this.type = data
        if(this.type == 1) {
          this.customerService.setLoggedIn(true);
          sessionStorage.setItem('customer', JSON.stringify(this.customer));
          // this.customerService.setCustomerState(this.customer);
          // this.router.navigate(['customer'], { state: { customer: this.customer } });
          this.router.navigate(['customer']);
        }else{
            alert("ENTER THE CORRECT USERNAME AND PASSWORD :(");
       }
      })
    }else if(this.accountType == "travelAgent") {
      this.travelagent = new travelagentaccount(this.username,this.password,this.accountType);
      this.travelAgentService.checkTravelAgentAccount(this.travelagent)
      .subscribe( (data) => {
        this.type = data
        if(this.type == 1) {
          this.travelAgentService.setLoggedIn(true);
          this.router.navigate(['travelagentdashboard'])
        }else{
            alert("ENTER THE CORRECT USERNAME AND PASSWORD :(");
       }
      })
    }
  }

  private signup() {
    this.router.navigate(['signup'])
  }

}
