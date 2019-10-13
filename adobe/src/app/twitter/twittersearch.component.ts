import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import * as frmStore from "./store/index";
import { Search, QueryParamList } from './models/twittersearch.model';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { interval, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'twitter-search',
    templateUrl: './twittersearch.component.html'
})

export class TwitterSearchComponent implements OnInit {

    searchText: string;
    searchReults: Search[];
    counter: number;

    constructor(
        private store: Store<frmStore.SearchState>,
        private messageService: MessageService,
        private route: ActivatedRoute
    ) {
        this.searchReults = [];
        this.searchText = '';
        this.counter = 0;
    }

    ngOnInit() {

        this.route.queryParams.subscribe((param: QueryParamList) => {
            this.dispatchSearchAction(param.key);
        });

        timer(1000, 2000).subscribe((val) => {
            this.counter--;
            if (this.counter <= 1) {
                switchMap(() => timer(1000, 2000))
            }
        });

        interval(60000).subscribe((val) => {
            this.route.queryParams.subscribe((param: QueryParamList) => {
                this.dispatchSearchAction(param.key);
            });
        });

        this.store.select(frmStore.selectAllSearchResults).subscribe((result: Search[]) => {
            console.log(result);
            this.searchReults = result;
            this.counter = 30;

        });
    }

    dispatchSearchAction(key: string = 'adobe') {
        console.log(key);
        this.store.dispatch(new frmStore.LoadTwitterSearch(key));
    }

    handleSearchClick() {
        if (this.searchText.trim() === '') {
            return false;
        }
        this.dispatchSearchAction(this.searchText);
    }
}
