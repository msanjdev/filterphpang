import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.css']
})

export class CheckboxListComponent implements OnInit {

  @Input() itemlist

  constructor() { }

  ngOnInit() {
  }

}
