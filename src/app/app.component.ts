import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./componentes/footer/footer.component";
import { NgStyle } from '@angular/common';
import { HeaderComponent } from "./componentes/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NgStyle, HeaderComponent],
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
    return Math.random() * 2 <= 0.5;
  }
  generateGrid() {
    const squareSize = 80;
    for (let row = 0; row < this.gridRows; row++) {
      for (let col = 0; col < this.gridCols; col++) {
        this.squares.push({
          size: squareSize,
          exist: this.getRandomBoolean(),
          top: row * squareSize + 0 * row,
          left: col * squareSize + 0 * col,
        });
      }
    }
  }
}
