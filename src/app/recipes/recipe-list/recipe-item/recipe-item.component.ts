import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{

    @Output() recipeSelected = new EventEmitter<void>();

    @Input() recipe: Recipe;
    @Input() index: number;

    constructor() {
    }

    ngOnInit(): void {
    }

    onSelected() {
        this.recipeSelected.emit();
    }
}
