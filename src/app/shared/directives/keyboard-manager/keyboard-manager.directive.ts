import {Directive, HostListener, ContentChildren, QueryList} from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
    selector: '[appKm]'
})

export class KeyboardManagerDirective{
    
    
    @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null;

    @HostListener('keyup', ['$event'])
    public manageKeys(event: KeyboardEvent): void{
        
        switch(event.key){
            case 'ArrowUp':
                console.log(this.items);
                this.moveFocus(ArrowDirection.RIGHT).focus();
                console.log('up');
            break;
            
            case 'ArrowDown':
                this.moveFocus(ArrowDirection.LEFT).focus();
                console.log('Down');
            break;

            case 'ArrowLeft':
                this.moveFocus(ArrowDirection.LEFT).focus();
                console.log('Left');
            break;

            case 'ArrowRight':
                this.moveFocus(ArrowDirection.RIGHT).focus();
                console.log('Right');
            break;
            
        }
    }

    public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective{
        const items = this.items.toArray();
        const currentSelectedIndex = items.findIndex(item => item.isFocused());
        const targetElementFocus = items[currentSelectedIndex + direction];
        
        if(targetElementFocus){
            return targetElementFocus;
        }
        return direction === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
    }

}

enum ArrowDirection{
    LEFT = -1,
    RIGHT = 1,

}