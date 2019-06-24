import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { AcquaintanceService } from '../../core/services/acquaintance.service';
import { AcquaintanceViewModel } from '../../core/models/acquaintance-view-model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  public AnimationBarOption;

  constructor(private _chartsService: ChartsService, private acquaintanceService: AcquaintanceService) { }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }

  accessAPIClick() {
    this.acquaintanceService.getAcquaintance().subscribe((acquaintance: AcquaintanceViewModel) => {
      alert(acquaintance.name + " " + acquaintance.relationNote);
    });
  }

  accessEnvironmentalVariableClick() {
    this.acquaintanceService.getEnvironmentalVariable().subscribe((environmentalVariable) => {
      alert(environmentalVariable);
    });
  }
}
