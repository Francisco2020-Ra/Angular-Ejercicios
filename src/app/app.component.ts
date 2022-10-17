import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pildoras';

  nombre: String = "Ariel";
  apellido: String = "Ledezma";
  edad: number = 15;

  textoRegistro: String = "No hay nadie registrado";

  /* Property Binding */
  valorProperty: boolean = false;

  userRegister = false;

  getRegisterUser(){

    this.userRegister = true;
  }


  /* Event Binding */

  setUserRegister(event: Event){
    //alert("El usuario se ha registrado");
    //this.textoRegistro = "El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value== "si"){
      this.textoRegistro = "El usuario se aca de registrar";
    }else{
      this.textoRegistro = "No hay nadie registrado";
    }
  }

  /* Two Way Binding */


  empresa: String = "Google";

}
