import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories]=useState([])
    

    useEffect(()=>{
           async function fetchData(){
            const res= await fetch('categories.json');
            const data=await res.json()
            setCategories(data)
           }

           fetchData()
    },[])
    
    
    return (
        <div className='space-y-5' >
            <h2 className="text-2xl">All Categories</h2>
            <div className='space-y-6'>
            
            {
                categories.map(category=><Link to={`/category/${category.id}`} className='block ml-4 text-xl py-4 font-semibold px-4 bg-slate-300 ' key={category.id}>{category.name}</Link>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;