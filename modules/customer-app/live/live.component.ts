import { Component} from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent {
  states: string[] = [
    'On reaching location Gps Coordinates',
    'On loss of communication from',
    'Add Notification Event Trigger'
  ];
}

