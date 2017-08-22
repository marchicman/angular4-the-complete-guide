// import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
// import { RecipeService } from '../../recipe.service';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSel = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // public onRecipeSelected() {
  //   // this.recipeSel.emit();
  //   // this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
