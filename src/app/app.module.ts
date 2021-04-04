import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsServicesComponent } from './/components/cards-services/cards-services.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { CardsOperationsComponent } from './components/cards-operations/cards-operations.component';
import { CardOperationComponent } from './components/card-operation/card-operation.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CardEnterprisesComponent } from './components/card-enterprises/card-enterprises.component';
import { CardCertificatesComponent } from './components/card-certificates/card-certificates.component';
import { CardsSustainabilityComponent } from './components/cards-sustainability/cards-sustainability.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerMiddleComponent } from './components/banner-middle/banner-middle.component';
import { CardsAreComponent } from './components/cards-are/cards-are.component';
import { CardMissionComponent } from './components/card-mission/card-mission.component';
import { CardVisionComponent } from './components/card-vision/card-vision.component';
import { AboutComponent } from './views/about/about.component';
import { CardsTeamComponent } from './components/cards-team/cards-team.component';
import { CardTeamComponent } from './components/card-team/card-team.component';
import { BannerWorkComponent } from './components/banner-work/banner-work.component';
import { CardServiceOneComponent } from './components/card-service-one/card-service-one.component';
import { CardServiceTwoComponent } from './components/card-service-two/card-service-two.component';
import { ContainerServicesComponent } from './components/container-services/container-services.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BannerServicesComponent } from './components/banner-services/banner-services.component';
import { CoverageComponent } from './views/coverage/coverage.component';
import { CardsClientsComponent } from './components/cards-clients/cards-clients.component';
import { MapComponent } from './components/map/map.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    CardsServicesComponent,
    CardServiceComponent,
    HomeComponent,
    ServicesComponent,
    HeaderComponent,
    BannerHomeComponent,
    CardsOperationsComponent,
    CardOperationComponent,
    CardEnterprisesComponent,
    CardCertificatesComponent,
    CardsSustainabilityComponent,
    FooterComponent,
    BannerMiddleComponent,
    CardsAreComponent,
    CardMissionComponent,
    CardVisionComponent,
    AboutComponent,
    CardsTeamComponent,
    CardTeamComponent,
    BannerWorkComponent,
    CardServiceOneComponent,
    CardServiceTwoComponent,
    ContainerServicesComponent,
    TimelineComponent,
    BannerServicesComponent,
    CoverageComponent,
    CardsClientsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
