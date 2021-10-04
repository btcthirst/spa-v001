import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdAuthorComponent } from './upd-author.component';

describe('UpdAuthorComponent', () => {
  let component: UpdAuthorComponent;
  let fixture: ComponentFixture<UpdAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
