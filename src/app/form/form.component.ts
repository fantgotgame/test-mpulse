import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  users = [
    {
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png',
      check: false
    },
    {
      name: 'Анастасия Морозова',
      position: 'Тестировщик',
      img: 'woman.png',
      check: false
    },
    {
      name: 'Александр Пушкин',
      position: 'Разработчик',
      img: 'grand.png',
      check: false
    },
    {
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png',
      check: false
    },
    {
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png',
      check: false
    },
    {
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png',
      check: false
    },
    {
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png',
      check: false
    },
    {
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png',
      check: false
    }
  ];

  public myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
