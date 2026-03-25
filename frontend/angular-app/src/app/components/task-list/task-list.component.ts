import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule,FormsModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '', status: 'pending' };
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        console.log('Tasks loaded:', data);
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
        alert('Failed to load tasks. Make sure backend is running on port 3000');
      }
    });
  }

  createTask(): void {
    if (!this.newTask.title) {
      alert('Please enter a task title');
      return;
    }
    
    this.taskService.createTask(this.newTask).subscribe({
      next: (task) => {
        this.tasks.push(task);
        this.newTask = { title: '', description: '', status: 'pending' };
        console.log('Task created:', task);
      },
      error: (error) => {
        console.error('Error creating task:', error);
        alert('Failed to create task');
      }
    });
  }

  editTask(task: Task): void {
    this.editingTask = { ...task };
  }

  updateTask(): void {
    if (this.editingTask && this.editingTask.id) {
      this.taskService.updateTask(this.editingTask.id, this.editingTask).subscribe({
        next: (updatedTask) => {
          const index = this.tasks.findIndex(t => t.id === updatedTask.id);
          if (index !== -1) {
            this.tasks[index] = updatedTask;
          }
          this.editingTask = null;
          console.log('Task updated:', updatedTask);
        },
        error: (error) => {
          console.error('Error updating task:', error);
          alert('Failed to update task');
        }
      });
    }
  }

  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          this.tasks = this.tasks.filter(t => t.id !== id);
          console.log('Task deleted:', id);
        },
        error: (error) => {
          console.error('Error deleting task:', error);
          alert('Failed to delete task');
        }
      });
    }
  }

  cancelEdit(): void {
    this.editingTask = null;
  }
}