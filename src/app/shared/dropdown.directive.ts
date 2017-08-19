import {Directive,HostListener,HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') open : boolean;

    ngOnInit() {
      this.open = false;
    }

    @HostListener('click') toggleOpen(eventData : Event) {
        this.open = !this.open;
    }
}