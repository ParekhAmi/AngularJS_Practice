import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloaduser',
  templateUrl: './lazyloaduser.component.html',
  styleUrls: ['./lazyloaduser.component.css']
})
export class LazyloaduserComponent implements OnInit {

  constructor() {
    console.warn("User loaded")
   }

  ngOnInit(): void {
  }

}
