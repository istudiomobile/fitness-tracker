import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  ongoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingSercice: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingSercice.exerciseChanged.subscribe(
      exercise => {
        exercise ? this.ongoingTraining = true : this.ongoingTraining = false;
      }
    );
  }

}