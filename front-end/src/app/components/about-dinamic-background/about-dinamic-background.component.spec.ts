import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDinamicBackgroundComponent } from './about-dinamic-background.component';

describe('AboutDinamicBackgroundComponent', () => {
  let component: AboutDinamicBackgroundComponent;
  let fixture: ComponentFixture<AboutDinamicBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDinamicBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDinamicBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
