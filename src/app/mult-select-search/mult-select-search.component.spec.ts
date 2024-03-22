import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultSelectSearchComponent } from './mult-select-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('MultSelectSearchComponent', () => {
  let component: MultSelectSearchComponent;
  let fixture: ComponentFixture<MultSelectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultSelectSearchComponent],
      imports: [
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize gamesList with default values', () => {
    expect(component.gamesList).toEqual(component.gamesListBackup);
  });

  it('should update gamesList when searchText changes', () => {
    const searchText = 'God';
    component.searchText.setValue(searchText);
    expect(component.gamesList).toEqual(['God of war']);
  });

  it('should update toppings when setAll is called with true', () => {
    const allOptions = component.gamesList.slice();
    component.setAll(true);
    expect(component.toppings.value).toEqual(allOptions);
  });

  it('should update toppings when setAll is called with false', () => {
    component.setAll(false);
    expect(component.toppings.value).toEqual([]);
  });
});
