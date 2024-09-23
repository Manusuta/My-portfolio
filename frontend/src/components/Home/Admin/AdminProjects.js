
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form,Input,Modal, message} from 'antd';
//import {Modal} from "antd";
import { HideLoading, ReloadData, ShowLoading } from '../../../redux/rootslice';

import axios from 'axios';
function AdminProjects() {
  const dispatch=useDispatch();
  const{portfolioData}=useSelector((state)=>state.root)
  const {projects}=portfolioData;
  const [showAddEditModal,setShowAddEditModal]=React.useState(false);
  const [selectedItemForEdit,SetSelectedItemForEdit]=React.useState(null);
  const [type,setType]=React.useState("add");
const onFinish=async(value)=>{
  try{
    const tempTechnologies = value?.technologies?.split(",") || [];
    value.technologies=tempTechnologies;
    dispatch(ShowLoading());
    let response
    if(selectedItemForEdit){
     response=await axios.post("/api/portfolio/update-projects",{...value, _id: selectedItemForEdit._id,});
    }else{
response=await axios.post("/api/portfolio/add-projects",value)
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
    const response = await axios.post("/api/portfolio/delete-projects",{
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
    <div>
      <div className='flex justify-end '>
        <button className='bg-black rounded px-5 py-2 text-white ' onClick={()=>{
          SetSelectedItemForEdit(null);
          setShowAddEditModal(true);
        }}
        >Add projects</button>
      </div>
      <div className='grid grid-cols-3 gap-5 '>
        {projects.map((projects)=>
        <div className='shadow border-2 p-5 border-white flex-col gap-5 '>
          <h1 className='text-black text-xl font-bold '>{projects.title}</h1>
          <hr/>
        <img src={projects.image} alt='project image' className='h-60 w-80 mt-5'/>
          <h1 className='text-white mt-2'>PROJECT NAME : {projects.title}</h1>
          <h1 className='mt-2'>PROJECT DESCRIPTION : {projects.description}</h1>
          <h1 className='mt-1'>LINK : {projects.link}</h1>
<div className='flex justify-end gap-5 mt-5'>
  <button className=' bg-gradient-to-r from-black via-gray-600 to-sky-500/55 transform transition-transform duration-300 hover:translate-y-1 text-white  hover:bg-gray-800 rounded-lg text-sm   px-5 py-2' onClick={()=>{
    SetSelectedItemForEdit(projects);
    setShowAddEditModal(true);
    setType('edit');
  }}>Edit</button>
  <button className=' bg-gradient-to-r from-black via-gray-600 to-sky-500/55 transform transition-transform duration-300 hover:translate-y-1  text-white  hover:bg-blue-300 rounded-lg text-sm   px-5 py-2' onClick={()=>{
    onDelete(projects);
  }}>Delete</button>
  </div>
</div>
        )}
      </div>
      {(type ==="add"|| selectedItemForEdit)&& (
      <Modal visible={showAddEditModal}
      title={selectedItemForEdit?"edit Experience" : "Add Experience"}
      footer={null}
      onCancel={()=> {setShowAddEditModal(false);
        SetSelectedItemForEdit(null);
      }}
      >
        <Form layout='vertical' onFinish={onFinish} initialValues={{...selectedItemForEdit ,technologies : selectedItemForEdit?.technologies?.join(" , "),}|| {}}>
          <Form.Item name="title" label="Title" className='font-bold' >
            <input placeholder='Title'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <Form.Item name="image" label="Image" className='font-bold'>
            <input placeholder='Image'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <Form.Item name="description" label="Description"className='font-bold' >
            <textarea placeholder='Description'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <Form.Item name="technologies" label="Technologies"className='font-bold' >
            <input placeholder='Technologies'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <Form.Item name="link" label="Link" className='font-bold'>
            <input placeholder='Link'className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
          </Form.Item>
          <div className='flex justify-end'>
            <button className='    font-bold rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-black via-gray-600 to-sky-500/55 text-white transform transition-transform duration-300 hover:translate-x-1   hover:bg-blue-300' onClick={()=>{
              setShowAddEditModal(false);
              SetSelectedItemForEdit(null);
            }}>Cancel</button>
            <button className=' bg-primary   focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 ml-3 text-center bg-gradient-to-r from-black via-gray-600 to-sky-500/55 text-white transform transition-transform duration-300 hover:translate-x-1   hover:bg-blue-300'>
              {selectedItemForEdit?"Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
      )}
    </div>
  )
          }

export default AdminProjects;