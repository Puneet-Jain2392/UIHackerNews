
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(query: Event): void {
    const InputElement= query.target as HTMLInputElement;
        this.search.emit(InputElement.value);
  }
}
