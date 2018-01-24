import {Component} from '@angular/core';

@Component({
	selector : "timer",
	template:`	
		<div class="text-center">
			<img src="assets/img/timer.png" alt="Timer" width="70">
			<h1> {{ minutes }}:{{ seconds | number:'2.0' }}</h1>
			<p>
				<button class="btn btn-danger" (click)="togglePause()">{{ buttonLabel }}</button>
			</p>
		</div>
	`
})

export class TimerComponent{

	minutes:number;
	seconds:number;
	isPaused:boolean;
	buttonLabel:string;

	constructor(){
		this.reset();
		setInterval(()=> this.tick(), 1000 );
	}

	togglePause(){
		this.isPaused = !this.isPaused;

		if(this.minutes < 24 || this.seconds < 59 ){
			this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
		}
	}

	reset(){
		this.minutes = 24;
		this.seconds = 59;
		this.buttonLabel = 'Start';
		this.togglePause();
	}

	private tick(){
		if(!this.isPaused){
			this.buttonLabel = 'Pause';

			if(--this.seconds < 0 ){
				this.seconds = 59;

				if(--this.minutes < 0 ){
					this.reset();
				}
			}
		}
		
	}
}