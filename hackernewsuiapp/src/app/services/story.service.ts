import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = 'https://localhost:7172/api/stories/newest';

  constructor(private http: HttpClient) { }

  getNewestStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.apiUrl);
  }
}
