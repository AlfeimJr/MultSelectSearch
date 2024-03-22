import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatOptionSelectionChange } from '@angular/material/core';
interface GameItem {
  name: string;
  checked: boolean;
}
@Component({
  selector: 'app-mult-select-search',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule, MatInputModule,MatIconModule, MatCheckboxModule],
  templateUrl: './mult-select-search.component.html',
  styleUrl: './mult-select-search.component.scss'
})
export class MultSelectSearchComponent {
  toppings: FormControl<string[]> = new FormControl([]) as FormControl<string[]>;
  gamesListBackup: string[] =  ['God of war', 'Street figther 2', 'Super mario', 'Spider man', 'Devil my Cry', 'FF14']
  gamesList: string[] =  ['God of war', 'Street figther 2', 'Super mario', 'Spider man', 'Devil my Cry', 'FF14']
  searchText: FormControl = new FormControl('');
  toppingsBackup: string[] = []


  search() {
    if(this.searchText.value !== ''){
      this.gamesList = this.gamesListBackup.filter((game) => game.toLowerCase().includes(this.searchText.value.toLowerCase()))
      
    }else{
      this.gamesList = this.gamesListBackup
    }
  }

  setAll(checked: boolean) {
    const allOptions = this.gamesList.slice();
    if (checked) {
      this.toppings.setValue(allOptions);
      this.toppingsBackup = allOptions
    } else {
      this.toppings.setValue([]);
    }
  }

 select(event: MatOptionSelectionChange) {
  if(!event.source.active){
    let backup = this.toppings.value
    this.toppings.patchValue(backup) 
    this.toppings.value.push(event.source.value)
  }else{
    this.toppings.value.splice(this.toppings.value.indexOf(event.source.value), 1)
  }
   
 }

 selectOn(event: MatSelectChange){
  this.toppingsBackup.push(event.value[0])
  this.toppings.setValue(this.toppingsBackup)
 }
}
