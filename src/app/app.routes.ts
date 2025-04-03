import { Routes } from '@angular/router';

import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {path:'inicio', component: HomeComponent},
    {path:'users', component: UsersComponent},
    {path:'users/:id', component: UserDetailsComponent}
];
