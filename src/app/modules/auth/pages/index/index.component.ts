import { Component } from '@angular/core';
import { faChevronDown, faCirclePlay, faGlobe, faRegistered, faAppleWhole, faEnvelope, faCamera, faStore } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

//background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
    `
      .gradient {
        background: center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170);
      }
    `,
  ],
})
export class IndexComponent {

  faChevronDown = faChevronDown;
  faCirclePlay = faCirclePlay;
  faGlobe = faGlobe;
  faRegistered = faRegistered;
  faAppleWhole = faAppleWhole;
  faEnvelope = faEnvelope;
  faCamera = faCamera;
  faStore = faStore;

  constructor(
    private router: Router
  ) { }

}
