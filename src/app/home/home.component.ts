import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySeachTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getALLFoodsByTag(params.tag);
      else this.foods = foodService.getAll();
    });
  }

  ngOnInit(): void {}

  goToPage(food: Food) {
    console.log(food);
    this.router.navigate(['food/' + food.id]);
  }
}
