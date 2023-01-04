import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

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
    private userService:UserService
    ) { }

  contact!: Contact 
  subscription!: Subscription
  userSubs!:Subscription
  user$!:Observable<User|null>

  async ngOnInit(): Promise<void> {
    // New way with resolver
    this.subscription = this.route.data.subscribe(({contact})=>{
      this.contact = contact
    })
    this.user$ = this.userService.user$
    
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

  getMoves(user:User){
    return user.moves.filter(move=>move.toId === this.contact._id).sort((a,b)=>b.at-a.at)
  }

  onTransferCoins(amount:number|string){
    this.userService.addMove({...this.contact},amount as number)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
