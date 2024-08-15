import React from 'react';
import CardList from './components/CardList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <div className="pt-20 pb-16"></div>
      <div className="content mx-4 md:mx-16 lg:mx-28">
        <div className="title text-3xl font-bold mb-4 w-36 border-b-4 border-green-200 mx-auto md:mx-0">All Events</div>
        <div className="mx-auto md:mx-8">
          <CardList />
        </div>
        <div className="flex py-8 items-center justify-center">
          <a href="/">
            <button className="btn bg-green-100 text-white gap-2 max-w-44 px-2 mx-2 py-2 rounded-lg text-lg border-0 transition-transform transform hover:bg-green-200">
              Page 1
            </button>
          </a>
          <a href="https://cssocietyusm.com/events/2/">
            <button className="btn bg-green-100 text-white gap-2 max-w-44 px-4 py-2 rounded-lg text-lg border-0 transition-transform transform hover:bg-green-200">
              Next
            </button>
          </a>
        </div>
      </div>
      <div className="py-8"></div>
      <Footer />
    </div>
  );
};

export default App;
