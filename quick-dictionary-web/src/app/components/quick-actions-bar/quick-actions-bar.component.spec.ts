import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActionsBarComponent } from './quick-actions-bar.component';

describe('QuickActionsBarComponent', () => {
  let component: QuickActionsBarComponent;
  let fixture: ComponentFixture<QuickActionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickActionsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickActionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
