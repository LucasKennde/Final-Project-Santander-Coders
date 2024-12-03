import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  squares: any[] = [];
  gridRows: number = 7;
  gridCols: number = 30;

  ngOnInit() {
    this.generateGrid();
  }
  getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }
  generateGrid() {
    const squareSize = 80;
    for (let row = 0; row < this.gridRows; row++) {
      for (let col = 0; col < this.gridCols; col++) {

        this.squares.push({
          size: squareSize,
          exist: this.getRandomBoolean(),
          top: row * squareSize + 1 * row,
          left: col * squareSize + 1 * col,
        });
      }
    }
  }
}
