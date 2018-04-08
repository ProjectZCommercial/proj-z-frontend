import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsAndUpdatesComponent } from './news-and-updates/news-and-updates.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { PinCheckComponent } from './pin-check/pin-check.component';
import { HeaderComponent } from './header/header.component';
import { TrailerComponent } from './trailer/trailer.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { FilterComponent } from './filter/filter.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QueriesFaqComponent } from './queries-faq/queries-faq.component';
import { AppFeedbackComponent } from './app-feedback/app-feedback.component';
import { LogoComponent } from './logo/logo.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CallAndOrderComponent } from './call-and-order/call-and-order.component';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { RegisterComponent } from './services/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsAndUpdatesComponent,
    AccountSummaryComponent,
    ProductComponent,
    CartComponent,
    CategoriesComponent,
    SearchComponent,
    LoginComponent,
    PinCheckComponent,
    HeaderComponent,
    TrailerComponent,
    AdvertisementsComponent,
    FilterComponent,
    RecommendationsComponent,
    ContactUsComponent,
    QueriesFaqComponent,
    AppFeedbackComponent,
    LogoComponent,
    SideBarComponent,
    CallAndOrderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
