import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class customeraccount{
  constructor(
<<<<<<< HEAD
    public username?: string,
    public password?: string,
    public type?: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public dob?: string,
    public customerId?: string
  ){}
}

@Injectable({
  providedIn: 'root'
})

export class customerAccountService {
  private customerState: customeraccount;

  setCustomerState(customer: customeraccount) {
    this.customerState = customer;
  }

  getCustomerState() {
    return this.customerState;
  }

=======
    public username: string,
    public password: string,
    public type: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public dob?: string
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class customerAccountService {
>>>>>>> f01013c381a383a939441c9a3fce866d2960701b
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  loggedInStatus = false
  constructor(
   private http:HttpClient
  ) { }

setLoggedIn(value:boolean){
  this.loggedInStatus = value
}
<<<<<<< HEAD
=======
changeMessage(message: string) {
  this.messageSource.next(message)
}
>>>>>>> f01013c381a383a939441c9a3fce866d2960701b
get isLoggedIn(){
  return this.loggedInStatus
}
  getCustomerAccount(username: string) {
<<<<<<< HEAD
    return this.http.get<customeraccount>('http://localhost:8081/customeraccount/findbyUsername?username='+username);
=======
    this.changeMessage(username);
    return this.http.get<customeraccount>('http://localhost:8081/customeraccount/findByUsername?username='+username);
>>>>>>> f01013c381a383a939441c9a3fce866d2960701b
  }
  checkCustomerAccount(customeraccount: customeraccount) {
    return this.http.get<Number>('http://localhost:8081/customeraccount/checkCustomer?username='+customeraccount.username+'&password='+customeraccount.password+'&accountType='+customeraccount.type);
  }
  createCustomerAccount(customeraccount: customeraccount) {
       return this.http.post<customeraccount>('http://localhost:8081/customeraccount/addCustomerAccount/', customeraccount);
   }

  updateCustomerAccount(customeraccount: customeraccount) {
    return this.http.post<string>('http://localhost:8081/customeraccount/updateCustomer/${id}', customeraccount);
  }

  getCustomerAccountList() {
    return this.http.get<customeraccount[]>('http://localhost:8081/customeraccount/findallCustomerAccounts/');
  }
<<<<<<< HEAD


  // getCustomerAccount(username: string) {
  //   return this.http.get<customeraccount>('https://floating-everglades-27882.herokuapp.com/customeraccount/findByUsername?username='+username);
  // }
  // checkCustomerAccount(customeraccount: customeraccount) {
  //   return this.http.get<Number>('https://floating-everglades-27882.herokuapp.com/customeraccount/checkCustomer?username='+customeraccount.username+'&password='+customeraccount.password+'&accountType='+customeraccount.type);
  // }
  // createCustomerAccount(customeraccount: customeraccount) {
  //      return this.http.post<customeraccount>('https://floating-everglades-27882.herokuapp.com/customeraccount/addCustomerAccount/', customeraccount);
  //  }

  // updateCustomerAccount(customeraccount: customeraccount) {
  //   return this.http.post<string>('https://floating-everglades-27882.herokuapp.com/customeraccount/updateCustomer/${id}', customeraccount);
  // }

  // getCustomerAccountList() {
  //   return this.http.get<customeraccount[]>('https://floating-everglades-27882.herokuapp.com/customeraccount/findallCustomerAccounts/');
  // }
=======
>>>>>>> f01013c381a383a939441c9a3fce866d2960701b
}
