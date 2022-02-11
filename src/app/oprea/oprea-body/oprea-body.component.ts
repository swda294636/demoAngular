import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oprea-body',
  templateUrl: './oprea-body.component.html',
  styleUrls: ['./oprea-body.component.css']
})
export class OpreaBodyComponent implements OnInit {

  @Input()
  item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
