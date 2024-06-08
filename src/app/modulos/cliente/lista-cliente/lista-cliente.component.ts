import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cpf', 'saldoConta', 'debitoConta', 'act'];
  clientes: any[] = [];

constructor(private clienteService: ClienteService) {}


ngOnInit(): void {
  this.carregarClientes();
  
}

public carregarClientes() {
  this.clienteService.listar().subscribe((clientes: any) => {
    this.clientes = clientes;
  })
}


}
