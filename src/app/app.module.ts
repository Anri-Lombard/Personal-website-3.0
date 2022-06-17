import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BlogExpandedComponent } from './blog-expanded/blog-expanded.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { PdfViewerModule }  from  'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

// Angular Fire
// import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    AppComponent,
    BlogsPageComponent,
    TopBarComponent,
    FooterComponent,
    ProjectDetailsComponent,
    BlogExpandedComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
