import { Component} from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  plan: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Transporer 1', weight: 'syad  ifthar', symbol: '95455198789',plan:'hosur' },
  {position: 2, name: '', weight: ' ', symbol: '',plan:''},
  {position: 3, name: '', weight: '', symbol: '',plan:''},
  {position: 3, name: '', weight: '', symbol: '',plan:''},

];
@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.scss']
})
export class AllocateComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','plan'];
  dataSource = ELEMENT_DATA;

}
