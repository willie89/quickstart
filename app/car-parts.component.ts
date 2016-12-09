import { Component } from '@angular/core';

@Component ({
	selector: 'car-parts',
	template: `<p>Total Car Parts: {{totalCarParts()}}</p>
	<ul>
		<li *ngFor="let tire of tires">
			<span>{{tire.name | uppercase}} — </span>
			<span>{{tire.description }} — </span>
			<span *ngIf="tire.inStock > 0">{{tire.inStock}} — </span>
			<span *ngIf="tire.inStock === 0">This be out of stock— </span>
			<span>{{tire.price | currency:'CAD':true}} </span>
		</li>
	</ul>`
})


export class CarPartsComponent { 
	tires = [
		{
		 "id": 1,
		 "name": "Regular Tires",
		 "description": "These tires decent, not the greatest but it will do the job!",
		 "inStock": 20,
		 "price": 4.99
		},{
		 "id": 2,
		 "name": "All Weather Tires",
		 "description": "Great for every climate.",
		 "inStock": 13,
		 "price": 4.99
		},{
		 "id": 3,
		 "name": "Super Tires",
		 "description": "These tires are the very best",
		 "inStock": 5,
		 "price": 4.99
		},{
		 "id": 3,
		 "name": "Ultra Super Tires",
		 "description": "These tires are the very best",
		 "inStock": 0,
		 "price": 4.99
		}
	]
	totalCarParts(){
		let sum = 0;
		for(let tire of this.tires){
			sum += tire.inStock;
		}
		return sum;
	}
}
