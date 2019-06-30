import { Component, OnInit } from '@angular/core';
import { AccountKit, AuthResponse } from 'ng2-account-kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'facebook-account-kit';

  ngOnInit(): void {
    AccountKit.init({
      appId: '2229117677418303',
      state: 'ssdfsdfsdfsdf',
      version: 'v1.0',
    });
  }

  login(): void {
    AccountKit.login('PHONE', { countryCode: '+880', phoneNumber: '' }).then(
      (response: AuthResponse) => console.log(response.code),
      (error: any) => console.error(error)
    );
  }
}
