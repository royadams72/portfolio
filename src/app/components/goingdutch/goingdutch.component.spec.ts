import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingdutchComponent } from './goingdutch.component';

describe('GoingdutchComponent', () => {
  let component: GoingdutchComponent;
  let fixture: ComponentFixture<GoingdutchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingdutchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingdutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
