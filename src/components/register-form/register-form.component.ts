import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  constructor(private navCtrl: NavController) {
  }

  register(): void {
    this.navCtrl.setRoot('ProfilePage');
  }

}
