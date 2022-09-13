import { Component, OnInit } from '@angular/core';

import {ThemePalette} from '@angular/material/core';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  scanActive: boolean = false;
  color: ThemePalette = 'primary';
  public myAngularxQrCode: string = null;
  constructor(
    
    ) {
      this.myAngularxQrCode = 'www.tiendavirtualchileweb.cl';
     }

  ngOnInit() {
  }

  
}

