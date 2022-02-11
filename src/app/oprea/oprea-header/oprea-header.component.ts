import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-oprea-header',
  templateUrl: './oprea-header.component.html',
  styleUrls: ['./oprea-header.component.css']
})
export class OpreaHeaderComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  delete = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  deleteArticle(){
    console.log(111)
    this.delete.emit(this.item);
  }

}
