import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExpandedComponent } from './blog-expanded.component';

describe('BlogExpandedComponent', () => {
  let component: BlogExpandedComponent;
  let fixture: ComponentFixture<BlogExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
