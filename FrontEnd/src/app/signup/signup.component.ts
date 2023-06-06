import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';
import { travelagentaccount, TravelagentService } from '../service/travelagent.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  accountType: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  agentName: string;
  location: string;
  username: string;
  password: string;
  customer: customeraccount;
  travelagent: travelagentaccount;

  constructor(private customerService: customerAccountService, private travelAgentService: TravelagentService, private router: Router, private loginservice: AuthenticationService) { }
  ngOnInit() {
  }

  signup() {
    if(this.accountType == "customer") {
      this.customer = new customeraccount(this.username, this.password, this.accountType, this.firstName, this.lastName, this.email, this.dob);
      this.customerService.createCustomerAccount(this.customer)
      .subscribe( (data) => {
        console.log("data" + data);
        if(data) {
          this.router.navigate(['login'])
        }else{
            alert("ERROR WHHILE SIGNING UP");
       }
      })
    }
    if(this.accountType == "travelAgent") {
      this.travelagent = new travelagentaccount(this.username, this.password, this.accountType, this.agentName, this.location);
      this.travelAgentService.createTravelAgentAccount(this.travelagent)
      .subscribe( (data) => {
        if(data) {
          this.router.navigate(['login'])
        }else{
            alert("ERROR WHHILE SIGNING UP");
       }
      })
    }
  }

  toggleFormFields() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.dob = '';
    this.agentName = '';
    this.location = '';

    // Clear the form fields when switching between account types
  }
}

