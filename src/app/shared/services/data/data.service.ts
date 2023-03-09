import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getBannerData() {
    return {
      title: "ALEJO ASSAIN",
      subtitle: "BIENVENIDOS A MI PORTFOLIO"
    }
  }

  getAboutMeData() {
    return {
      title: "Acerca de mi",
      subtitle: "Hola! Mi nombre es Alejo",
      text: "Soy un desarrollador de software de 23 años. Vivo en Córdoba, Argentina. Además, desde 2018, curso la carrera de Ing. en Sistemas de Información en la Universidad Tecnológica Nacional. Comencé a programar a los 17 años y en ese momento me convertí en fan de crear tecnología! Actualmente me encuentro en la busqueda de mi primer trabajo como Jr. FullStack Developer",
      profilePicLink: "./assets/img/about-me-pic.png",
      profilePicCaption: "FullStack Dev"
    }
  }

  getSkillsData() {
    return {
      title: "Hard & Soft Skills",
      subtitle: "Algunos de mis skills en programacion",
      skills: [{
        name: "SpringBoot",
        percentage: 100,
        description: "Backend con Java y SpringBoot"
      },
      {
        name: "Angular",
        percentage: 80,
        description: "Frontend con Angular"
      }, {
        name: "SQL",
        percentage: 100,
        description: "Manejo de bases de datos SQL"
      }, {
        name: "NoSQL",
        percentage: 80,
        description: "Manejo de bases de datos NoSQL"
      }]
    }
  }

  getEducationData() {
    return {
      title: "Educacion",
      subtitle: "Mi formacion academica",
      educations: [{
        institutionName: "Universidad Tecnológica Nacional - FRC",
        yearFrom: 2018,
        title: "Ingeniería en Sistemas de Información - Analista Universitario de Sistemas",
        imageLink: "/assets/img/utn-logo.jpg"
      },
      {
        institutionName: "Academia de Inglés americano I.I.C.A.N.A",
        title: "Basic English Instruction Program - 4th",
        yearFrom: 2010,
        yearTo: 2017
      }]
    }
  }

  getExperienceData() {
    return {
      title: "Experiencia",
      subtitle: "Mis experiencias laborales",
      experiences: [{
        company: "Equipamientos Fox",
        imageLink: "./assets/img/equipamientos-fox-logo.png",
        position: "Soporte Técnico",
        positionInformation: "Formé parte del equipo encargado de brindar servicio técnico a PCs e impresoras dentro de la empresa",
        yearFrom: 2018,
        monthFrom: "Enero",
        yearTo: 2020,
        monthTo: "Marzo"
      }, {
        company: "Tenis",
        imageLink: "./assets/img/equipamientos-fox-logo.png",
        position: "Asistente",
        positionInformation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quis dicta voluptate commodi ducimus facere, veniam vel nulla accusamus at. Quaerat reiciendis repellat commodi blanditiis, ut esse! Obcaecati, repellendus ipsum!",
        yearFrom: 2020,
        monthFrom: "Abril",
        yearTo: 2021,
        monthTo: "Agosto"
      }]
    }
  }

  getProjectsData() {
    return {
      title: "Proyectos",
      subtitle: "",
      projects: [
        {
          name: "Blog",
          description: "Mi blog personal creado en Python con Flask",
          month: "Diciembre",
          year: 2021,
          link: "alejo.com"
        },
        {
          name: "Portfolio",
          description: "Mi primer portfolio, creado con React",
          month: "Enero",
          year: 2022,
          link: "alejo.com"
        },
        {
          name: "Notes app",
          description: "Aplicacion de notas personales",
          month: "Mayo",
          year: 2022,
          link: "alejo.com"
        }
        ]
    }
  }
}
