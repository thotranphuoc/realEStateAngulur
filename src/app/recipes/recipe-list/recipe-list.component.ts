import { Component, OnInit } from '@angular/core';
import { iRecipe } from '../recipe.interface';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: iRecipe[] = [
    new iRecipe('A Test Recipe', 'This is simple a test', 'https://www.maangchi.com/wp-content/uploads/2016/09/pepper-kimchi-590x332.jpg'),
    new iRecipe('A Test Recipe', 'This is simple a test', 'https://www.maangchi.com/wp-content/uploads/2016/09/pepper-kimchi-590x332.jpg'),
    new iRecipe('A Test Recipe', 'This is simple a test', 'https://www.maangchi.com/wp-content/uploads/2016/09/pepper-kimchi-590x332.jpg')

  ]
  constructor() { }

  ngOnInit() {
  }

}
