import { Component } from '@angular/core';
import {  Title } from "@angular/platform-browser";
import { bounceAnimation,
  flashAnimation,
  pulseAnimation,
  rubberBandAnimation,
  bounceInUpOnEnterAnimation,
  bounceInAnimation,
  bounceInDownAnimation,
  bounceInLeftAnimation,
  bounceInRightAnimation,
  bounceInUpAnimation
} from 'angular-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter4', delay: 300 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter5', delay: 400 }),
  ]
})
export class AppComponent {
  title = 'finals';
  constructor(private titleService:Title) {
    this.titleService.setTitle("CRUELTY FREE PH");
  }

}

