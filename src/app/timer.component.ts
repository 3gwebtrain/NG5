import {Component, Input,  Output, EventEmitter } from '@angular/core';

@Component({
	selector : "countdown-timer",
	template:`<h1>Time left: {{seconds}}</h1>`
})


export class CountdownTimerComponent{
	@Input() seconds : number;
	intervalId: any;
	@Output() complete: EventEmitter = new EventEmitter();

	constructor(){
		this.intervalId = setInterval(()=> this.tick(), 1000 );
	}

	private tick(){
		if(--this.seconds < 1 ){
			clearInterval(this.intervalId);
			this.complete.emit(null);
		}
	}
}

@Component({
	selector:"timer",
	template:`
		<div class="container text-center">
			<countdown-timer [seconds]="25" (complete)="onCountdownCompleted()" ></countdown-timer>
 		</div>`
})

export class TimerComponent{
	onCountdownCompleted():void{
		alert("Time up!");
	}
}