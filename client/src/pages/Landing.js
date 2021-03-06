import React, { Component } from "react";
import ImageOne from "../img/cuisine-2248567_1920.jpg";
import ImageTwo from "../img/hero.jpg";
import ImageThree from "../img/buffet-315691_1280.jpg";

class Landing extends Component {
  cards = [
    {
      image: ImageOne,
      title: "Discover new foods",
      content:
        "Feel bored of the same old food everyday? We understand. Look through our recipes section to discover new recipes! Try something new for dinner or breakfast. Impress your friends and family with an exotic feast!"
    },
    {
      image: ImageTwo,
      title: "Share your recipes",
      content:
        "Share your great recipes with people. Is this authentic or something you whiped up in the kitchen after a night out? It does not matter, as long as it is tasty we want to hear about it! Click on create to become part of the community."
    },
    {
      image: ImageThree,
      title: "Journey through food",
      content:
        "You do not need to travel far to try new recipes. You can discover food from all over the world right here. If you do not see your part of the world represented here then it is your chance to shine and add something amazing!"
    }
  ];

  render() {
    const renderCard = this.cards.map((card, index) => {
      return (
        <>
          <img
            src={card.image}
            alt=""
            className={`landing__cards__image landing__cards__image--${index +
              1}`}
          />
          <div
            className={`landing__cards__content landing__cards__content--${index +
              1}`}
          >
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </>
      );
    });

    return (
      <>
        <section className="landing__hero">
          <h1 className="landing__hero--heading">Recipes</h1>
          <p className="landing__hero--subheading">
            Create, discover and share your favourite recipes
          </p>
        </section>
        <section className="landing__cards">
          <div className="quote landing__cards--quote">
            <q>
              If more of us valued food and cheer and song above hoarded gold,
              it would be a merrier world.
            </q>
            <p>- J.R.R. Tolkien</p>
          </div>
          {renderCard}
        </section>
      </>
    );
  }
}

export default Landing;
