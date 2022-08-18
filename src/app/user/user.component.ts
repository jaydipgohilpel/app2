import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() parentcomponent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  sendData() {
    let obj = { name: "JaydiP", age: 20 }
    this.parentcomponent.emit(obj);
  }
}
