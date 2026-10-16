import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-training-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './training-page.component.html',
  styleUrl: './training-page.component.css',
})
export class TrainingPageComponent {
  liveText = '';

  count = 0;

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  invisible = true;

  toggleVisibility() {
    this.invisible = !this.invisible;
  }

  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  newName = '';
  names: string[] = [];

  addName() {
    if (this.newName.trim() !== '') {
      this.names.push(this.newName.trim());
      this.newName = '';
    }
  }

  removeName(index: number) {
    this.names.splice(index, 1);
  }
}
