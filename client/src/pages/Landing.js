import React, { Component } from "react";

class Landing extends Component {
  cards = [
    {
      image: "https://via.placeholder.com/300",
      title: "Discover new foods",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Share your recipes",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Journey through food",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
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
