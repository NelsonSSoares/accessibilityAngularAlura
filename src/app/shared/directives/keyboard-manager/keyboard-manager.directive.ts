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
                
                console.log('up');
            break;
            
            case 'ArrowDown':
                console.log('Down');
            break;

            case 'ArrowLeft':
                console.log('Left');
            break;

            case 'ArrowRight':
                console.log('Right');
            break;
            
        }
    }
}