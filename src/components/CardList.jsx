import React from 'react';
import CardComponent from './CardComponent';
import cardData from '../data/event.json'; // Importing the JSON file

const CardList = () => {
  return (
    <div className="card-list grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {cardData.map((card, index) => (
        <CardComponent
          key={index}
          imgSrc={card.imgSrc}
          date={card.date}
          title={card.title}
          description={card.description}
          participant={card.participant}
          tag={card.tag}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardList;
