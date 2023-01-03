import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  constructor(private bitcoinService:BitcoinService){}
  marketData:any = null
  transactionsData:any = null

async ngOnInit(){
  const marketData = await this.bitcoinService.getMarketPrice()
  this.marketData = marketData
  const transactionsData = await this.bitcoinService.getConfirmedTransactions()
  this.transactionsData = transactionsData
}
}
