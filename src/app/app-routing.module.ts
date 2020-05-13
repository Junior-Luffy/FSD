import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './shared/component/signin/signin.component';
import { SignupComponent } from './shared/component/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ProfilesComponent } from './user/component/profiles/profiles.component';
import { CompanyComponent } from './company/company.component';
import { ListCompanyComponent } from './company/component/list-company/list-company.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { UpdateCompanyComponent } from './company/component/update-company/update-company.component';
import { AddCompanyComponent } from './company/component/add-company/add-company.component';
import { CompanyCompareComponent } from './chart/component/company-compare/company-compare.component';
import { CompanyCompareChartComponent } from './chart/component/company-compare-chart/company-compare-chart.component';
import { SectorCompareComponent } from './chart/component/sector-compare/sector-compare.component';
import { SectorCompareChartComponent } from './chart/component/sector-compare-chart/sector-compare-chart.component';
import { ChartComponent } from './chart/chart.component';
import { UpdateProfilesComponent } from './user/component/update-profiles/update-profiles.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SigninComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'user', component: UserComponent, children: [
    {
      path: 'profiles',
      component: ProfilesComponent
    },
    {
      path: 'update-profiles',
      component: UpdateProfilesComponent
    },
    {
      path: 'list-company',
      component: ListCompanyComponent
    },
    {
      path: 'chart',
      component: ChartComponent,
      children: [
        {
          path: 'company-compare',
          component: CompanyCompareComponent
        },
        {
          path: 'company-compare-chart',
          component: CompanyCompareChartComponent
        },
        {
          path: 'sector-compare',
          component: SectorCompareComponent
        },
        {
          path: 'sector-compare-chart',
          component: SectorCompareChartComponent
        }
      ]
    }
  ]},
  { path: 'admin', component: UserComponent, children: [
    {
      path: 'importdata',
      component: ImportdataComponent
    },
    {
      path: 'company',
      component: CompanyComponent,
      children: [
        {
          path: 'list-company',
          component: ListCompanyComponent
        },
        {
          path: 'update-company',
          component: UpdateCompanyComponent
        },
        {
          path: 'add-company',
          component: AddCompanyComponent
        }
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
