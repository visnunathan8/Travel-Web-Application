import { Component, OnInit } from '@angular/core';
import { travelagentaccount, TravelagentService } from '../service/travelagent.service';

@Component({
  selector: 'app-travelagent-dashboard',
  templateUrl: './travelagent-dashboard.component.html',
  styleUrls: ['./travelagent-dashboard.component.css']
})
export class TravelagentDashboardComponent implements OnInit {
  travelagent : travelagentaccount = new travelagentaccount();
  constructor(private travelagentservice : TravelagentService) { }

  ngOnInit() {
    this.getTravelAgentDetails();
  }

  getTravelAgentDetails() {
    const travelagentString = sessionStorage.getItem('travelagent');
    console.log(travelagentString)
    const agentState = travelagentString ? JSON.parse(travelagentString) : null;
    if (agentState) {
      this.travelagentservice.getTravelAgentAccount(agentState.username).subscribe(
        (result: travelagentaccount) => {
          console.log(result)
          this.travelagent = result;
        }
    )}
  }
}
