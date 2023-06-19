import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-admin-header',
  templateUrl: './main-admin-header.component.html',
  styleUrls: ['./main-admin-header.component.css']
})
export class MainAdminHeaderComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['login'])
  }
  home(){
    this.router.navigate(['admin'])
  }
  travelAgentAdminView(){
    this.router.navigate(['travelAgentAdminView'])
  }

  reports() {
    this.router.navigate(['reports'])
  }
}
