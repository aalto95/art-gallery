import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/widgets/header/header.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent],
})
export class MainLayoutComponent {}
