import { Component } from '@angular/core';
import { HcaptchaService } from './service/hcaptcha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public robot: boolean;
  public expirado: boolean;
   
  constructor(public captchaSerice: HcaptchaService) {
      this.robot = true;
      this.expirado = false;
  }
   
  onVerify(token: string) {
     this.captchaSerice.getToken(token)
     .pipe()
     .subscribe((res)=>{
      if(res==true){
        this.robot = false;
      }
     })   
     
  }

  onExpired(response: any) {
      alert('Se ha expirado el tiempo para rellenar el sistema de seguridad. Recarga la página.');
      this.expirado=true;
  }
   
  onError(error: any) {
      alert('Tenemos un probelma, creemos que eres un robot.');
      console.log("Robot");
      this.robot = true;
      // An error occured during the verification process.
  }
}
