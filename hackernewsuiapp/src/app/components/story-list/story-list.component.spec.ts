import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoryListComponent } from './story-list.component';
import { StoryService } from '../../services/story.service';
import { of } from 'rxjs';
import { Story } from '../../models/story.model';

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;
  let storyService: StoryService;
  let stories: Story[] = [
    { id: 1, title: 'Story 1', url: 'http://story1.com' },
    { id: 2, title: 'Story 2', url: 'http://story2.com' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ StoryService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    storyService = TestBed.inject(StoryService);

    spyOn(storyService, 'getNewestStories').and.returnValue(of(stories));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch stories on init', () => {
    component.ngOnInit();
    expect(component.stories.length).toBe(2);
  });

  it('should filter stories by search query', () => {
    component.onSearch('Story 1');
    expect(component.filteredStories.length).toBe(1);
    expect(component.filteredStories[0].title).toBe('Story 1');
  });

  it('should paginate stories', () => {
    component.itemsPerPage = 1;
    component.onPageChange(2);
    expect(component.filteredStories.length).toBe(1);
    expect(component.filteredStories[0].title).toBe('Story 2');
  });
});
