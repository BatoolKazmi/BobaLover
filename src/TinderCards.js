// The Header Component -- file is capitalized because it is an component
import React, { useState } from "react";
// imported the TinderCard that we installed earlier
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import BoboTea from './imgs/BoboTea.png';

// Can use function or ES6 arrow function
function TinderCards() {

    // people called & modifier is setPeople
    // setPeople([...people, 'sony', 'qazi']) -- way of pushing (spread)

    // Can get Images of Bubble tea from diffrent shops from Uber eats
    const [people, setPeople] = useState([
        {
            name: "BoboTea Strawberry",
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubereats.com%2Fca%2Fstore%2Fbobo-tea%2FPi3rmpMxWJ2LQpFsDjGlcQ&psig=AOvVaw1z1OzovoetfLzZxQ3GSvKH&ust=1715000508264000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiUi_PI9oUDFQAAAAAdAAAAABAl",
        },
        {
            name: "Chatime Standard Milk Tea",
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.skipthedishes.com%2Fchatime-bedford&psig=AOvVaw0RiQkQr-bV2prz-cCBaIyg&ust=1715000412298000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLix6cbI9oUDFQAAAAAdAAAAABAW"
        },
    ]);
    // Same as typing => const people = []

    return (
        <div>
            <h1>Tinder Cards</h1>
            <imgs src={BoboTea} alt="" />

            <div class="tinderCards_cardContainer">
                {people.map(person => (
                    <TinderCard className="swipe"
                        // Key very important in React
                        key={person.name}
                        // Prevent from swiping up and down
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;