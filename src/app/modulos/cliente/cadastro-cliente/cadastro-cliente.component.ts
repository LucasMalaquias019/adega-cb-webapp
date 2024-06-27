import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements AfterViewInit {
  panelOpenState = false;
  condominios = ["Teka", "Pinnus", "Embaúba", "Copaíba", "Angelin",  "Araçá", "Ingá", "Garapá"];
  tiposResidencias = ["Casa", "Condomínio"];

  public barCode: any;
  formCliente: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formCliente = _formBuilder.group({
      cpf: [null],
      nomeCompleto: [null],
      dtNascimento: [null],
      rg: [null],
      celular: [null],
      cep: [null],
      nomeRua: [null],
      numeroCasa: [null],
      bairro: [null]
      
    })
  }

  test() {
    document.addEventListener('keydown', function(evnt) {
      let interval;
      let barCode = '';
      if (interval) {
        clearInterval(interval);
        if(evnt.code == 'Enter') {
          if(barCode) {
            handleBarCode(barCode);
            barCode = '';
            return;
          }
        }
        if(evnt.code != 'Shift') {
          barCode += evnt.key;
          interval = setInterval(() => barCode = '', 20);
        }
      }
    });
    function handleBarCode(scanned_barcode: any) {
      console.log(scanned_barcode)
    }
  }

  ngAfterViewInit(): void {
    console.log("OOO")
  }
}
