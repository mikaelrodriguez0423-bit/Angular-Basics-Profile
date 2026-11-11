import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile.card/profile.card';

@Component({
  imports: [RouterOutlet,ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    fullName = 'Mikael Sheeray Rodriguez';
    location = 'Porac, Pampanga';
    email = 'mikaelrodriguez0423@example.com';
    phone = '0962 786 2721';

  profile = 'A humble apprentice of the digital realm, I am drawn to the art of web development. I delight in unraveling the mysteries of emerging technologies, transforming raw code into useful, breathing applications that make the unseen visible.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java','Python','Php','Mysql','Mongodb'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
