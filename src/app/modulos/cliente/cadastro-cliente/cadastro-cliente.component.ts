import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements AfterViewInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  panelOpenState = false;
  condominios = ["Teka", "Pinnus", "Embaúba", "Copaíba", "Angelin",  "Araçá", "Ingá", "Garapá"];
  tiposResidencias = ["Casa", "Condomínio"];

  public barCode: any;

  constructor(private _formBuilder: FormBuilder) {

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
    // this.test();
    console.log("OOO")
  }
}
