import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-jest',
  templateUrl: './jest.component.html',
  styleUrls: ['./jest.component.css']
})
export class JestComponent implements OnInit {
  rs: any;
  point: any;
  constructor() { }

  ngOnInit(): void {
  }
  testClick() {
    this.setPount();
    if(this.point === ''){
      this.rs = 'PLEASE FILL';
    } else if(this.point >= 50) {
      this.rs = 'PASS';
    }else{
      this.rs = 'FAUL';
    }
  }
  setPount(){
    this.point = 3;
  }
}
