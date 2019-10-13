import * as frmSearchReducer from "./twittersearch.reducer";

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface SearchState {
    Result: frmSearchReducer.SearchState
}

export const reducers: ActionReducerMap<SearchState> = {
    Result: frmSearchReducer.SearchReducer
}

export const getSearchState = createFeatureSelector<SearchState>('search');