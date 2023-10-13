import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AppLoaderService } from 'src/app/shared/services/app-loader-service/app-loader.service';
import { OpenDialogsService } from 'src/app/shared/services/openDialogs/open-dialogs.service';
import { UtcDateTimeService } from 'src/app/shared/services/UTC-Time/utcDateTime.service';

@Component({
  selector: 'app-taskmembers',
  templateUrl: './taskmembers.component.html',
  styleUrls: ['./taskmembers.component.scss'],
})
export class TaskmembersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginatorElement', { read: ElementRef })
  paginatorHtmlElement!: ElementRef;

  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = [
    'name',
    'upload_File',
    'rename-file',
    'download',
    'copy',
    'share',
    'file-activity-notifications',
    'promote-to-admin',
    'remove_user',
  ];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  clickedRow = new Set<any>();

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public openDialog: OpenDialogsService,
    private loader: AppLoaderService,
    private router: ActivatedRoute,
    private snackbar: MatSnackBar,
    private utcTimeDate: UtcDateTimeService
  ) {
    // this.paginator =  MatPaginator;
  }

  folderDetails: any;
  folderId!: number;
  getFolderData: any;
  userId: any;
  // end

  highlight(element: any) {
    element.highlighted = !element.highlighted;
    this.selection.toggle(element);
    // row.highlighted = !row.highlighted
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterValue = '';
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  /* Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /* Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  editFile: any;
  renameFile: any;
  downloadFile: any;
  copyFile: any;
  shareFile: any;
  fileActivityNotifications: any;
  promoteToAdmin: any;

  // getFolderPermission = () => {
  //   this.loader.open();
  //   this.cloudApp_api.getFolderPermission(localStorage.getItem('CustId'), this.folderId).subscribe((res: any) => {
  //     this.loader.close();
  //     this.snackbar.open('get File Permission successfully', 'Done', {
  //       duration: 1000
  //     });
  //     this.dataSource.data = JSON.parse(res.data);
  //     let FilesData = JSON.parse(res.data);
  //     this.folderDetails = FilesData[0];
  //   }, err => {
  //     this.loader.close();
  //     this.snackbar.open(err);
  //   })
  // }

  // addNewUserToFile() {

  //   const dialogRef = this.dialog.open(AddNewUserDialogComponent, {
  //     height: '600px',
  //     width: '400px',
  //     data: { folderId: this.folderId, ref: "folderId", userId: this.userId }
  //   })
  //   dialogRef.afterClosed().subscribe(res => {
  //     if (res === "add") {
  //       this.getFolderPermission()
  //     }
  //   })
  // }

  getutcTimeDate() {
    return this.utcTimeDate.getUTC();
  }

  // updateFolderPermission(e: any) {
  //   this.loader.open();
  //   this.cloudApp_api.updateFolderPermission(e).subscribe((res: any) => {
  //     this.loader.close();
  //     this.snackbar.open('Update File Permission successfully', 'Done', {
  //       duration: 1000
  //     });
  //     // this.getFolderPermission()
  //     // console.log(res);
  //   }, err => {
  //     this.loader.close();
  //     this.snackbar.open("error");
  //   })
  // }

  // deletUserForFilesPermission(userId: any) {
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     width: '280px',
  //     height: '170px'
  //   });
  //   dialogRef.afterClosed().subscribe(res => {
  //     if (res === "delete") {
  //       this.loader.open()
  //       this.cloudApp_api.deleteUserForFolderPermission(localStorage.getItem('CustId'), this.folderId, userId).subscribe((res) => {
  //         this.loader.close();
  //         this.snackbar.open('delete data successfully', 'Done', {
  //           duration: 1000
  //         });
  // this.getFolderPermission();
  //       }, err => {
  //         this.loader.close();
  //         this.snackbar.open('error', 'Done', {
  //           duration: 1000
  //         })
  //       })
  //     }

  //   });
  // }

  ngOnInit() {
    this.folderId = this.router.snapshot.params['folderId'];
    this.userId = this.router.snapshot.params['userId'];
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Entries Per Page';
    // this.getFolderPermission();
  }
}
