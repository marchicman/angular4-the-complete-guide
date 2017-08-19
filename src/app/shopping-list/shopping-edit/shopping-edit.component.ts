//import { Component, OnInit,ViewChild,Output,EventEmitter,ElementRef } from '@angular/core';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;
  //@Output() newIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    //this.newIngredient.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
    //this.shoppingListService.newIngredient.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }
}
