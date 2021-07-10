import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  faChevronRight = faChevronRight;

  public addNewTask = Function()

  tasks: Task[] = []
  newForm: boolean = false
  formType: string = 'New'

  constructor(private taskServer: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskServer.getTasks().subscribe(tasks => this.tasks = tasks)
    this.addNewTask = this.addingNewTask.bind(this)
  }

  addingNewTask(task: Task) {
    this.taskServer.addTask(task).subscribe(task => this.tasks.push(task))
    this.newForm = !this.newForm
  }

  viewTask(id: any) {
    return this.router.navigate([`/task/${id}`])
  }

}
