import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bujo-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	private showLegend: boolean = false;
	private showSettings: boolean = false;

	public offset = { left: 310 };

	public onToggleLegend(): void {
		if (this.showSettings == true){
			this.showLegend == false;
		} else {
			this.showLegend = !this.showLegend;
		}
	}

	public onToggleSettings(): void {
		if (this.showLegend == true){

			this.showSettings == false;
		} else {
			this.showSettings = !this.showSettings;
		}
		
	}



}
