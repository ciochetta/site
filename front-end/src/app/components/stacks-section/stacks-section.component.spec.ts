import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksSectionComponent } from './stacks-section.component';

describe('StacksSectionComponent', () => {
  let component: StacksSectionComponent;
  let fixture: ComponentFixture<StacksSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StacksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
