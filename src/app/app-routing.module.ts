import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'grocery', component: GroceryListComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
