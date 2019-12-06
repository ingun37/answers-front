import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { LoginComponent } from './login/login.component';
import { WriteComponent } from './write/write.component';
import { BookComponent } from './book/book.component';
import { SectionComponent } from './section/section.component';
import { ExcerptComponent } from './excerpt/excerpt.component';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginUIDirective } from './login-ui.directive';
import { AuthUIComponent } from './auth-ui/auth-ui.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewItemDialogComponent } from './new-item-dialog/new-item-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    LoginComponent,
    WriteComponent,
    BookComponent,
    SectionComponent,
    ExcerptComponent,
    LoginUIDirective,
    AuthUIComponent,
    NewItemDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'books/:path', component: BookComponent },
      { path: 'write/:path/:att', component: WriteComponent },
      { path: 'whateverrrrrrrrr', component: NewItemDialogComponent },
      // { path: '**', component:  pathMatch: 'prefix' },
    ]),
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    TextFieldModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
