import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'has-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  formCliente: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCliente = this.formBuilder.group({
      nome : this.formBuilder.control(''),
      cpf : this.formBuilder.control(''),
      telefone : this.formBuilder.control(''),
      email : this.formBuilder.control('')
    })
  }

  onSubmit(){
    console.log(this.formCliente.value);
  }

}
