import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class customeraccount{
  constructor(
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
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  loggedInStatus = false
  constructor(
   private http:HttpClient
  ) { }

setLoggedIn(value:boolean){
  this.loggedInStatus = value
}
changeMessage(message: string) {
  this.messageSource.next(message)
}
get isLoggedIn(){
  return this.loggedInStatus
}
  getCustomerAccount(username: string) {
    this.changeMessage(username);
    return this.http.get<customeraccount>('http://localhost:8081/customeraccount/findByUsername?username='+username);
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
}
