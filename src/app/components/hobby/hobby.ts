import { Component } from '@angular/core';

@Component({
  selector: 'app-hobby',
  standalone: true,
  templateUrl: './hobby.html',
  styleUrl: './hobby.css'
})
export class Hobby {
  hobbyName = 'Полювання на загублені звуки';

  description = `
    Його правило просте: «Якщо звук змушує тебе зупинитися й прислухатися — його варто зберегти»
  `;
}