import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    this.usuarioService.authenticate(this.username, this.password).subscribe(
      response => {
        if (response.success) {
          alert('Login exitoso');
          this.usuarioService.getUsuario(response.user_id).subscribe(user => {
            this.usuarioService.setLoggedIn(true, user);
            this.router.navigate(['/home']);
          });
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error => {
        console.error(error);
        alert('Error de conexión');
      }
    );
  }
}
