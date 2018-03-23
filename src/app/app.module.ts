import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { MonComponentComponent } from './mon-component/mon-component.component';
import { ProduitComponent } from './produit/produit.component';
import { MembersComponent } from './members/members.component';

//chart
import { NvD3Module } from 'angular2-nvd3';

//progressbar
import { NgProgressModule } from 'ngx-progressbar';

//service
import { MyDataService } from './my-data.service';

// wizard
import { FormWizardModule } from 'angular2-wizard';
@NgModule({
  declarations: [
    AppComponent,
    MonComponentComponent,
    ProduitComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NvD3Module,
    NgProgressModule,
    FormWizardModule,
    RouterModule.forRoot([
      {
        path : 'member',
        component : MembersComponent
      },
      {
        path : 'produit',
        component : ProduitComponent
      }
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
