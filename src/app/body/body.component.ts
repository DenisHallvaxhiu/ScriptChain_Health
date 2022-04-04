import { Component, OnInit } from '@angular/core';
declare const readMore:any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

    callfun(){
      readMore();
    }


  ngOnInit(): void {
  }

}
