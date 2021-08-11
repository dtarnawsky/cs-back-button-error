import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RegisterBackButtonService } from 'src/app/core/registerbackbutton.service';

@Component({
  selector: 'app-thefirst',
  templateUrl: './thefirst.page.html',
  styleUrls: ['./thefirst.page.scss'],
})
export class ThefirstPage implements OnInit {

  constructor(
    private router: Router,
    private navController: NavController,
    private registerBackButton: RegisterBackButtonService
  ) { }

  ngOnInit() {
  }

  goToSecond() {
    this.registerBackButton.canGoToConfirmationPage = true;
    this.router.navigate(['/tabs/tab2/thesecond']);
  }

  goBack() {
    this.navController.back({animated: false});
  }

}
