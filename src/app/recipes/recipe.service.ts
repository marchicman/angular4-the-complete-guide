import { EventEmitter,Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
      new Recipe('A Test Recipe',
                 'This is simply a test',
                 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/chilli-crab-cherry-tomato-linguine.jpg',
                [
                  new Ingredient('Meat',1),
                  new Ingredient('French Fries',20)
                ]),
      new Recipe('Another Test Recipe',
                 'This is simply a test',
                 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/chilli-crab-cherry-tomato-linguine.jpg',
                [
                  new Ingredient('Buns',2),
                  new Ingredient('Meat',1)
                ])
    ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();//in questo modo ritorno una copia dell'array e non un riferimento evitando modiiche
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
