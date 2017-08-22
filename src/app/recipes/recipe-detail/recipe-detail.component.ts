import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe: Recipe;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    this.recipeService = recipeService;
  }

  ngOnInit() {
    // this.recipe = new Recipe('','','');
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        console.log('RecipeDetailComponent id: ' + id);
        this.recipe = this.recipeService.getRecipe(id);
      }
    );
  }

  toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
