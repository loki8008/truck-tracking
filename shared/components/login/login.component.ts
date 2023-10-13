import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerAppApiService } from '../../api/customer-app-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;
  invalidLogin!: boolean;
  constructor(private formBuilder: FormBuilder, private api: CustomerAppApiService,private router:Router) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(2)]],
      mobile_number: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }
  saveForm() {
    let data = this.form.value;

    this.api.CustomerLogin(data).subscribe(
      (res) => {
        // console.log(data);
        // console.log(res);

        const token = <any>res.token;
        localStorage.setItem('jwt', token);

        this.invalidLogin = false;
        this.router.navigateByUrl('/customer-app');
      },
      (error) => {
        this.invalidLogin = true;
      }
    );


  }
}
