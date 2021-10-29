import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  c1title="In C1";
  s2="Hello";
  num1 :number=225;
  n1 :number=200;
  a: number = 0.259;
  b: number = 1.3495;
  collection: string[] = ['a', 'b', 'c', 'd'];
  str: string = 'abcdefghij';
  a1=["e1","e2","e3"];
  b1 :boolean=false;
  show :boolean=false;
  str1 :string="new string";
  constructor() { }
  ngOnInit(): void {
  }
  f1()
  {
    alert("Button is clicked");
  }
}