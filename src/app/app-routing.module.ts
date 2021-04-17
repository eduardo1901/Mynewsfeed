import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutguardGuard } from './guards/autguard.guard';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { component: LoginComponent, path: 'login' },
  { component: NewsComponent, path: 'noticias',canActivate:[AutguardGuard] },
  { redirectTo:"login", path: '', pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
