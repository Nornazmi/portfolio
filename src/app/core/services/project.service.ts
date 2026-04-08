import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Project } from '../../shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private dataUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl).pipe(
      catchError(() => of([]))
    );
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  /** Returns all unique values from the `tech` array across all projects */
  getAllTechStacks(): Observable<string[]> {
    return this.getProjects().pipe(
      map(projects => {
        const techSet = new Set<string>();
        projects.forEach(p => p.tech.forEach((t: string) => techSet.add(t)));
        return Array.from(techSet).sort();
      })
    );
  }

  /** Returns all unique tags (categories) */
  getAllTags(): Observable<string[]> {
    return this.getProjects().pipe(
      map(projects => {
        const tagSet = new Set<string>();
        projects.forEach(p => p.tags.forEach((t: string) => tagSet.add(t)));
        return ['All', ...Array.from(tagSet)];
      })
    );
  }
}
