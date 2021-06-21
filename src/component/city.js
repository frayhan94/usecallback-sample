import React from 'react';

function City({city, onClick}) {
    console.log('city re-render');
    return (
        <>
            {
                city.map((value) => {
                    return (
                        <div>
                            <div>
                                {value}
                            </div>
                            <input
                                type='button'
                                value={'click me'}
                                onClick={() => {
                                    onClick(value);
                                }}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default React.memo(City);
