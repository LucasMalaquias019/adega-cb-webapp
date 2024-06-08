import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { MarcarItemComponent } from 'src/app/shared/components/marcar-item/marcar-item.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css'],

})
export class DetalheClienteComponent implements OnInit {
  condominios = ["Teka", "Pinnus", "Embaúba", "Copaíba", "Angelin",  "Araçá", "Ingá", "Garapá"];
  tiposResidencias = ["Casa", "Condomínio"];
  tipoResidenciaSelecionada: string = '';

  formCliente: any;
  cliente: any;
  
  panelOpenState = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService : ClienteService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog

  ) {
    
  }

  ngOnInit(): void {
    this.carregarDadosCliente(this.activatedRoute.snapshot.params['id'])
  this.carregarFormulario();
  }

  public carregarFormulario() {
    this.formCliente = new FormGroup({
      cpf: new FormControl(),
      nomeCompleto: new FormControl(),
      dataNascimento: new FormControl(),
      rg: new FormControl(),
      celular: new FormControl(),
      cep: new FormControl(),
      nomeRua: new FormControl(),
      numero: new FormControl(),
      bairro: new FormControl()

    })
  }

  public preencherFormulario(dadosCliente: any) {
    this.formCliente.patchValue({
      cpf: dadosCliente.cpf,
      nomeCompleto: dadosCliente.nomeCompleto,
      dataNascimento: dadosCliente.dataNascimento,
      rg: dadosCliente.rg,
      celular: dadosCliente.celular,
      cep: dadosCliente['endereco'].cep,
      nomeRua: dadosCliente['endereco'].rua,
      numero: dadosCliente['endereco'].numero,
      bairro: dadosCliente['endereco'].bairro,

    })
  }

  public carregarDadosCliente(id: any) {
    this.clienteService.getCliente(id).subscribe((data: any) => {
      this.cliente = data[0];
      this.preencherFormulario(this.cliente)  
    });
  }

  public confirmarAlteracaoDados() {
    Swal.fire({
      title: "Salvar",
      html: "Tem certeza que deseja salvar as alterações?",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "black",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Sucesso", "Dados salvo com sucesso!", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }


  public excluirCadastro() {
    Swal.fire({
      title: "Excluir cadastro",
      html: "Tem certeza que deseja realizar essa operação?",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "black",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Sucesso", "Dados salvo com sucesso!", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }


  openDialog(conta?: any): void {
    const dialogRef = this.dialog.open(MarcarItemComponent, {
      data: {historicosConta: this.cliente.historicoConta, dadosConta: conta ? conta : undefined} 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  public selecionaTipoMoradia(event: any) {
    this.tipoResidenciaSelecionada = event.value
  }

}
