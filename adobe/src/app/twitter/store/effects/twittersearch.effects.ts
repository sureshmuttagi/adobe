import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as frmService from "../../services/twittersearch.service";
import * as frmSearchAction from "../actions/twittersearch.actions";

@Injectable()
export class SelectorTennatEffects {
    constructor(
        private action$: Actions,
        private twitterSearchService: frmService.TwitterSearchDataService
    ) { }

    @Effect()
    loadTwitterSearchReults$ = this.action$.pipe(
        ofType(frmSearchAction.LOAD_TWITTER_SEARCH),
        map((action: frmSearchAction.LoadTwitterSearch) => action.payload),
        switchMap((payload) => {
            return this.twitterSearchService.getSearchResult(payload)
                .pipe(
                    map(result => new frmSearchAction.LoadTwitterSearchSuccess(result)),
                    catchError(error => of(new frmSearchAction.LoadTwitterSearchFailure(error)))
                )
        })
    );
}