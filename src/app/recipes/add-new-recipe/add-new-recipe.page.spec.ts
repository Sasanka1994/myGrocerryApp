import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewRecipePage } from './add-new-recipe.page';

describe('AddNewRecipePage', () => {
  let component: AddNewRecipePage;
  let fixture: ComponentFixture<AddNewRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewRecipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
