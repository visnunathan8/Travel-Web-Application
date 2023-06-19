import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class travelagentaccount {
  editable!: boolean;
  constructor(
    public username?: string,
    public password?: string,
    public type?: string,
    public agentName ?: string,
    public location ?: string,
    public travelAgentId?: Number
  ){}
}


@Injectable({
  providedIn: 'root'
})
export class TravelagentService {

  constructor(
    private http:HttpClient
  ) { }
  loggedInStatus = false
  setLoggedIn(value:boolean){
    this.loggedInStatus = value
  }
  get isLoggedIn(){
    return this.loggedInStatus
  }

  // getTravelAgentAccount(username: string) {
  //   return this.http.get<travelagentaccount>('http://localhost:8081/travelagent/findbyUsername?username='+username);
  // }
  // checkTravelAgentAccount(travelagentaccount: travelagentaccount) {
  //   return this.http.get<Number>('http://localhost:8081/travelagent/checkTravelAgent?username='+travelagentaccount.username+'&password='+travelagentaccount.password+'&accountType='+travelagentaccount.type);
  // }
  // createTravelAgentAccount(travelagentaccount: travelagentaccount) {
  //      return this.http.post<travelagentaccount>('http://localhost:8081/travelagent/addTravelAgentAccount/', travelagentaccount);
  //  }

  // updateTravelAgentAccount(travelagentaccount: travelagentaccount) {
  //   return this.http.post<string>('http://localhost:8081/travelagent/updateTravelAgent/', travelagentaccount);
  // }

  // getTravelAgentAccountList() {
  //   return this.http.get<travelagentaccount[]>('http://localhost:8081/travelagent/findallTravelAgentAccounts/');
  // }

  getTravelAgentAccount(username: string) {
    return this.http.get<travelagentaccount>('https://floating-everglades-27882.herokuapp.com/travelagent/findbyUsername?username='+username);
  }
  checkTravelAgentAccount(travelagentaccount: travelagentaccount) {
    return this.http.get<Number>('https://floating-everglades-27882.herokuapp.com/travelagent/checkTravelAgent?username='+travelagentaccount.username+'&password='+travelagentaccount.password+'&accountType='+travelagentaccount.type);
  }
  createTravelAgentAccount(travelagentaccount: travelagentaccount) {
       return this.http.post<travelagentaccount>('https://floating-everglades-27882.herokuapp.com/travelagent/addTravelAgentAccount/', travelagentaccount);
   }

  updateTravelAgentAccount(travelagentaccount: travelagentaccount) {
    return this.http.post<string>('https://floating-everglades-27882.herokuapp.com/travelagent/updateTravelAgent/', travelagentaccount);
  }

  getTravelAgentAccountList() {
    return this.http.get<travelagentaccount[]>('https://floating-everglades-27882.herokuapp.com/travelagent/findallTravelAgentAccounts/');
  }
}

