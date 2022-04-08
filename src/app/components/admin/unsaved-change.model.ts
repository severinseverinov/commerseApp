import { Observable } from 'rxjs';

export interface UnsavedChanges {
    hasUnsavedChanges: () => Observable<boolean> | Promise<boolean> | boolean;
}
//herhangi bir kayıt formu üzerinde değişiklik yapıldıktan sonra kayıt edilmedn başka bir sayfaya geçiş yapma durumunda kullanılan canDeactivate guardın methodu
