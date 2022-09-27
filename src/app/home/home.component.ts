import { TasksServiceService } from './../tasks-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public user_name: string;
  constructor(public tservice: TasksServiceService, public router: Router ) { }

  onKeyPress(event) {
    if (event.target.value && event.key === "Enter") {
      this.tservice.user_name = event.target.value;
      this.tservice.clearTasks();
      this.router.navigate(['/', 'tasks'])
    }
  }

  ngOnInit() {
  }

}
