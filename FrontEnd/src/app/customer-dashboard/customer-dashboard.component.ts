import { Component, OnInit } from '@angular/core';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  customer: customeraccount  = new customeraccount();
  constructor(private customerservice:customerAccountService) { }

  ngOnInit() {
    this.getCustomerDetails();
  }
  getCustomerDetails() {
    const customerStateString = sessionStorage.getItem('customer');
    const customerState = customerStateString ? JSON.parse(customerStateString) : null;
    if (customerState) {
      this.customerservice.getCustomerAccount(customerState.username).subscribe(
        (result: customeraccount) => {
          this.customer = result;
          console.log(this.customer.customerId);
        }
    )}
  }

}
