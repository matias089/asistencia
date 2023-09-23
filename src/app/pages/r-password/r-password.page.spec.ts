import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RPasswordPage } from './r-password.page';

describe('RPasswordPage', () => {
  let component: RPasswordPage;
  let fixture: ComponentFixture<RPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
