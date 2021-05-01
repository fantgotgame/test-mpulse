import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png'
    },
    {
      id: 2,
      name: 'Анастасия Морозова',
      position: 'Тестировщик',
      img: 'woman.png'
    },
    {
      id: 3,
      name: 'Александр Пушкин',
      position: 'Разработчик',
      img: 'grand.png'
    },
    {
      id: 4,
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png'
    },
    {
      id: 5,
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png'
    },
    {
      id: 6,
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png'
    },
    {
      id: 7,
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png'
    },
    {
      id: 8,
      name: 'Темирлан Темирбиев',
      position: 'Супервайзер',
      img: 'man.png'
    }
  ];

  public sentArray = [];

  public myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      users: new FormArray([])
    });
  }

  ngOnInit(): void {
    this.users.forEach(user => {
      (this.myForm.get('users') as FormArray).push(new FormGroup({
        id: new FormControl(user.id),
        selected: new FormControl(false),
        name: new FormControl(user.name),
        position: new FormControl(user.position)
      }))
    });
  }

  cancel() {
    this.myForm.reset();
  }

  send() {
    if (this.myForm.valid) {
        console.log((this.myForm.get('users').value as []).filter(user => user['selected']), 'Массив отправки');
    }
  }
}
