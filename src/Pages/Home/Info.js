import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Info = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Welcome to our mini-mart Find your favorite device at reasonable cost"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 1,
            backDelay: 1,
            showCursor: false,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
            <div>
                <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl sm:block" ref={el}
                >
                </h1>
            </div>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_Au6z826BEy.json"
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
            </div>
        </div>
    );
};

export default Info;