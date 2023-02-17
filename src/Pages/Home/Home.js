import React from 'react';
import HomeProducts from '../Products/HomeProducts';
import Add from './Add';
import CustomerReview from './CustomerReview';
import Info from './Info';
import Cat from '../Shared/Cat';
import useTitle from '../../hooks/useTitle';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <div className='container my-10 mx-auto grid lg:grid-cols-9 gap-5'>
                <div className='col-span-7'>
                    <Info></Info>
                </div>
                <div >
                    <Cat></Cat>
                </div>
            </div>
            <HomeProducts></HomeProducts>
            <Add></Add>
            <CustomerReview></CustomerReview>

        </div>
    );
};

export default Home;