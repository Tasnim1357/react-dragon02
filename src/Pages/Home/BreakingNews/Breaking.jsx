import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Breaking = () => {
    return (
        <div className='flex'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
            <Link to='/' className='mr-12'>I can be a React component, multiple React components.....</Link>
            <Link to='/' className='mr-12'>I can be a React component, multiple React components.....</Link>
            <Link to='/' className='mr-12'>I can be a React component, multiple React components.....</Link>
</Marquee>
        </div>
    );
};

export default Breaking;