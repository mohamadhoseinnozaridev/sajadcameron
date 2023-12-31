import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlidshowComponent } from './components/slidshow/slidshow.component';
import { ImagmainComponent } from './components/imagmain/imagmain.component';
import { TextbolderComponent } from './components/textbolder/textbolder.component';
import { ProuductnewComponent } from './components/prouductnew/prouductnew.component';
import { TextproductComponent } from './components/textproduct/textproduct.component';
import { ProductallComponent } from './components/productall/productall.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterdiscripchionComponent } from './components/footerdiscripchion/footerdiscripchion.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NabartitelComponent } from './components/Nabartitel/nabartitel.component';
import { MainpagedetileComponent } from './components/mainpagedetile/mainpagedetile.component';
import { AssumptionComponent } from './components/Assumption/Assumption.component';
import { ProductboxComponent } from './components/productbox/productbox.component';
import { SlidfilterComponent } from './components/slidfilter/slidfilter.component';
import { SlidlastproductComponent } from './components/slidlastproduct/slidlastproduct.component';
import { ResultproductComponent } from './pages/resultproduct/resultproduct.component';
import { MainresultproductComponent } from './components/mainresultproduct/mainresultproduct.component';
import { DiscripshionComponent } from './components/discripshion/discripshion.component';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SlidshowComponent,
    ImagmainComponent,
    TextbolderComponent,
    ProuductnewComponent,
    TextproductComponent,
    ProductallComponent,
    FooterComponent,
    FooterdiscripchionComponent,
    DetailComponent,
    NabartitelComponent,
    MainpagedetileComponent,
    AssumptionComponent,
    ProductboxComponent,
    SlidfilterComponent,
    SlidlastproductComponent,
    ResultproductComponent,
    MainresultproductComponent,
    DiscripshionComponent,
    MainComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
