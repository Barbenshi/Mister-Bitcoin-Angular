import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactService:ContactService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    const contactId = route.params['id']
    // Mocking service... delaying the information
    return this.contactService.getContactById(contactId).pipe(delay(500))
  }
}
