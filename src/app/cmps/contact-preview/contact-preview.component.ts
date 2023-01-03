import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact!:Contact
  @Output() removeContact = new EventEmitter<string>()

  constructor(private router:Router){}

  onRemoveContact(ev:MouseEvent){
    ev.stopPropagation()
    this.removeContact.emit(this.contact._id)
  }

  onEditContact(ev:MouseEvent){
    ev.stopPropagation()
    this.router.navigate(['/contact/edit',this.contact._id])
  }

  get imgUrl(){
    return `url(https://robohash.org/set_set5/${this.contact._id})`
  }
}
