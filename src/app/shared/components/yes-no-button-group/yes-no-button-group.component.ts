import { Component, Input, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.serivce';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(()=> YesNoButtonGroupComponent) //executa provida depois que classe é instanciada ou existir
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string =null;
  @Input() public label: '';
  @Input() disabled = false;
  @Output() public valueChange = new EventEmitter<string>();

  public id: string =null;
  public options = YesNoButtonGroupOptions;
  public onChange =  (value:string) => {};
  public onTouched =  () => {};
  
  constructor(uniqueIdService: UniqueIdService) { 
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  
  public ngOnInit(): void {
  }


  public activate(value: string): void{
    this.writeValue(value);
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  
  public registerOnChange(fn: (value:string)=> void): void {
    this.onChange =fn;
  }

  public registerOnTouched(fn: ()=> void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}

enum YesNoButtonGroupOptions{
 YES = 'yes',
 NO = 'no'
}
