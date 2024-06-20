import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLengthNumber]'
})
export class MaxLengthNumberDirective {

  @Input() appMaxLengthNumber: number;

  constructor(private el:ElementRef) { }

  @HostListener('input',['$event']) onInputChange(event:Event):void{
    const input=event.target as HTMLInputElement;
    if(input.value.length>this.appMaxLengthNumber){
      
      input.value=input.value.slice(0,this.appMaxLengthNumber);
    }
    
  }

}
