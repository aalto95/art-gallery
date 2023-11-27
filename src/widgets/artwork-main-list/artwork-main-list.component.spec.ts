import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkMainListComponent } from './artwork-main-list.component';

describe('ArtworkMainListComponent', () => {
  let component: ArtworkMainListComponent;
  let fixture: ComponentFixture<ArtworkMainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkMainListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtworkMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
