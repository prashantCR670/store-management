import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './components/billing/billing.component';
import { StoreInventoryComponent } from './components/store-inventory/store-inventory.component';
import { ConsumerDetailsComponent } from './components/consumer-details/consumer-details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    StoreInventoryComponent,
    ConsumerDetailsComponent,
    NavbarComponent,
    FooterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
