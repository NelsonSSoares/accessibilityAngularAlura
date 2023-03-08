import { Injectable } from "@angular/core";
import * as uuid from 'uuid';

@Injectable({providedIn: 'root'})
export class UniqueIdService{

    public generateUniqueIdWithPrefix(prefix: string){
        const uniqueId = this.generateuniqueId();
        return `${prefix}-${uniqueId}`;
    }


    private generateuniqueId(): string{
        return uuid.v1();
    }
}