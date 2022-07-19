import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloadadmin',
  templateUrl: './lazyloadadmin.component.html',
  styleUrls: ['./lazyloadadmin.component.css']
})
export class LazyloadadminComponent implements OnInit {

  constructor() {
    console.warn("lazy Admin loaded");
  }

  ngOnInit(): void {
  }

}
