import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {


  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['login'])
  }
  home(){
    this.router.navigate(['customerdashboard'])
  }
  book(){
    this.router.navigate(['bookingPackage']);
  }
  custom(){
    this.router.navigate(['customPackage'])
  }
  not(){}
}
