import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profileOpen = false;

  constructor(private router: Router) {}

  startConversation() {
    this.router.navigate(['/conversation']);
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }
}
