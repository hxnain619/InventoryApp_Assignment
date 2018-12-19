import { Component, OnInit } from '@angular/core';
import {Data} from '../Data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public clicked:boolean = false;
  public data = Data;

  ngOnInit() {
  }
  
  clickedEvent(product:Element) {
    this.clicked = !this.clicked;
    if(this.clicked){
      product.className = 'card active'
    }else {
        product.className = 'card';
    }
  }

}
