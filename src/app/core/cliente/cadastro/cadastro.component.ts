import { Component } from '@angular/core';

// or via CommonJS

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  panelOpenState = false;
  condominios = ["Teka", "Pinnus", "Embaúba", "Copaíba", "Angelin",  "Araçá", "Ingá", "Garapá"];
  tiposResidencias = ["Casa", "Condomínio"];


  
}
