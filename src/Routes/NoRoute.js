import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => {
    return (
        <div className='App'>
            <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_9Fhz02H45R.json"
                style={{ height: '300px', width: '300px' }}
            >
            </Player>
            <button className="btn btn-outline btn-error"><Link to='/'>
                Return Home</Link></button>
        </div>
    );
};

export default NoRoute;