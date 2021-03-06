import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [data,setdata]= useState({
        fullname : '',
        phone : '',
        email : '',
        msg : '',
    })
    const inputEvent = (event)=>{
        const { name , value} = event.target;

        setdata((preValue)=>{
           return{ ...preValue,
            [name]: value,}
        })
    } 
    const formSubmit = (e)=> {
        e.preventDefault();
        toast.success(`FORM IS SUBMITTED SUCCESSFULLY`,{
            position: "top-center",
        })
       
       const alertFunction = () => toast.info(<div>
            Name : {data.fullname}.<br/>
            Mobile no. : {data.phone} <br/>
            Email : {data.email} <br/>
            Your message is : <br/> {data.msg}.
       </div>, {
            position: "top-center",
            autoClose: 7500,
        });  

        setTimeout(alertFunction, 1500)

        
    }

    return (
        <>
            <div className=" my-5">
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className="container-fluid contact_div">
                <div className="pixell row ">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" required id="exampleFormControlInput1" 
                            name='fullname'
                            value={data.fullname}
                            onChange={inputEvent}
                            placeholder="Enter Your Name"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" className="form-control" required id="exampleFormControlInput1" 
                            name='phone'
                            value={data.phone}
                            onChange={inputEvent}
                            placeholder="Enter Your Mobile No."/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" required id="exampleFormControlInput1" 
                            name='email'
                            value={data.email}
                            onChange={inputEvent}
                            placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" 
                            name='msg'
                            value={data.msg}
                            onChange={inputEvent}
                            rows="3"></textarea>
                        </div>
                        <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit form</button>
                      </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>)
}
export default Contact;
