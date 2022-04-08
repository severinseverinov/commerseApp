import { ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UnsavedChanges } from './unsaved-change.model';

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<UnsavedChanges> {
    constructor() {}
    //herhangi bir kayıt formu üzerinde değişiklik yapıldıktan sonra kayıt edilmedn başka bir sayfaya geçiş yapma durumunda kullanılan canDeactivate guardı
    canDeactivate(
        component: any,
        currentRoute: ActivatedRouteSnapshot
    ): boolean | Observable<boolean> {
        if (
            !component.formRef ||
            (component.formRef &&
                component.formRef.hasUnsavedChanges &&
                typeof component.formRef.hasUnsavedChanges === 'function' &&
                !component.formRef.hasUnsavedChanges())
        ) {
            return true;
        }

        return new Observable((observer: Observer<boolean>) => {

            if(confirm("Changes unsaved! Are you sure you want to leave?")){
                observer.next(true);
                observer.complete();
            }else{
                observer.next(false);
                observer.complete();
            }
        });
    }
}
