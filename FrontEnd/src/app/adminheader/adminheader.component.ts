import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }
  showNotificationFlag = false;

  showNotification() {
    this.showNotificationFlag = true;
  }

  closeNotification() {
    this.showNotificationFlag = false;
  }
  ngOnInit() {
  }
  logout(){
    console.log("baddd");
    this.router.navigate(['login'])
  }
  home(){
    this.router.navigate(['travelagentdashboard'])
  }
  activities(){
    console.log("ASDF")
    this.router.navigate(['activities']);
  }
  flights(){
    this.router.navigate(['flights'])
  }
  hotels(){
    this.router.navigate(['hotels'])

  }
  travelagent(){
    this.router.navigate(['travelagent'])
  }
  listall() {
    this.router.navigate(['listall'])
  }

}
