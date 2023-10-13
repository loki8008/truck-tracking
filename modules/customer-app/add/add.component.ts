import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup,FormBuilder, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit{
  form1: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  this.form1 = new FormGroup({
    'Biz1' : new FormControl(null, Validators.required),
    'service' : new FormControl(null, Validators.required),
    'quanity' : new FormControl(null, Validators.required),
    'mt' : new FormControl(null, Validators.required),
    'Biz' : new FormControl(null, Validators.required),
    'service2' : new FormControl(null, Validators.required),
    'quanity1' : new FormControl(null, Validators.required),
    'mt1' : new FormControl(null, Validators.required),
    'quanity3' : new FormControl(null, Validators.required),
    'mt3' : new FormControl(null, Validators.required),
    'biz3' : new FormControl(null, Validators.required),
    'service3' : new FormControl(null, Validators.required),
    'quanity4' : new FormControl(null, Validators.required),
    'mt4' : new FormControl(null, Validators.required),
  })
}
saveForm() {
  console.log(this.form1.value);

}
  tmpo: number | undefined;
  onAddRow(){
    this.tmpo=1;
  }
  onAddRow1(){
    this.tmpo=2;
  }
  onDelete(){
    this.tmpo=0;
  }
  onAddRow2(){
    this.tmpo=3;
  }
  onAddRow3(){
    this.tmpo=4;
  }
  onAddRow4(){
    this.tmpo=5;
  }
  onAddRow5(){
    this.tmpo=6;
  }
  onAddRow6(){
    this.tmpo=7;
  }
  onAddRow7(){
    this.tmpo=8;
  }

  ngOnInit() {

  }
 myControl = new FormControl();
  options : string[] = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
];
units : number[]= [
  1.00,
  2.00,
  3.00,
  4.00,
  5.00,
  6.00,
  7.00,
  8.00,
  9.00
];
unit = [
  {
    "place" : "hosur"},
];
states = [
  {
    "name" : "hosur"},
];
addItem(index: any) {
  var currentElement = this.states[index];
  this.states.splice(index,0,currentElement);
}
deleteItem(index: any) {
  var element = this.states[index];
  this.states.splice(index, 1);

}
  disableSelect = new FormControl(false);
  quantity: number[]= [
    1.00,
    2.00,
    3.00,
    4.00,
    5.00,
    6.00,
    7.00,
    8.00,
    9.00
  ];
  unitss: number[]= [
    1.00,
    2.00,
    3.00,
    4.00,
    5.00,
    6.00,
    7.00,
    8.00,
    9.00
  ];
  service: string[] = [
    'Pick-Up',
    'Pick-Up + Delivery',
    'Delivery',
    'Report'
  ];


}

