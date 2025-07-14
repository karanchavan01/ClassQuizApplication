import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  showChat = false;
  userMessage = '';
  messages: { sender: string; text: string }[] = [];

  userName: string = '';
  nameCaptured = false;

  constructor(
    private observer: BreakpointObserver,
    public dialog: MatDialog,
    public login: LoginService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  get isLoggedIn(): boolean {
    return this.login.isLoggedIn();
  }

  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat && this.messages.length === 0) {
      this.messages.push({
        sender: 'Bot',
        text: '👋 Hello! I\'m ClassQuiz Chatbot. What\'s your name? 😊'
      });
    }
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      const message = this.userMessage.trim();
      this.messages.push({ sender: 'You', text: message });

      // Lowercase for easy matching
      const lower = message.toLowerCase();

      // Extract Name
      if (!this.nameCaptured) {
        const nameMatch = message.match(/(?:my name is|i am|i'm)\s+(.+)/i);
        if (nameMatch) {
          this.userName = nameMatch[1].trim();
          this.nameCaptured = true;
          setTimeout(() => {
            this.messages.push({
              sender: 'Bot',
              text: `Welcome ${this.userName}! 👋 How can I assist you today?`
            });
          }, 500);
        } else {
          setTimeout(() => {
            this.messages.push({
              sender: 'Bot',
              text: `Hmm 🤔 I didn’t catch your name. Please say something like "My name is Jack."`
            });
          }, 500);
        }
        this.userMessage = '';
        return;
      }

      // Responses to common questions
      let botReply = '🤖 I’m here to help! Please try asking another question.';

      if (lower.includes('quiz') && lower.includes('start')) {
  botReply = '🚀 To start a quiz, go to the dashboard and click the "Start Quiz" button. Make sure you are logged in to access the quiz.';
} else if (lower.includes('register')) {
  botReply = `📝 You can register by clicking on the "Register" tab in the sidebar. You'll need to provide your name, email, and a password. Once registered, you can log in anytime!`;
} else if (lower.includes('login')) {
  botReply = `🔐 You can login using your registered email and password from the "Login" menu.\n\n📝 If you're not registered yet, please register first using the "Register" option in the sidebar.`;
} else if (lower.includes('contact') || lower.includes('support')) {
  botReply = `📞 You can reach our support team by emailing support@classquiz.com.\nWe’re happy to help with registration, login issues, quiz errors, or feedback!`;
} else if (lower.includes('features')) {
  botReply = `✨ ClassQuiz offers:\n- 📊 Taking and reviewing quizzes\n- 🧠 Tracking performance\n- 📚 Admin upload and manage questions\n- 👥 User-friendly interface\n\nPerfect for students and teachers alike!`;
} else if ((lower.includes('forgot') || lower.includes('reset')) && lower.includes('password')) {
  botReply = `🔄 No worries! Click on the "Forgot Password" option on the login page.\nYou'll receive an email to reset your password securely.`;
} else if (lower.includes('dashboard')) {
  botReply = `📋 The dashboard is where you can:\n- Start new quizzes\n- View your past attempts\n- Check your scores\n\nNavigate to it after login.`;
} else if (lower.includes('admin')) {
  botReply = `👨‍💻 Admins can:\n- Upload quiz questions\n- Manage users\n- Review quiz results\n\nLog in as an admin to access the Admin Panel.`;
} else if (lower.includes('user') && lower.includes('profile')) {
  botReply = `🧑 You can view or update your user profile by clicking your avatar on the top-right.\nUpdate your name, email, or even change your password there.`;
} else if (lower.includes('logout') || lower.includes('log out')) {
  botReply = `👋 You can log out anytime by clicking the "Logout" button on the sidebar or header.\nMake sure to save your progress before logging out.`;
} else {
  botReply = '🤖 I’m here to help! Try asking about registration, login, quizzes or features.';
}


      setTimeout(() => {
        this.messages.push({
          sender: 'Bot',
          text: botReply
        });
      }, 500);

      this.userMessage = '';
    }
  }
}