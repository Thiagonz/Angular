import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
/* Variável que recebe o valor da função handleFilterChange */
private filterString: Subject<string> = new Subject<string>();

  constructor(private userService: UserService){}
  

  /* Fazemos um switchMap em nosso Subject filterString e atribuímos   o resultado à nossa lista de usuários */
  ngOnInit() {
    this.users = this.filterString
    .debounceTime(300)
    .switchMap(value => this.userService.getUsers(value))
    .catch(error => /* Tratamos erros aqui :) */);
  }

 
  private users: User[]; // Lista de usuários
  /* Neste método chamamos a função userService.getUsers, que nos retorna um Observable contendo um array de usuários, então atribuímos ao this.users */
  getUsers() {
    this.userService.getUsers()
                    .subscribe(
                      users => this.users = users,
                      error => /* Tratamos erros aqui :) */);


/* Função que recebe o valor digitado e coloca em nosso Subject */
handleFilterChange(value: string) {
  this.filterString.next(value);
}

}
