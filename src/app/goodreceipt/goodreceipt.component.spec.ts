import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreceiptComponent } from './goodreceipt.component';

describe('GoodreceiptComponent', () => {
  let component: GoodreceiptComponent;
  let fixture: ComponentFixture<GoodreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodreceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
