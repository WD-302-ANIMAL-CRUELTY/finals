import { Component, OnInit } from '@angular/core';
import {
  bounceAnimation,
  flashAnimation,
  pulseAnimation,
  rubberBandAnimation,
  shakeAnimation,
  swingAnimation,
  rotateAnimation
} from 'angular-animations';
@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.component.html',
  styleUrls: ['./petitions.component.css'],
  animations: [
    pulseAnimation({ anchor: 'pulse' }),
    rotateAnimation({ anchor: 'rotate90', degrees: 90 }),
  ]
})
export class PetitionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
