import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';
// import { HttpClientService } from '../../services/common/http-client.service';
declare var $: any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService
  ) {
    // const img = _renderer.createElement("img");
    // img.setAttiribute("src", "../../../../../assets/delete-icon.png");
    // img.setAttiribute("style", "cursor: pointer;");
    // img.width = 25;
    // img.height = 25;
    // _renderer.appendChild(element.nativeElement, img);
    const img = _renderer.createElement("img");
    img.setAttiribute("src", "../../../../../assest./delete-icon.png");
    img.setAttiribute("style", "cursor: pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

  @HostListener("click")
  onclick() {
    const td:HTMLTableCellElement=this.element.nativeElement;
    // const img: HTMLImageElement = event.srcElement;
    $(td.parentElement).fadeOut(1000);
  }
}
