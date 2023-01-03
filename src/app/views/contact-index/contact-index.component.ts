import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts$!: Observable<Contact[]>

  filterBy = {
    term: ''
  }

  ngOnInit() {
    this.contactService.loadContacts({ ...this.filterBy })
    this.contacts$ = this.contactService.contacts$
  }

  removeContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }

  setFilter(filterBy:{term:string}){
    this.filterBy = {...filterBy}
    this.contactService.loadContacts({ ...this.filterBy })
  }
}
