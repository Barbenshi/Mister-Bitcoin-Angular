import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
@Input() contact!:Contact
@Output() transferCoins = new EventEmitter<number|string>

amount=''

onTransferCoins(){
  this.transferCoins.emit(this.amount)
  this.amount = ''
}
}
