// The Header Component -- file is capitalized because it is an component
import React, { useEffect, useState } from "react";
// imported the TinderCard that we installed earlier
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import "./TinderCards.css";
// Used to lock scrolling ability
// https://usehooks.com/uselockbodyscroll#:~:text=The%20useLockBodyScroll%20hook%20temporarily%20disables,that%20requires%20the%20user's%20focus.
import { useLockBodyScroll } from "@uidotdev/usehooks";



// Can use function or ES6 arrow function
function TinderCards() {

    useLockBodyScroll();

    // people called & modifier is setPeople
    // setPeople([...people, 'sony', 'qazi']) -- way of pushing (spread)

    // Can get Images of Bubble tea from diffrent shops from Uber eats

    // Hard coding:
    //{
    //     name: "BoboTea Strawberry",
    //     url: "/images/BoboTea.png",
    // },
    // {
    //     name: "Chatime Standard Milk Tea",
    //     url: "/images/Chatime.png"
    // },

    // Use State & use Effect very important in React
    const [people, setPeople] = useState([]);

    // Same as typing => const people = []

    //  Piece of code which runs based on a condition
    useEffect(() => {

        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot =>
            (setPeople(snapshot.docs.map(doc => doc.data()))
            ))

        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <div>
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