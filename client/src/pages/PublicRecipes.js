import React, { Component } from "react";
import RecipeListItem from "../components/RecipeListItem";
import img from "../img/cuisine-2248567_1920.jpg";
import pancakes from "../img/pancakes.jpg";
import eggs from "../img/eggs.jpg";
import chorizo from "../img/chorizo.jpg";
import Modal from "../components/util/Modal";
import axios from "axios";

class PublicRecipes extends Component {
  items = [
    {
      name: "Pancakes",
      description: "A simple and foolproof crepe recipe.",
      ingredients: [
        "100g plain flour",
        "2 large eggs",
        "300ml milk",
        "1 tbsp sunflower or vegetable oil",
        "lemon wedges (optional)",
        "caster sugar (optional)"
      ],
      recipe: [
        "Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.",
        "Set aside for 30 mins to rest if you have time, or start cooking straight away.",
        "Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.",
        "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.",
        "Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."
      ],
      img: pancakes
    },
    {
      name: "Chorizo Ciabatta",
      description:
        "Crusty ciabatta, spicy chorizo, a generous dollop of pesto and sweet roasted peppers make a moreish combination. ",
      ingredients: [
        "2 small or 1 large ciabatta",
        "150g pack cooking chorizo (halved lengthways)",
        "75g pesto",
        "200g roasted red peppers from a jar",
        "handful rocket"
      ],
      recipe: [
        "Heat oven to 180C/160C fan/gas 4 and put the ciabatta in to warm up. Put a griddle pan over a medium heat and cook the chorizo for 5 mins each side or until charred and cooked through.",
        "Open up the warmed ciabatta and spread the pesto on the bottom. Layer with the red peppers , then the warm chorizo. Scatter over the rocket, sandwich the ciabatta together, cut in two and serve."
      ],
      img: chorizo
    },
    {
      name: "Scrambled Eggs",
      description: "A simple but delicious scrambled eggs recipe",
      ingredients: ["salt", "pepper", "4 eggs", "2 tsp butter"],
      recipe: [
        "Beat eggs, milk, salt and pepper in medium bowl until blended.",
        "Heat butter in large nonstick skillet over medium heat until hot. Poure in egg mixture. As eggs begin to set, gently pull the eggs across the pan with a spatula, forming large soft curds.",
        "Continue cooking – pulling, lifting and folding eggs – until thickened and no visible liquid egg remains."
      ],
      img: eggs
    }
  ];

  state = {
    showModal: false,
    selectedRecipe: {},
    recipes: this.items
  };

  componentWillMount() {
    axios.get("/api/recipes").then(data => {
      if (data.data.length === 0) {
        return;
      } else {
        const newList = data.data.map(recipe => {
          return { ...recipe, img: img };
        });
        this.setState(
          prevData => ({
            recipes: [...newList, ...prevData.recipes]
          }),
          () => console.log(this.state.recipes)
        );
        console.log(data.data);
      }
    });
  }

  selectRecipe = recipe => {
    this.setState(
      prevState => ({
        selectedRecipe: recipe
      }),
      () => this.showModal()
    );
  };

  showModal = () => {
    this.setState(() => ({
      showModal: true
    }));
  };

  render() {
    const { showModal, selectedRecipe } = this.state;

    const renderListItem = this.state.recipes.map((item, index) => {
      const { name, img, description } = item;
      return (
        <div key={index} onClick={() => this.selectRecipe(item)}>
          <RecipeListItem image={img} title={name} content={description} />
        </div>
      );
    });

    return (
      <div className="recipes">
        <ul className="recipes__list">
          {this.state.recipes.length > 0 ? renderListItem : ""}
        </ul>
        {showModal ? (
          <Modal
            onClose={() => this.setState({ showModal: false })}
            toDisplay={selectedRecipe}
          />
        ) : null}
      </div>
    );
  }
}

export default PublicRecipes;
