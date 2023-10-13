import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomerAppApiService } from 'src/app/shared/api/customer-app-api.service';

export interface UsersData {
  id: string;
  start_Route: string;
  end_Route: string;
  date_time: string;
  quantity: string;
}

const ELEMENT_DATA: any = [];
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'plan_FrieghtId',
    'start_Route',
    'end_Route',
    'dateandtime',
    'total_Delivery_Quantity',
    'action',
  ];
  // data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  constructor(public dialog: MatDialog, private api: CustomerAppApiService) {}

  ngOnInit(): void {
    this.api.CustomerPlansget().subscribe((data) => {
      // console.log(data);
      this.dataSource.data = data;
    });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */

  removeSelectedRows() {
    this.selection.selected.forEach((item) => {
      let index: number = this.dataSource.data.findIndex((d: Element) => d === item);
      console.log(this.dataSource.data.findIndex((d: Element) => d === item));
      this.dataSource.data.splice(index, 1);

      this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
    });
    this.selection = new SelectionModel<Element>(true, []);
    this.api.CustomerDelete(this.dataSource).subscribe((data) => {
      console.log(data);
    });
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.event == 'Add') {
        this.addRowData(result.data);
      } else if (result?.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result?.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: any) {
    var d = new Date();

    let data: any = {
      id: row_obj.id,
      start_Route: row_obj.start_Route,
      end_Route: row_obj.end_Route,
      date_time: row_obj.date_time,
      quantity: row_obj.quantity,
    };
    this.dataSource.data.push(data);
    this.table.renderRows();

    this.api.CustomerPlans(data).subscribe((data) => {
      console.log(data);
    });

    let data2: any = {
      id: row_obj.id,
      start_Route: row_obj.start_Route,
      end_Route: row_obj.end_Route,
      date_time: row_obj.date_time,
      quantity: row_obj.quantity,
      status: 'Not Quoted',
      driver: '',
    };
    this.api.CustomerTransportPlans(data2).subscribe((data) => {
      console.log(data);
    });
  }
  updateRowData(row_obj: any) {
    let datas: any;
    this.dataSource.data = this.dataSource.data.filter((value: any, key: any) => {
      // if (value.id == row_obj.id) {
      //   value.start_Route = row_obj.start_Route;
      //   value.end_Route = row_obj.end_Route;
      //   value.date_time = row_obj.date_time;
      //   value.quantity = row_obj.quantity;
      // }

      if (value.id == row_obj.id) {
        value.start_Route = row_obj.start_Route;
        value.end_Route = row_obj.end_Route;
        value.date_time = row_obj.date_time;
        value.quantity = row_obj.quantity;

        let data: any = {
          id: row_obj.id,
          start_Route: row_obj.start_Route,
          end_Route: row_obj.end_Route,
          date_time: row_obj.date_time,
          quantity: row_obj.quantity,
        };

        datas = data;
      }

      console.log(datas);

      return true;
    });
    this.api.CustomerUpdate(datas).subscribe((data) => {
      console.log(data);
    });
  }

  deleteRowData(row_obj: any) {
    console.log(row_obj);

    // this.selection.selected.forEach((item) => {
    //   let index: number = this.dataSource.data.findIndex((d: Element) => d === item);
    //   console.log(this.dataSource.data.findIndex((d: Element) => d === item));
    //   this.dataSource.data.splice(index, 1);
    //   console.log(index);

    //   this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
    // });
    // this.selection = new SelectionModel<Element>(true, []);

    let data;
    let id = this.dataSource.data.filter((value, key) => {
      console.log(value.id);
      data = value.id;
      return value.id != row_obj.id;
    });
    // console.log(row_obj.id);
    this.selection.selected.forEach((item) => {
      let index: number = this.dataSource.data.findIndex((d: Element) => d === item);
      console.log(this.dataSource.data.findIndex((d: Element) => d === item));
      this.dataSource.data.splice(index, 1);

      this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
    });
    this.selection = new SelectionModel<Element>(true, []);

    this.api.CustomerDelete(data).subscribe((data) => {
      console.log(data);
    });
    this.api.CustomerTransportPlanDelete(data).subscribe((data) => {
      console.log(data);
    });

   
  }
}
