import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    languages: string[] = [
      'Abaza',
      'Abenia',
      'Arabic',
      'Babine',
      'Bai',
      'Bengali',
      'Caddo',
      'Chinese',
      'Dair',
      'English',
      'French',
      'Filipino',
      'Tamil'
    ];
    constructor(private location: Location){

    }
    goBack(){
      this.location.back();
      console.log( 'goBack()....');
    }
  }
