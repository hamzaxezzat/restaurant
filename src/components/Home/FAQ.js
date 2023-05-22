import React from 'react';
import './OurFoods.css';

const FAQ = () => {
  return (
    <>
      <section className="FAQ" id="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="row info">
            <div className="col-md-6">
              <h5>
                <span>~</span> Is BeHealth Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                <span>~</span> Is BeHealth Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                <span>~</span> Is BeHealth Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                <span>~</span> Is BeHealth Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paralex paralex2 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Baked fresh daily by bakers with passion.</h2>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="paralex newsletter">
        <div className="container">
          <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
          <p>Limited time offer for this month. No credit card required.</p>
          <div className="row info">
            <input placeholder="Email Address here" />
            <input type="submit" value="Subscibe" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
