import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent  {
  @Input() filter!:{term:string}
  @Output() setFilter = new EventEmitter<{term:string}>()

  filterBy = this.filter || {term:''}

  onSetFilter() {
    this.setFilter.emit(this.filterBy)
  }


}
