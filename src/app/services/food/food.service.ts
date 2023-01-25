import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/Data';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return sample_foods; 
  }

  getAllFoodsBySeachTerm(searchTerm:string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[] {
    return sample_tags;
  }

  getALLFoodsByTag(tag:string): Food[] {
    return tag === "All"?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  /*/// Nullish Caolescing Operator error///*/
  
  getFoodById(foodId:number):Food {
    return this.getAll().find(food => food.id == foodId) ?? new Food();     
  }

}
