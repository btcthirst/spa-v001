import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdGenreComponent } from './upd-genre.component';

describe('UpdGenreComponent', () => {
  let component: UpdGenreComponent;
  let fixture: ComponentFixture<UpdGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
