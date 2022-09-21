import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  //styleUrls: ['./warning-alert.component.css']
  styles: [`
    h1{
      color: red;
      font-size: large;
      text-align: center;
      background-color: rgb(255, 225, 225);
      border: 1px solid rgb(128, 0, 0);
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
