import {Component} from '@angular/core';

@Component({
	selector : "countdown-timer",
	template:`<h1>Time left: {{seconds}}</h1>`
})

export class CountdownTimerComponent{
	seconds: number = 25;
	intervalId: any;

	constructor(){
		this.intervalId = setInterval(()=> this.tick(), 1000 );
	}

	private tick(){
		if(--this.seconds < 1 ){
			clearInterval(this.intervalId);
		}
	}
}