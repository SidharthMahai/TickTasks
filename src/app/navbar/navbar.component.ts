import { TasksServiceService } from './../tasks-service.service';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public tservice: TasksServiceService) { 

  }

  ngOnInit() {
  }

}
