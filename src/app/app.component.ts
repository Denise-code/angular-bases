import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`
    //h3{
      //color: dodgerblue;
    //}
  //`]
})
export class AppComponent {
  /*
  name= 'Denise';
  showSecret = false;
  log = [];

  onToggle(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
  */

  numbers = [1,2,3,4,5];
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  onlyOdd = false;
  value = 5;
}
