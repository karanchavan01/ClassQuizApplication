import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: false,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // user=this.login.getUser();

  user : any;
  constructor(private login:LoginService) { }

  ngOnInit(): void {

    this.user = this.login.getUser(); 
  }

}
