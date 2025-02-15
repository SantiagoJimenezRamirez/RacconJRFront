import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrappingAddComponent } from './scrapping-add.component';

describe('ScrappingAddComponent', () => {
  let component: ScrappingAddComponent;
  let fixture: ComponentFixture<ScrappingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrappingAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrappingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
