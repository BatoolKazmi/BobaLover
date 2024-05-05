// The Header Component -- file is capitalized because it is an component
import React, { useState } from "react";
// imported the TinderCard that we installed earlier
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

// Can use function or ES6 arrow function
function TinderCards() {

    // people called & modifier is setPeople
    // setPeople([...people, 'sony', 'qazi']) -- way of pushing (spread)

    // Can get Images of Bubble tea from diffrent shops from Uber eats
    const [people, setPeople] = useState([
        {
            name: "BoboTea Strawberry",
            url: "/images/BoboTea.png",
        },
        {
            name: "Chatime Standard Milk Tea",
            url: "/images/Chatime.png"
        },
    ]);
    // Same as typing => const people = []

    return (
        <div>
            <h1>Tinder Cards</h1>

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