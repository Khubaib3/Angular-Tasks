import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



import { Task } from '../../task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;
  faChevronLeft = faChevronLeft

  public editTask = Function()

  editForm = false
  formType = 'Edit'

  task: Task = {
    id: 0,
    title: '',
    time: '',
    prio: '',
    completed: false
  }
  id = null

  constructor(public route: ActivatedRoute, private taskService: TaskService, private router: Router) {
    this.route.params.subscribe(params => this.id = params.id)
  }

  ngOnInit(): void {
    this.taskService.getTask(this.id).subscribe(task => this.task = task)
    this.editTask = this.editingTask.bind(this)
  }

  editingTask(task: Task) {
    this.taskService.editTask(task).subscribe(task => this.task = task)
    this.editForm = !this.editForm
  }

  deletingTask(id: any) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.router.navigate(['/tasks'])
    })
  }

  updatingStatus(task: Task) {
    task.completed = !task.completed
    return this.taskService.updateStatus(task).subscribe(task => this.task = task)
  }
}
