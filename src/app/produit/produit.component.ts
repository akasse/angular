import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

//progresssbar
import {NgProgressService} from 'ngx-progressbar';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  form;
  constructor(public progressService: NgProgressService) { }

  ngOnInit() {
    this.form = new FormGroup({
      prenom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(7),
         //Validators.pattern('[^ @]*@[^ @]*') //email
        Validators.pattern('[\\w\\-\\s\\/]+') //chiffre et lettre
      ])),
      nom: new FormControl(''),
      langage: new FormControl(''),
    })

  }

  onSubmit(user: any) {
   // this.progressService.start();
    console.log(user);
  }

}
