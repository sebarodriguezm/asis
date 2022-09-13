import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { IonicModule } from '@ionic/angular';
import {MatSliderModule} from '@angular/material/slider';




import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSliderModule,
    IonicModule,
   
    InicioPageRoutingModule
  ],

  declarations: [InicioPage],
  
})
export class InicioPageModule{}
