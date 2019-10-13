import { createSelector } from '@ngrx/store';
import * as reducer from '../reducers';
import { SearchAdapter } from '../reducers/twittersearch.reducer';

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = SearchAdapter.getSelectors((state: reducer.SearchState) => state.Result);
//Our TenantAdapter adapter instance has a getSelectors method that takes-in the feature to select from the state and then returns selectAll, selectEntities, selectIds and selectTotal. In this case, we only need selectAll and we rename it to selectAllTodos.

// select the array of user ids
export const selectSearchResultsIds = createSelector(reducer.getSearchState, selectIds);

// select the dictionary of user entities
export const selectSearchResultsEntities = createSelector(reducer.getSearchState, selectEntities);

// select the array of users
export const selectAllSearchResults = createSelector(reducer.getSearchState, selectAll);

// select the total user count
export const selectSearchResultsTotal = createSelector(reducer.getSearchState, selectTotal);
