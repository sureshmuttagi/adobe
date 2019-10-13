import { Action } from "@ngrx/store";
import { Search } from "../../models/twittersearch.model";

export const LOAD_TWITTER_SEARCH = "[TWITTER] Load search";
export const LOAD_TWITTER_SEARCH_SUCCESS = "[TWITTER] Load search Success";
export const LOAD_TWITTER_SEARCH_FAIL = "[TWITTER] Load search Fail";


export class LoadTwitterSearch implements Action {
    readonly type = LOAD_TWITTER_SEARCH;
    constructor(public payload: string) { }
}


export class LoadTwitterSearchSuccess implements Action {
    readonly type = LOAD_TWITTER_SEARCH_SUCCESS;
    constructor(public payload: Search[]) { }
}


export class LoadTwitterSearchFailure implements Action {
    readonly type = LOAD_TWITTER_SEARCH_FAIL;
    constructor(public payload: any) { }
}

export type SearchActions = LoadTwitterSearch | LoadTwitterSearchSuccess | LoadTwitterSearchFailure;