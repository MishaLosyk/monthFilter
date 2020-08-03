import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'colorized';
  users: User[] = [];
  monthNumber: any[];
  error: any;

  constructor(private dataS: DataService) {
    
    this.monthNumber = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  }

  ngOnInit (){

    this.dataS.getUsers().subscribe(val => {this.users = val;},
      error => {this.error = error.message; console.log(error);});

  }



}
