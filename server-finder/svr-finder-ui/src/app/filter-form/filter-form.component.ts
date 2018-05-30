import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FilterData } from '../classes/filter-data';



@Component({
  selector: 'filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  filterData:FilterData

  ramCapacityList = [] //['2GB', '4GB', '8GB', '12GB', '16GB', '24GB', '32GB', '48GB', '64GB', '96GB']
  locationList = [] // ['AmsterdamAMS-01', 'DallasDAL-10', 'Washington D.C.WDC-01', 'SingaporeSIN-11','FrankfurtFRA-10']
  storageList = [] //['0', '250GB', '500GB', '1TB', '2TB', '3TB', '4TB', '8TB', '12TB', '24TB', '48TB', '72TB']
  hddTypes = [] //['SAS', 'SATA', 'SSD']

  //@ViewChild('#ramList') ramList

  constructor() { 
    this.filterData = new FilterData('0 GB')

    this.ramCapacityList = ['2GB', '4GB', '8GB', '12GB', '16GB', '24GB', '32GB', '48GB', '64GB', '96GB']
    this.locationList = ['AmsterdamAMS-01', 'DallasDAL-10', 'Washington D.C.WDC-01', 'SingaporeSIN-11','FrankfurtFRA-10']
    this.storageList = ['0', '250GB', '500GB', '1TB', '2TB', '3TB', '4TB', '8TB', '12TB', '24TB', '48TB', '72TB', '> 72TB']
    this.hddTypes = ['SAS', 'SATA', 'SSD']

    this.selectedStorage = this.storageList[0]
  }

  @Output() filterChange = new EventEmitter()

  @ViewChild('storageSlider') storageSlider

  selectedStorage:any
  selectedRam:any
  selectedHdd:any
  selectedLocation:any

  ngOnInit() {
  }

  ngOnViewInit() {
    
  }

  updateLabel(evt) {
    console.log('val: ' + evt.value)
    this.selectedStorage = this.storageList[evt.value - 1]
  }

  getValues(selectList) {
    return selectList.selectedOptions.selected.map(item => item.value)
  }

  onRamChanged(ramSelect) {
    this.selectedRam = this.getValues(ramSelect)
    console.log('' + this.selectedRam)
  }

  onHddChanged(hddSelect) {
    this.selectedHdd = hddSelect.value
    console.log('' + this.selectedHdd)
  }

  onLocationChanged(locationSelect) {
    this.selectedLocation = locationSelect.value
    console.log('' + this.selectedLocation)
  }

  applyFilter() {
    this.filterData = new FilterData(this.selectedStorage, 
        this.selectedRam, 
        this.selectedHdd,
        this.selectedLocation)

    console.log('apply filter: ' + JSON.stringify(this.filterData))

    this.filterChange.emit(this.filterData)
  }

  clearFilter() {
      this.selectedStorage = null
      this.selectedRam = null
      this.selectedHdd = null
      this.selectedLocation = null

      this.filterData = new FilterData(this.selectedStorage, 
        this.selectedRam, 
        this.selectedHdd,
        this.selectedLocation)

      this.filterChange.emit(this.filterData)
    }
}
