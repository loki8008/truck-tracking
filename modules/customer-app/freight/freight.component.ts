import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  route: string;
  trackdate: string;
  id: number;
  ref: string;
  delivery: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {route: 'Hosur, Krishnagiri', trackdate: 'Hosur', id: +919876654321, ref: '', delivery: 'In Progress'},
  {route: 'Sivakasi, Virudhunagar', trackdate: '', id: +919321654877, ref:'',delivery: 'Delivered ad POD issued'},
  {route: 'Kovilpatti, Virudhunagar', trackdate: '', id: +919654321987, ref:'',delivery: 'Awaiting POD'},

];
@Component({
  selector: 'app-freight',
  templateUrl: './freight.component.html',
  styleUrls: ['./freight.component.scss']
})
export class FreightComponent{

  displayedColumns: string[] = ['route', 'trackdate', 'id', 'ref','delivery'];
  dataSource = ELEMENT_DATA;
}
