import React from 'react';
function Card({name}) {
    console.log('card re-render');
    return (
        <div>
            My name is {name}
        </div>
    )
}

export default React.memo(Card);
