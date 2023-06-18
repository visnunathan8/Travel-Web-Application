import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { travelagentaccount, TravelagentService } from '../service/travelagent.service';

@Component({
  selector: 'app-travel-agent-admin-view',
  templateUrl: './travel-agent-admin-view.component.html',
  styleUrls: ['./travel-agent-admin-view.component.css']
})
export class TravelAgentAdminViewComponent implements OnInit {
  showAddForm: boolean = false;
  searchKeyword: string = '';
  newAgent: travelagentaccount = new travelagentaccount();
  filteredAgents: travelagentaccount[] = [];
  constructor(private agentService: TravelagentService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAgentList();
  }

  addNewAgent() {
    this.showAddForm = true;
  }

  deleteNewFlight() {
    this.newAgent = new travelagentaccount();
    this.showAddForm = false;
  }

  saveAgent(agent: travelagentaccount) {
    if (agent != null) {
      this.agentService.createTravelAgentAccount(agent).subscribe(
        (response) => {
          console.log('Agent saved successfully');
          this.resetForm();
          this.showAddForm = false;
          this.filteredAgents.push(response);
        },
        (error) => {
          console.log('Error occurred while saving Agent:', error);
        }
      );
    } else {
      alert('Please enter all required fields!');
    }
  }


  getAgentList() {
    this.agentService.getTravelAgentAccountList().subscribe(
      (agent: travelagentaccount[]) => {
        this.filteredAgents = agent.map((agent) => ({ ...agent, editable: false }));
        // this.applyFilter(); // Apply the filter when the flight list is retrieved
        this.changeDetectorRef.detectChanges(); // Trigger change detection
      },
      (error) => {
        console.log('Error occurred while retrieving flight list:', error);
      }
    );
  }

  toggleEdit(index: number) {
    const agent = this.filteredAgents[index];
    if (agent.editable) {
      this.updateAgent(index);
    }
    agent.editable = !agent.editable;
  }

  updateAgent(index: number) {
    const agent = this.filteredAgents[index];
    this.agentService.updateTravelAgentAccount(agent).subscribe(
      (response) => {
        console.log('Flight updated successfully');
        agent.editable = false;
        this.changeDetectorRef.detectChanges(); // Trigger change detection
      },
      (error) => {
        console.log('Error occurred while updating flight:', error);
      }
    );
  }

  // deleteAgent(index: number) {
  //   const flightId = this.agent[index].travelAgentId;
  //   this.agentService.de(Number(flightId)).subscribe(
  //     (response) => {
  //       console.log('Flight deleted successfully');
  //       this.flights.splice(index, 1); // Remove the deleted flight from the flights array
  //       this.getFlightList();
  //     },
  //     (error) => {
  //       console.log('Error occurred while deleting flight:', error);
  //     }
  //   );
  // }




  resetForm() {
    this.newAgent = new travelagentaccount();
  }

  applyFilter() {
    this.filteredAgents = this.filteredAgents.filter(agent =>
      agent.agentName.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
      agent.username.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

}
