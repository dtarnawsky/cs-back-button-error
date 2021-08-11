import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterBackButtonService } from 'src/app/core/registerbackbutton.service';

@Component({
  selector: 'app-thesecond',
  templateUrl: './thesecond.page.html',
  styleUrls: ['./thesecond.page.scss'],
})
export class ThesecondPage implements OnInit {

  constructor(
    private navController: NavController,
    private registerBackButton: RegisterBackButtonService
  ) { }

  ngOnInit() {
    this.registerBackButton.setIsBackButtonDisabled(true);
  }

  goBack() {
    this.navController.back({animated: false});
  }

  ionViewWillLeave() {
    this.registerBackButton.canGoToConfirmationPage = false;
    this.registerBackButton.setIsBackButtonDisabled(false);
  }

}
