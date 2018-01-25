import {Component, Input,  Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector : "countdown-timer",
	template:`<h1>Time left: {{seconds}}</h1>`,
	styles: ['h1 { color: #900}'],
	encapsulation: ViewEncapsulation.Emulated
})


export class CountdownTimerComponent{
	@Input() seconds : number;
	intervalId: any;
	@Output() complete: EventEmitter<any> = new EventEmitter();
	@Output() progress: EventEmitter<number> = new EventEmitter();

	constructor(){
		this.intervalId = setInterval(()=> this.tick(), 1000 );
	}

	private tick(){
		if(--this.seconds < 1 ){
			clearInterval(this.intervalId);
			this.complete.emit(null);
		}
		this.progress.emit(this.seconds);
	}
}

@Component({
	selector:"timer",
	templateUrl: './timer.component.html'
})

export class TimerComponent{
	onCountdownCompleted():void{
		alert("Time up!");
	}
}