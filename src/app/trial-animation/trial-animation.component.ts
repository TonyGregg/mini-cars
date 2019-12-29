import { Component, OnInit } from '@angular/core';
import { state, style, animate, trigger, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-trial-animation',
  templateUrl: './trial-animation.component.html',
  styleUrls: ['./trial-animation.component.scss'],
  animations : [
    trigger('customHover', [
      state('inactive', style({
       transform: 'scale(1)',
        backgroundColor: '#ffffcc'
      })),
      state ('active', style({
       transform: 'scale(1.1)',
       backgroundColor: '#c5cae8'
      })),
     transition('inactive => active', animate('100ms ease-in')),
     transition('active => inactive', animate('100ms ease-out'))
  ]),
  trigger('animationToggle', [
    transition('show => hide', [
     style({transform: 'translateX(-100%)'}),
     animate(350) ]),
     transition('hide => show', animate('3000ms'))
   ])]
})
export class TrialAnimationComponent implements OnInit {
  title = 'Animation works';
  state = 'inactive';
  hideOrShow = 'show';
  toggleBackground() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
  hideMe() {
    this.hideOrShow = (this.hideOrShow === 'show' ? 'hide' : 'show');
  }

  constructor() { }

  ngOnInit() {
  }

}
