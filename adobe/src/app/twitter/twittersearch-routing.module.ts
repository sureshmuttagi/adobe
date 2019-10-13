import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterSearchComponent } from './twittersearch.component';
import { SearchResolver } from './resolvers/search.resolver';

const routes: Routes = [
    {
        path: 'twittersearch',
        pathMatch: 'full',
        component: TwitterSearchComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        SearchResolver
    ]
})

export class TwitterSearchRoutingModule { }
