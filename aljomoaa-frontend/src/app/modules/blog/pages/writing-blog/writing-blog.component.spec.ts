import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingBlogComponent } from './writing-blog.component';

describe('WritingBlogComponent', () => {
  let component: WritingBlogComponent;
  let fixture: ComponentFixture<WritingBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
