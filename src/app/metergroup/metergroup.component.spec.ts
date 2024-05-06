import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetergroupComponent } from './metergroup.component';

describe('MetergroupComponent', () => {
  let component: MetergroupComponent;
  let fixture: ComponentFixture<MetergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetergroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
