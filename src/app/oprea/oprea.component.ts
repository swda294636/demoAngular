import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oprea',
  templateUrl: './oprea.component.html',
  styleUrls: ['./oprea.component.css']
})
export class OpreaComponent implements OnInit {

data;
  constructor() {

  }

  ngOnInit() {

    this.data=[
      {
        "id": 1,
        "name": "Eddie",
        "year": "2001",
        "author": "eddie",
    },
    {
        "id": 2,
        "name": "Jimmy",
        "year": "2002",
        "author": "Jimmy",
    },
    {
        "id": 3,
        "name": "Ray",
        "year": "2004",
        "author": "Ray",
    }


  ]
  }

  doDelete(item : any){
    console.log(222);
      this.data=this.data.filter((v) =>{
        return  v !== item;
      })
  }

}
