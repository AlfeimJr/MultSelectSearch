import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-mult-select-search',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule, MatInputModule,MatIconModule, MatCheckboxModule],
  templateUrl: './mult-select-search.component.html',
  styleUrl: './mult-select-search.component.scss'
})
export class MultSelectSearchComponent {
  toppings = new FormControl(['']);
  gamesListBackup: string[] = ['God of war', 'Street figther 2', 'Super mario', 'Spider man', 'Devil my Cry', 'FF14'];
  gamesList: string[] = ['God of war', 'Street figther 2', 'Super mario', 'Spider man', 'Devil my Cry', 'FF14'];
  searchText: FormControl = new FormControl('');



  search(event: KeyboardEvent) {
    this.gamesList = this.searchText.value
      ? this.gamesListBackup.filter(
          (item) => item.toLowerCase().includes(this.searchText.value.toLowerCase())
        )
      : this.gamesListBackup.slice();
  }

  setAll(checked: boolean) {
    const allOptions = this.gamesList.slice();
    if (checked) {
      this.toppings.setValue(allOptions);
    } else {
      this.toppings.setValue([]);
    }
  }
}
