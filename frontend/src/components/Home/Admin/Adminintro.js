import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form,Input, message} from 'antd';
import { HideLoading, ShowLoading } from '../../../redux/rootslice';
import axios from 'axios';
//dispatch: To send actions to the Redux store.
//useSelector: To access the portfolioData from the Redux store.
function Adminintro() {
    const dispatch=useDispatch();
    const{portfolioData}=useSelector((state)=>state.root)
    const onFinish = async(value) => {
       try{
dispatch(ShowLoading());
const response=await axios.post("/api/portfolio/update-intro",{...value, _id: portfolioData.intro._id,});
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
    <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.intro}>
        <Form.Item name="welcomeText" label="Welcome Text" className="mb-5">
            <Input placeholder="Welcome text" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name" className="mb-5">
            <Input placeholder="First name" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" className="mb-5">
            <Input placeholder="Last name" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <Form.Item name="caption" label="Caption" className="mb-5">
            <Input placeholder="Caption" className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </Form.Item>
        <Form.Item name="description" label="Description" className="mb-5">
            <Input.TextArea placeholder="Description" rows={4} className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
        <div className="flex justify-end">
            <button type="submit" className="px-10 py-2 bg-gradient-to-r from-black via-gray-600 to-sky-500/55 text-white transform transition-transform duration-300 hover:translate-x-1   hover:bg-blue-300 rounded-lg text-sm">Save</button>
        </div>
    </Form>
</div>

  )
}

export default Adminintro