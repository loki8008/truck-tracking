import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerAppApiService } from '../../api/customer-app-api.service';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
   form1: FormGroup;
   form2: FormGroup;
  invalidLogin!: boolean;
  submitted: boolean | undefined;
  constructor(private formBuilder: FormBuilder,private api:CustomerAppApiService) {

    this.form1 = this.formBuilder.group({
      mobile_number: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],});

      this.form2 = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(2)]],
      confirm_password: ['', [Validators.required, Validators.minLength(2)]],
    },
      {
        validators: this.password
      }
    );
  }
    ngOnInit() {
  }
  get pass (): any {
    return this.form2.get('password');
  }
  get conPass (): any {
    return this.form2.get('confirm_password');
  }
  passwordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective | NgForm): boolean => {

      const invalidCtrl = !!(control && control.invalid && (control.touched));
      const invalidParent = !!(control && control.parent && control.touched && control.parent.invalid && control.parent.dirty && this.conPass.touched);
      return (invalidCtrl || invalidParent);
    }
  };
  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective | NgForm): boolean => {
      const invalidCtrl = !!(control && control.invalid && (control.touched));
      const invalidParent = !!(control && control.parent && control.touched && control.parent.invalid && control.parent.dirty && this.pass.touched);
      return (invalidCtrl || invalidParent);
    }
  };
  getErrorMessage (controlName: string) {
    if (this.form2.controls[controlName].hasError('minlength')) {
      return 'Must be at least 2 characters';
    }
    if (this.form2.controls[controlName].hasError('required')) {
      return 'You must enter a password';
    }
    return 'Passwords must match';
  }
  password (formGroup: any) {
    const { value: password } = formGroup.get('password');
    const { value: confirm_password } = formGroup.get('confirm_password');

    return password ===confirm_password ? null : { mismatch: true };
  }
  onSubmit (): void {
    this.submitted = true;
    if (this.form1.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form1.value, null, 2));
    console.log(JSON.stringify(this.form2.value, null, 2));
  }

  saveForm() {
    let data = {
       mobile_number:this.form1.value.mobile_number,
      password:this.form2.value.password,
      confirm_password:this.form2.value. confirm_password,
    }
    this.form1.reset();
    this.form2.reset();
    this.api.CustomerForgot(data).subscribe((data) => {
      console.log(data);
  });

    }
    get mobile_number () {
      return this.form1.get('mobile_number');
        }

  }

