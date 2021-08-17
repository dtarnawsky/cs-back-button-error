import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RegisterBackButtonService } from './core/registerbackbutton.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private registerBackButton: RegisterBackButtonService,
    private router: Router
  ) { }

  ngOnInit() {
    // @ts-ignore: private option not yet exposed for public use
    this.router.canceledNavigationResolution = 'computed';
    
    this.cordovaInit();
    this.router.events.subscribe((event: NavigationStart) => {
      if (event instanceof NavigationStart) {
        console.log('start', event.url);
        this.registerBackButton.previousUrl = event.url;
      }
      if (event instanceof NavigationEnd) {
        console.log('end', event.url);
      }
    });
  }

  private cordovaInit() {
    if (this.platform.is('android')) {
      this.platform.backButton.subscribeWithPriority(Number.MAX_VALUE, () => {
        console.log('back button here');
        this.registerBackButton.navigateBack();
      });
    }
  }

}
