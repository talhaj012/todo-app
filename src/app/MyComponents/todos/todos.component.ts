import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  loacalItem!: string | null;
  todos!:Todo[];

  constructor() { 
    this.loacalItem = localStorage.getItem('todos');
    if(this.loacalItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.loacalItem);
    }

  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
 
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
