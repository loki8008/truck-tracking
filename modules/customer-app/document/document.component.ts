import { Component} from '@angular/core';
export interface PeriodicElement {
  name: number;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Image 1', name: 849489 },
  {position: 'Image 5', name: 106578},
  {position: '', name: 9},


];
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent{

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

}
