import { Directive, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    @HostBinding('class.open') open: boolean;

    ngOnInit() {
      this.open = false;
    }

    @HostListener('click') toggleOpen(eventData: Event) {
        this.open = !this.open;
    }
}
