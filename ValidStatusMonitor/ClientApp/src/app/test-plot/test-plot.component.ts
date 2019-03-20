import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-plot',
  templateUrl: './test-plot.component.html',
  styleUrls: ['./test-plot.component.css']
})
export class TestPlotComponent implements OnInit {
  //public layout;
  public graph = {
    data: [
      { x: [1, 2, 3], y: [2, 5, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'scatter' },
    ],
    layout: { width: 420, height: 450, title: 'Example', paper_bgcolor: "#d2d2d2", displaylogo: false, showlegend:false }
  };

  constructor() { }

  ngOnInit() {
  }

}
