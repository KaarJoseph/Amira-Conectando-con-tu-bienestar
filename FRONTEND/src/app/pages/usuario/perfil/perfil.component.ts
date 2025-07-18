import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario | null = null;
  esPsicologo: boolean = false;
  estadisticas: any = null;
  profileImage: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.getCurrentUser();
    this.esPsicologo = this.usuario?.rol === 'psicologo';
    if (this.esPsicologo) {
      this.cargarEstadisticas();
    }
  }

  cargarEstadisticas(): void {
    this.usuarioService.getEstadisticas().subscribe(stats => {
      this.estadisticas = stats;
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.profileImage = reader.result;
      reader.readAsDataURL(file);
    }
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
    console.log('Cerrando sesión');
  }
}
