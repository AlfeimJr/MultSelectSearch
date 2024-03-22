import { ChangeDetectorRef, Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatSelectChange, MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionSelectionChange } from "@angular/material/core";
interface GameItem {
  name: string;
  checked: boolean;
}
@Component({
  selector: "app-mult-select-search",
  standalone: true,
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: "./mult-select-search.component.html",
  styleUrl: "./mult-select-search.component.scss",
})
export class MultSelectSearchComponent {
  toppings: FormControl<string[]> = new FormControl([]) as FormControl<
    string[]
  >;
  gamesListBackup: { name: string; isToShow: boolean }[] = [
    { name: "God of war", isToShow: true },
    { name: "Street figther 2", isToShow: true },
    { name: "Super mario", isToShow: true },
    { name: "Spider man", isToShow: true },
    { name: "Devil my Cry", isToShow: true },
    { name: "FF14", isToShow: true },
  ];
  gamesList: { name: string; isToShow: boolean }[] = [
    { name: "God of war", isToShow: true },
    { name: "Street figther 2", isToShow: true },
    { name: "Super mario", isToShow: true },
    { name: "Spider man", isToShow: true },
    { name: "Devil my Cry", isToShow: true },
    { name: "FF14", isToShow: true },
  ];
  searchText: FormControl = new FormControl("");
  toppingsBackup: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}
  search() {
    if (this.searchText.value !== "") {
      this.gamesList = this.gamesListBackup.map((game) =>
        game.name
          .toLocaleLowerCase()
          .includes(this.searchText.value.toLocaleLowerCase())
          ? { ...game, isToShow: true }
          : { ...game, isToShow: false }
      );
    } else {
      this.gamesList = this.gamesList.map((game) => ({
        ...game,
        isToShow: true,
      }));
    }
  }

  setAll(checked: boolean) {
    const allOptions = this.gamesList.slice();
    if (checked) {
      this.toppings.setValue(
        allOptions
          .filter((option) => option.isToShow)
          .map((option) => option.name)
      );
    } else {
      let backup = this.toppings.value;
      allOptions.filter((option) => option.isToShow).forEach((option) => {
        backup.splice(
          backup.indexOf(option.name),
          1
        );
        
      })
      this.toppings.setValue(backup);
      this.cdr.detectChanges();
    }
  }

  isAllSelected() {
    const all = this.gamesList.filter((option) => option.isToShow);
    if(all.length === 0) {
      return false
    }
    return all.every(option =>{
      return this.toppings.value.some(name => name === option.name)
    })
  }
}
