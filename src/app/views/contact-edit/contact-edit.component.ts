import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  constructor(
    private contactService:ContactService,
    private route:ActivatedRoute,
    private router:Router,
    ){}
  contact!: Contact
  subscription!:Subscription

  async ngOnInit(): Promise<void>{
    this.subscription = this.route.data.subscribe(({contact})=>{
      this.contact = contact || this.contactService.getEmptyContact()
    })
    // let contactId
    // this.subscription = this.route.params.subscribe(params=>contactId = params['id'])
    // this.contact = contactId ?
    // await lastValueFrom(this.contactService.getContactById(contactId)):
    // this.contactService.getEmptyContact() 
  }

  onSubmit(){
    this.contactService.saveContact({...this.contact})
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
