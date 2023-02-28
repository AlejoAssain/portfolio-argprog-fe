import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getAboutMeData() {
    return {
      title: "Acerca de mi",
      subtitle: "Hola! Mi nombre es Alejo",
      text: "Soy un desarrollador de software de 23 años. Vivo en Córdoba, Argentina. Además, desde 2018, curso la carrera de Ing. en Sistemas de Información en la Universidad Tecnológica Nacional. Comencé a programar a los 17 años y en ese momento me convertí en fan de crear tecnología! Actualmente me encuentro en la busqueda de mi primer trabajo como Jr. FullStack Developer",
      profilePicLink: "./assets/img/about-me-pic.png",
      profilePicCaption: "FullStack Dev"
    }

  }
}
