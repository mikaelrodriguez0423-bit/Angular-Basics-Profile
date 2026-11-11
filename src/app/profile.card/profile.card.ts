import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile.card.css',
  templateUrl: './profile.card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'Motivated student developer with a passion for building interactive web applications. I am currently expanding my skills in the Angular framework, combining functional logic with modern, immersive UI design to create visually striking digital experiences.';
}
