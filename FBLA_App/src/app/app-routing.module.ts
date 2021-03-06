import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'meet-us', loadChildren: './meet-us/meet-us.module#MeetUSPageModule' },
  { path: 'fbla-competitive-events', loadChildren: './fbla-competitive-events/fbla-competitive-events.module#FBLACompetitiveEventsPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'current-events', loadChildren: './current-events/current-events.module#CurrentEventsPageModule' },
  { path: 'fbla-sign-up', loadChildren: './fbla-sign-up/fbla-sign-up.module#FblaSignUpPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'terms-of-use', loadChildren: './terms-of-use/terms-of-use.module#TermsOfUsePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
