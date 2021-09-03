import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss'],
})
export class CustomComponentComponent implements OnInit {
  array: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.array.push('test1');
    this.array.push('test2');
    this.array.push('test3');
    this.array.push('test4');
    this.array.push('test5');
    this.array.push('test6');
  }
}
