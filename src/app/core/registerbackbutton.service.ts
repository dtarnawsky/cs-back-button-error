import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class RegisterBackButtonService {

  backButtonDisabled = false;
  isBackButtonGestureEvent: boolean;
  canGoToConfirmationPage;
  previousUrl: any;

  constructor(
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController,
    private navController: NavController,
    private router: Router
  ) { }

  setIsBackButtonDisabled(isBackButtonDisabled: boolean) {
    this.backButtonDisabled = isBackButtonDisabled;
  }

  async navigateBack() {

    this.isBackButtonGestureEvent = true;
    const isModalOpened = await this.modalController.getTop();
    const isIonLoaderPresent = await this.loadingController.getTop();
    const isActionSheetPresent = await this.actionSheetController.getTop();

    let path = this.router.url.toString();
    
    if (isModalOpened) {
      this.modalController.dismiss();
      return;
    } else if (isActionSheetPresent) {
      this.actionSheetController.dismiss();
      return;
    } else if (this.backButtonDisabled) {
      return;
    } else if (path === '/tabs/home') {
      // this.appMinimize.minimize();
    } else {
      this.navController.back();
    }

  }

}
