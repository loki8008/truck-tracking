import { Component,Inject, Optional} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
 driver : string;
}


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {
  drivers = new FormControl();

  driversList: string[] = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5', 'Driver6'];
  url: any; //Angular 11, for stricter type
	msg = "";

	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}

