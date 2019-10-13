import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Search } from "../../models/twittersearch.model";
import * as frmSearchAction from "../actions/twittersearch.actions";

export interface SearchState extends EntityState<Search> { };

export function searchPrimaryKey(a: Search): number {
    return a.id;
}

export const SearchAdapter: EntityAdapter<Search> = createEntityAdapter<Search>({
    selectId: searchPrimaryKey,
    sortComparer: false
});

export const initialSearchState: SearchState = SearchAdapter.getInitialState();

export function SearchReducer(
    state = initialSearchState,
    action: frmSearchAction.SearchActions
): SearchState {
    switch (action.type) {
        case frmSearchAction.LOAD_TWITTER_SEARCH: {
            return state;
        }
        case frmSearchAction.LOAD_TWITTER_SEARCH_FAIL: {
            return state;
        }
        case frmSearchAction.LOAD_TWITTER_SEARCH_SUCCESS: {
            return SearchAdapter.addAll(action.payload, state);
        }
        default: {
            return state;
        }
    }
}

