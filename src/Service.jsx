import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
    return (
        <>
        <div className="my-5 ">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5 ">
            <div className="row ">
                <div className="col-10 mx-auto ">
                    <div className='row cont_flexi'> 
                           {
                               Sdata.map((val,ind)=>
                                    <Card 
                                   key={ind}
                                   imgscr={val.imagesrc}
                                   title={val.title} />
                                )
                           }
                    </div>
                </div>
            </div>    
        </div>    
           
        </>)
}
export default Service;