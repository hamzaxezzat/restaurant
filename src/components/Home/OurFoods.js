import React from "react";
import './OurFoods.css'
import Data from "./../../Data"

const mealsElements = Data.map(item=>{
    return(
        <div className="col-md-4">
            <div className="meal">
                <img src={item.img} title={item.title}/>
                <h5 className="title">{item.title}</h5>
                <h6 className="time">Time: {item.time} Minutes | Serves: 1</h6>
                <h3 className="price">${item.price} <span className="oldPrice">${item.oldPrice}</span></h3>
                <hr />
                <button>Order Now</button>
            </div>
        </div>
    )
})
const OurFoods = () =>{
    return(
        <section className="OurFoods">
            <div className="container">
                <div className="row info">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="row">
                        {mealsElements}
                </div>
            </div>
        </section>
    )
}
export default OurFoods;