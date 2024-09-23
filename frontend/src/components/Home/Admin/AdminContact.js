import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form,Input, message} from 'antd';
import { HideLoading, ShowLoading } from '../../../redux/rootslice';
import axios from 'axios';

function AdminContact() {
    const dispatch=useDispatch();
    const{portfolioData}=useSelector((state)=>state.root)
    const onFinish = async(value) => {
       try{
dispatch(ShowLoading());
const response=await axios.post("/api/portfolio/update-contact",{...value, _id: portfolioData.contact._id,});
dispatch(HideLoading())
if(response.data.success){
    message.success(response.data.message)
} else{
    message.error(response.data.message)
}   
}catch(err){
    dispatch(HideLoading());
        message.error(err.message)
       }
    
      };
  return (
    <div className="max-w-sm mx-auto ">
    <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.contact}>
        
        <Form.Item name="name" label=" Name" className="mb-5">
            <Input placeholder=" name" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="gender" label="Gender" className="mb-5">
            <Input placeholder="Gender" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="age" label="Age" className="mb-5">
            <Input placeholder="Age" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="email" label="Email" className="mb-5">
            <Input placeholder="Email" rows={4} className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile " className="mb-5">
            <Input placeholder="Mobile" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="address" label=" Address" className="mb-5">
            <Input placeholder="Address" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <div className="flex justify-end">
            <button type="submit" className="px-10 py-2 bg-gradient-to-r from-black via-gray-600 to-sky-500/55 text-white transform transition-transform duration-300 hover:translate-x-1   hover:bg-blue-300   rounded-lg text-sm">Save</button>
        </div>
    </Form>
</div>
  )
}

export default AdminContact;