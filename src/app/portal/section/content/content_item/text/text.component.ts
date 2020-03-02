import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../../../../portal.component';
import {DomSanitizer} from '@angular/platform-browser';
import { DynamicScriptLoaderService } from '../../../../../DynamicScriptLoaderService';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit  {
  @Input()
  data;
  portals = this.portal;
  constructor(public portal: PortalComponent, public renderer: DomSanitizer, private dynamicScriptLoader: DynamicScriptLoaderService) {}
  ngOnInit() {
    this.renderer.bypassSecurityTrustHtml(this.data.text);
    this.loadScripts();
  }
   private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('random-gen','random-num').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

  
}

