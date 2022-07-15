import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() FamilyName!: any

  @Output() parentFunctionEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.FamilyName);
  }

  sendData() {
    this.parentFunctionEvent.emit("hello");
  }
}
