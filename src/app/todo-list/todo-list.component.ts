import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface';
import { Router, ActivatedRoute } from '@angular/router'

interface PrivateTodo extends Todo {
  selected?: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: PrivateTodo[];

  @Output()
  delete: EventEmitter<number[]> = new EventEmitter();

  selectAll = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toggleAll() {
    console.log(this.selectAll)
    this.todos.forEach(item => item.selected = this.selectAll);
  }

  check() {
    this.selectAll = this.todos.every(item => item.selected);
  }

  deleteSelected() {
    const ids = this.todos.filter(item => item.selected).map(item => item.id);
    console.log(this.delete)
    this.delete.next(ids);
  }

  navigateTo(todo: PrivateTodo, event: MouseEvent) {
    if (event.target instanceof HTMLTableCellElement) {
      this.router.navigate([todo.id], {relativeTo: this.route});
    }
  }

}
