import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../core/services/project.service';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-list.component.html',
  styles: [`
    /* Staggered card entrance — CSS-only, no JS timers */
    .project-card {
      opacity: 0;
      animation: cardIn 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
    }

    @keyframes cardIn {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Each card gets its delay via inline style (see template) */
  `]
})
export class ProjectListComponent implements OnInit {
  allProjects    = signal<Project[]>([]);
  availableTags  = signal<string[]>([]);
  availableTech  = signal<Set<string>>(new Set());
  selectedTag    = signal<string>('All');
  selectedTech   = signal<Set<string>>(new Set());

  filteredProjects = computed(() => {
    const tag  = this.selectedTag();
    const tech = this.selectedTech();
    return this.allProjects().filter(p => {
      const tagMatch  = tag === 'All' || p.tags.includes(tag);
      const techMatch = tech.size === 0 || [...tech].every(t => p.tech.includes(t));
      return tagMatch && techMatch;
    });
  });

  activeFilterCount = computed(() => {
    let n = this.selectedTag() !== 'All' ? 1 : 0;
    return n + this.selectedTech().size;
  });

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(p => this.allProjects.set(p));
    this.projectService.getAllTags().subscribe(t => this.availableTags.set(t));
    this.projectService.getAllTechStacks().subscribe(t => this.availableTech.set(new Set()));
  }

  selectTag(tag: string)  { this.selectedTag.set(tag); }
  clearAllFilters()       { this.selectedTag.set('All'); this.selectedTech.set(new Set()); }
  isTechSelected(t: string) { return this.selectedTech().has(t); }

  toggleTech(tech: string) {
    const s = new Set(this.selectedTech());
    s.has(tech) ? s.delete(tech) : s.add(tech);
    this.selectedTech.set(s);
  }

  /** Generates per-card delay for stagger effect */
  cardDelay(index: number): string {
    return `${index * 55}ms`;
  }
}
