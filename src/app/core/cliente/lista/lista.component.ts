import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  displayedColumns: string[] = ['nome', 'cpf', 'saldoConta', 'debitoConta', 'act'];
  clientes: any[] = [
    {
      nomeCompleto: "Lucas Malaquias C da Silva",
      cpf: "364.861.558-09",
      saldo: "R$100,00",
      debito: "R$200,00"
    },

    {
      nomeCompleto: "Jean Sales",
      cpf: "123.456.789-10",
      saldo: "R$100,00",
      debito: "R$50,00"
    },

    {
      nomeCompleto: "Rafael da Silva",
      cpf: "789.256.789-10",
      saldo: "R$50,00",
      debito: "R$150,00"
    }
  ];
}
