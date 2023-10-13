import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { CustomerAppApiService } from 'src/app/shared/api/customer-app-api.service';

export interface PeriodicElement {
  id: string;
  start_Route: string;
  end_Route: string;
  date_time: string;
  quantity: string;
  status: string;
  driver: string;
}
const ELEMENT_DATA: any = [];

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportComponent {
  displayedColumns: string[] = [
    'plan_FrieghtId',
    'start_Route',
    'end_Route',
    'dateandtime',
    'total_Delivery_Quantity',
    'status',
    'driver',
    'action',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  constructor(public dialog: MatDialog, private api: CustomerAppApiService) {}

  ngOnInit(): void {
    this.api.CustomerTransportPlansget().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
    });
  }

  openDialog(action: any, obj: { action: any }) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Update') {
        this.updateRowData(result.data);
      }
    });
  }

  updateRowData(row_obj: any) {
    let datas: any;

    this.dataSource.data = this.dataSource.data.filter((value: any, key: any) => {
      if (value.id == row_obj.id) {
        value.start_Route = row_obj.start_Route;
        value.end_Route = row_obj.end_Route;
        value.date_time = row_obj.date_time;
        value.quantity = row_obj.quantity;
        value.status = row_obj.status;
        value.driver = row_obj.driver;

        let data: any = {
          id: row_obj.id,
          start_Route: row_obj.start_Route,
          end_Route: row_obj.end_Route,
          date_time: row_obj.date_time,
          quantity: row_obj.quantity,
          status:row_obj.status,
          driver:row_obj.driver
        };
        datas = data;

      }
      return true;
    });

    this.api.CustomerTransportPlansUpdate(datas).subscribe((data) => {
      console.log(data);
    });
  }
}
