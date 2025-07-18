import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  messages: { text: string, user: boolean }[] = [];
  userInput: string = '';
  errorMessage: string = '';
  canSendRequest = true;

  constructor(private router: Router, private chatService: ChatService) {}

  ngOnInit(): void {
    const initialMessage = { role: 'system', content: 'Hola, soy Amira, tu asistente virtual empática. ¿Cómo estás hoy?' };
    this.messages.push({ text: initialMessage.content, user: false });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  sendMessage() {
    if (!this.canSendRequest) {
      this.errorMessage = 'Estás enviando mensajes muy rápido. Por favor, espera unos momentos antes de intentarlo de nuevo.';
      return;
    }

    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, user: true });
      const messagesForApi = [
        { role: 'system', content: 'Eres Amira, una asistente virtual empática y amable que siempre responde con empatía y apoyo.' },
        ...this.messages.filter(m => m.user).map(m => ({ role: 'user', content: m.text })),
        { role: 'user', content: this.userInput }
      ];

      this.chatService.sendMessage(messagesForApi).subscribe(
        response => {
          const botMessage = response.choices[0].message.content.trim();
          this.messages.push({ text: botMessage, user: false });
          this.errorMessage = '';
          this.canSendRequest = true; // Permitir nuevamente el envío de solicitudes
        },
        error => {
          console.error('Error:', error);
          this.errorMessage = 'Error al comunicarse con el chatbot. Inténtalo de nuevo más tarde.';
          this.canSendRequest = true; // Permitir nuevamente el envío de solicitudes
        }
      );
      this.userInput = '';
      this.canSendRequest = false;
      timer(1000).subscribe(() => this.canSendRequest = true); // Esperar 1 segundo antes de permitir otra solicitud
    }
  }
}
