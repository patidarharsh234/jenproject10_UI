import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoNumbers]'
})
export class NoNumbersDirectiveDirective {

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    // Allow control keys such as backspace, delete, tab, escape, enter, and arrow keys
    if (
      key === 'Backspace' || key === 'Delete' || key === 'Tab' || key === 'Escape' || key === 'Enter' ||
      (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown')
    ) {
      return;
    }
    // Prevent numbers
    if (/[0-9]/.test(key)) {
      event.preventDefault();
    }
  }

}
