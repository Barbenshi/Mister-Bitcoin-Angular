import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private location:Location,
    ) { }

  contact!: Contact 
  subscription!: Subscription

  async ngOnInit(): Promise<void> {
    // New way with resolver
    this.subscription = this.route.data.subscribe(({contact})=>{
      this.contact = contact
    })
    
    // Old way...
    // let contactId = ''
    // this.subscription = this.route.params.subscribe(params => contactId = params['id'])
    // console.log('contactId', contactId)
    // const contact = await lastValueFrom(this.contactService.getContactById(contactId))
    // this.contact = contact
  }

  onBack() {
    // this.router.navigateByUrl('/contact')
    // Another way
    this.location.back()
  }

  get imgUrl() {
    return `https://robohash.org/set_set5/${this.contact?._id}`
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
