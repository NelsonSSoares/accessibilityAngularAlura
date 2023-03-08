import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagedItemDirectivee } from './keyboard-managed-item.directive';

@NgModule({
    declarations: [KeyboardManagerDirective,
    KeyboardManagedItemDirectivee],
    imports: [CommonModule],
    exports: [KeyboardManagerDirective,
    KeyboardManagedItemDirectivee]
})
export class KeyboardManagerModule{

}