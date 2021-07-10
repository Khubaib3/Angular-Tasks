import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  tasks = [
    {
      title: 'Task 1',
      prio: 'High',
      time: '45 minutes',
      completed: false
    },
    {
      title: 'Task 2',
      prio: 'Low',
      time: '15 minutes',
      completed: false
    },
    {
      title: 'Task 3',
      prio: 'Medium',
      time: '30 minutes',
      completed: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
