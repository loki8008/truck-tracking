import { Component, ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Transporer 1', weight: '26000.00', symbol: '10 MT+ 2 Nos' },
  {position: 2, name: 'Transporer 17', weight: 'Not Bid Yet ', symbol: ''},
  {position: 3, name: '', weight: '26000.00', symbol: '',},

];
@Component({
  selector: 'app-senttransport',
  templateUrl: './senttransport.component.html',
  styleUrls: ['./senttransport.component.scss']
})
export class SenttransportComponent{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  editRowId:number=-1

  @ViewChild(MatTable,{static:true}) table: MatTable<any> | undefined;
  title: any;
  inputs: any;
  edit(row: number,element: any)
  {
    this.editRowId=row;
    setTimeout(()=>{
      this.inputs.find((x: { nativeElement: { getAttribute: (arg0: string) => any; }; })=>x.nativeElement.getAttribute('name')==element).nativeElement.focus()

    })
  }
}
