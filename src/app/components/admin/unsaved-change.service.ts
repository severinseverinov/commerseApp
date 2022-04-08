import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//herhangi bir kayıt formu üzerinde değişiklik yapıldıktan sonra kayıt edilmedn başka bir sayfaya geçiş yapma durumunda kullanılan canDeactivate servisi
export class UnsavedChangesService {
  public unsavedChangesDialogListSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<any>(null);

  constructor() {}

  displayUnsavedChangesDialog() {
    this.unsavedChangesDialogListSubject.next(true);
  }
}
