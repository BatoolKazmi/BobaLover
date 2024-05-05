// The Header Component -- file is capitalized because it is an component
import React, { useState } from "react";
// imported the TinderCard that we installed earlier
import TinderCard from 'react-tinder-card'


// Can use function or ES6 arrow function
function TinderCards() {

    // people called & modifier is setPeople
    // setPeople([...people, 'sony', 'qazi']) -- way of pushing (spread)

    const [people, setPeople] = useState([
        {
            name: "steve jobs",
            url: "https://th.bing.com/th/id/OIP.OJoSFHphzK66ytsLTI15WwHaH0?rs=1&pid=ImgDetMain"
        },
        {
            name: "markum markum",
            url: "https://thumbs.dreamstime.com/z/face-successful-person-closeup-young-businessman-blurred-background-office-104046254.jpg"
        },
    ]);
    // Same as typing => const people = []

    return (
        <div>
            <h1>Tinder Cards</h1>

            {people.map(person => (
                <TinderCard className="swipe"
                    key={person.name}
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
    );
}

export default TinderCards;