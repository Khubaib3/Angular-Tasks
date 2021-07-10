import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() public save = Function();
  @Input() type = '';
  @Input() editTask: Task = {
    id: 0,
    title: '',
    time: '',
    prio: '',
    completed: false
  }


  task: Task = {
    id: Math.floor(Math.random() * 10000000),
    title: '',
    time: '',
    prio: 'Medium',
    completed: false
  }

  constructor() { }

  ngOnInit(): void {
    if(this.type == 'Edit') {
      this.task = this.editTask
    }
  }

}
