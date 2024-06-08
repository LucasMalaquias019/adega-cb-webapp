import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-marcar-item',
  templateUrl: './marcar-item.component.html',
  styleUrls: ['./marcar-item.component.css']
})
export class MarcarItemComponent implements OnInit {


  public isDataExistente: boolean = false;
  public cliente: any;
  public formMarcarItem: any
  public total: any

  constructor(
    public dialogRef: MatDialogRef<MarcarItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }


  ngOnInit(): void {
    this.cliente = this.data;
    if (this.cliente.dadosConta) {
      this.cliente.historicosConta = [this.cliente.dadosConta];
    }

    this.carregarFormulario();
  }

  public carregarFormulario() {
    this.formMarcarItem = new FormGroup({
      codigoProduto: new FormControl(),
      descricaoProduto: new FormControl(),
      valorUnt: new FormControl(),
      quantidade: new FormControl(),
    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  public mudarOpcaoData(event: any) {
    this.isDataExistente = event.checked;
  }

  public inserindoValor(valor: any) {
    this.calcluarTotal()
  }

  public inserindoQuantidade(valor: any) {
    this.calcluarTotal()
  }
  

  public calcluarTotal() {
    let valorCompra;
    valorCompra = (this.formMarcarItem.controls['valorUnt'].value * this.formMarcarItem.controls['quantidade'].value)
    this.total = valorCompra.toFixed(2);
    this.total = this.total.replace(".", ",")
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
    const handleBarCode = (scanned_barcode: any) => {
      this.formMarcarItem.controls['valorUnt'].value = scanned_barcode
    }
  }
}
