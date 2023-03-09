import { Directive, ElementRef, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Directive({
    selector: '[appKmItem]'
})
export class KeyboardManagedItemDirective{

    @Output() public focused = new EventEmitter();

    constructor(private elementRef: ElementRef<HTMLElement>){}

    public focus(): void{
        this.elementRef.nativeElement.focus();
    }

    public isFocused(): boolean{
        return this.elementRef.nativeElement === document.activeElement;
    }

}