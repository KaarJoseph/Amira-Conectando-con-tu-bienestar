import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ConversationComponent } from './pages/conversation/conversation.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { RegisterComponent } from './pages/usuario/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './pages/usuario/perfil/perfil.component';
import { UsuarioService } from './services/usuario.service';
import { AuthGuard } from './guards/auth.guard';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversationComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService, AuthGuard, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
