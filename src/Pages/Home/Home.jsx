import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Breaking from './BreakingNews/Breaking';
import { useLoaderData } from 'react-router-dom';
import Newscard from './Newscard/Newscard';

const Home = () => {
    const news=useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 w-full'>
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-2'>
                    {
                        news.map(m=><Newscard key={m._id} news={m}></Newscard>)
                    }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        
        </div>
    );
};

export default Home;