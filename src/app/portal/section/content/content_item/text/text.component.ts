import {Component, Input, OnInit, Renderer} from '@angular/core';
import {PortalComponent} from '../../../../portal.component';
// import { DomSanitizer } from '@angular/platform-browser'
// import { PipeTransform, Pipe } from "@angular/core";
// @Pipe({ name: 'safeHtml'})
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit  {
  @Input()
  data;
  portals = this.portal;
  constructor(public portal: PortalComponent, public renderer: Renderer) {}
  ngOnInit() {
    this.appendHTMLSnippetToDOM();
  }

  appendHTMLSnippetToDOM()
  {
   
    const fragment = document.createRange().createContextualFragment(this.data.text);
  
  }
}

