
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form,Input,Modal, message} from 'antd';
//import {Modal} from "antd";
import { HideLoading, ReloadData, ShowLoading } from '../../../redux/rootslice';
import "./admin.css";
import axios from 'axios';
function AdminExperiences () {
  const dispatch=useDispatch();
  const{portfolioData}=useSelector((state)=>state.root)
  const {experiences}=portfolioData;
  const [showAddEditModal,setShowAddEditModal]=React.useState(false);
  const [selectedItemForEdit,SetSelectedItemForEdit]=React.useState(null);
  const [type,setType]=React.useState("add");
const onFinish=async(value)=>{
  try{
    dispatch(ShowLoading());
    let response
    if(selectedItemForEdit){
     response=await axios.post("/api/portfolio/update-experience",{...value, _id: selectedItemForEdit._id,});
    }else{
response=await axios.post("/api/portfolio/add-experience",value)
    }
    dispatch(HideLoading())
    if(response.data.success){
        message.success(response.data.message)
        setShowAddEditModal(false);
        setShowAddEditModal(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
    } else{
        message.error(response.data.message)
    }   
    }catch(err){
        dispatch(HideLoading());
            message.error(err.message)
           }
        
}
const onDelete=async(item)=>{
  try{
    dispatch(ShowLoading());
    const response = await axios.post("/api/portfolio/delete-experience",{
      _id:item._id,
    });
    dispatch(HideLoading());
    if(response.data.success){
      message.success(response.data.message);
      dispatch(HideLoading());
      dispatch(ReloadData(true));

    } else{
      message.error(response.data.message);}}
      catch(err){
      dispatch(HideLoading());
      message.error(err.message);

    }
  }


  return (
    <>
      <div className='flex justify-end'>
        <button className='bg-black rounded px-5 py-2  text-white' onClick={()=>{
          SetSelectedItemForEdit(null);
          setShowAddEditModal(true);
        }}
        >Add Experience</button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {experiences.map((experiences)=>
        <div className='shadow border p-5 border-white flex-col'>
          <h1 className='text-black text-xl font-bold'>{experiences.period}</h1>
          <hr/>
          <h1 className='text-gray-300 mt-5'>COMPANY : {experiences.company}</h1>
          <h1 className='mt-2'>ROLE : {experiences.title}</h1>
          <h1 className='text-gray-300 mt-2'>Description : {experiences.description}</h1>
<div className='flex justify-end gap-5 mt-5'>
  <button className='  text-white bg-gradient-to-r from-black via-gray-600 to-sky-500/55 transform transition-transform duration-300 hover:translate-y-1  hover:bg-gray-800 rounded-lg text-sm   px-5 py-2' onClick={()=>{
    SetSelectedItemForEdit(experiences);
    setShowAddEditModal(true);
    setType('edit');
  }}>Edit</button>
  <button className='  bg-gradient-to-r from-black via-gray-600 to-sky-500/55 transform transition-transform duration-300 hover:translate-y-1 text-white  hover:bg-blue-300 rounded-lg text-sm   px-5 py-2 ' onClick={()=>{
    onDelete(experiences);
  }}>Delete</button>
  </div>
</div>
        )}
      </div>
      {(type ==="add"|| selectedItemForEdit)&& (
      <Modal visible={showAddEditModal}
      title={selectedItemForEdit?"Edit Experience" : "Add Experience"}
      footer={null}
      onCancel={()=> {setShowAddEditModal(false);
        SetSelectedItemForEdit(null);
      }}
      >
      
        <Form layout='vertical' onFinish={onFinish} initialValues={selectedItemForEdit ||{}}>
          <Form.Item name="period" label="Period" className='font-bold' >
            <input placeholder='Period'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <Form.Item name="company" label="Company"className='font-bold' >
            <input placeholder='Company'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <Form.Item name="title" label="Title" className='font-bold'>
            <input placeholder='Title'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <Form.Item name="description 1" label="Description 1" className="mb-5 font-bold">
            <Input.TextArea placeholder="Description 1" rows={4} className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </Form.Item>
          <div className='flex justify-end gap-5 mt-5'>
            <button className='  focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center text-white bg-gradient-to-r from-black via-gray-600 to-sky-500/55 transform transition-transform duration-300 hover:translate-y-1' onClick={()=>{
              setShowAddEditModal(false);
              SetSelectedItemForEdit(null);
            }}>Cancel</button>
            <button className='bg-primary  focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2 ml-3 text-center text-white bg-gradient-to-r from-black via-gray-600 to-sky-500/55 transform transition-transform duration-300 hover:translate-y-1'>
              {selectedItemForEdit?"Update" : "Add"}
            </button>
          </div>
        </Form>
        
      </Modal>
      
      )}
    </>
  )
          }

export default  AdminExperiences ;