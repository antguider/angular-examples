import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface text {
  value: string,
  id: number
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoList: Array<text> = [];
  txtValue: string = "";

  onAdd() {
    const value = this.txtValue;
    console.log('value', value);
    const valueObj = {value: value, id: this.todoList.length + 1}
    this.todoList.push(valueObj);
    this.txtValue = "";
  }

  remove(item: text) {
    this.todoList = this.todoList.filter((curr) => curr.id !== item.id);
  }
}
