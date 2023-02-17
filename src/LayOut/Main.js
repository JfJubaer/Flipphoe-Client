import React from 'react';
import { Outlet } from 'react-router-dom';
import Appp from '../Pages/Shared/Appp';
import Footer from '../Pages/Shared/Footer';
import Nav from '../Pages/Shared/Nav';
import Team from '../Pages/Shared/Team';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Appp></Appp>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Main;