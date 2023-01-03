import { Injectable } from '@angular/core';
import { StorageService } from "./storage.service";
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { lastValueFrom, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {
    constructor(private storageService: StorageService, private http: HttpClient) { }

    STORAGE_KEY = 'bitcoin'

    gMarketPriceCache = this.storageService.load(this.STORAGE_KEY)

    getRate(coins: number) {
        //   return axios.get(`https://blockchain.info/tobtc?currency=USD&cors=true&value=${coins}`).then(({ data })=>{
        //       this.storageService.store('user-btc',data)
        //       return data
        //   })
        const url = `https://blockchain.info/tobtc?currency=USD&cors=true&value=${coins}`
        return lastValueFrom(
            this.http.get<number>(url)
                .pipe(tap(data => console.log('data', data)))
        )
    }

    getMarketPrice() {
        if (this.gMarketPriceCache) return this.gMarketPriceCache
        // return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        //     .then(({ data }) => {
        //         this.storageService.store(this.STORAGE_KEY, data)
        //         return data
        //     })
        const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
        return lastValueFrom(
            this.http.get<any>(url)
                .pipe(
                    tap(data => this.storageService.store(this.STORAGE_KEY, data))
                )
        )
    }

    getConfirmedTransactions() {
        const transactions = this.storageService.load('transactions')
        if (transactions) return transactions
        // return axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
        //     .then(({ data }) => {
        //         this.storageService.store('transactions', data)
        //         return data
        //     })
        const url = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
        return lastValueFrom(
            this.http.get<any>(url)
                .pipe(
                    tap(data => this.storageService.store('transactions', data))
                )
        )
    }
}
