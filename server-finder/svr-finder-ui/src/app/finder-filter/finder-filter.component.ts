import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-finder-filter',
  templateUrl: './finder-filter.component.html',
  styleUrls: ['./finder-filter.component.css']
})
export class FinderFilterComponent implements OnInit {

  @ViewChild('sidenav') sidenav;
  @ViewChild('servertable') serverTable;

  constructor() { }

  ngOnInit() {
    this.sidenav.open()
  }

  ngOnViewInit() {
    
  }

  applyFilter(filterData) {
    console.log("applying filter in container")
    this.serverTable.applyFilter(filterData)
  }

}
