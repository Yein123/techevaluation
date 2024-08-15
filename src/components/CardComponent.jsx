import React from 'react';

const CardComponent = ({ imgSrc, date, title, description, participant, tag, link }) => {
  return (
    <div className="relative card max-w-sm bg-base-100 shadow hover:shadow-lg transition-shadow mb-4 group flex flex-col">
      <div className="relative group">
        <img
          src={imgSrc}
          alt={title}
          className="h-52 object-cover rounded-t-lg w-full"
          style={{ objectPosition: '50% 45%' }}
        />
        <div className="absolute inset-0 bg-grey opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={link}>
            <button className="btn bg-green-100 text-white gap-2 max-w-44 px-8 py-4 rounded-full text-lg border-0 transition-transform transform hover:bg-green-200">
              See more
            </button>
          </a>
        </div>
      </div>
      <div className="card-body flex flex-row gap-4 px-6 py-4 my-4 flex-1">
        <div className="flex-shrink-0 flex text-center items-center justify-center text-2xl font-bold pr-4 border-r-2 border-grey my-2 w-16">
          {date}
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="card-title text-xl font-bold">
            <a href={link}>{title}</a>
          </h2>
          <p className="mb-2 flex-1">
            {description}
          </p>
          <div className="card-actions flex">
            <div className="badge border-0 text-sm font-bold text-white bg-green-100 mr-2 rounded-xl px-2 hover:bg-green-200">
              {participant}
            </div>
            <div className="badge border-0 text-sm font-bold text-black bg-yellow rounded-xl px-2 hover:bg-yellow">
              {tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
