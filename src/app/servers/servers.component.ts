import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //selector por elemento
  //selector: '[app-servers]', // selector por atributo
  //selector: '.app-servers', //selector por clase
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serveName = 'test';
  serverCreated = false
  

  allowNewServer2 = false;
  userName='';

  servers = [ 'Testserver' , 'Testserver2'];
  

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);

    
  }


  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serveName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serveName;
    
  }

  onUpdateServerName(event: any){
    this.serveName = (<HTMLInputElement>event.target).value;
  }

  onUpdateAllowUserName(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
    if(this.userName.length!= 0){
      this.allowNewServer2 = true;
    }else{
      this.allowNewServer2 = false;
    }
  }
  onUserName(){
    this.userName="";
    this.allowNewServer2 = false;
  }

}
