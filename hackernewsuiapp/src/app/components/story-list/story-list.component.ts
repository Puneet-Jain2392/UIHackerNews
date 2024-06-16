import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { Story } from '../../models/story.model';

@Component({
  selector: 'storyList',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [];
  filteredStories: Story[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.fetchStories();
  }

  fetchStories(): void {
    this.storyService.getNewestStories().subscribe(stories => {
      this.stories = stories;
      this.filteredStories = this.stories.slice(0, this.itemsPerPage);
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.filteredStories = this.stories.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onSearch(query: string): void {
    this.filteredStories = this.stories.filter(story => story.title.toLowerCase().includes(query.toLowerCase()));
  }
}
