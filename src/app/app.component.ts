import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  donnee = 'test ak';

  auteur = {prenom:'Alioune', nom:'Kasse'};
  st:string = 'STRING';
}
