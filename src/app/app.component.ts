import { Component, OnInit } from '@angular/core';
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
    private registerBackButton: RegisterBackButtonService
  ) {}

  ngOnInit() {
    this.cordovaInit();
  }

  private cordovaInit() {
      if (this.platform.is('android')) {
        this.platform.backButton.subscribeWithPriority(Number.MAX_VALUE, () => {
          this.registerBackButton.navigateBack();
        });
      }
  }

}
