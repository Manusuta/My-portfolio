import React from 'react'
import Header from '../../Header'
import { Tabs } from 'antd';

import Adminabout from './Adminabout';
import Adminintro from './Adminintro';
import { useSelector } from 'react-redux';
import Experiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
const {TabPane}=Tabs;

function Index() {
    const{portfolioData}=useSelector((state)=>state.root)
  return (
    <div >
      
        <Header/>
        <div className='flex gap-10 items-center px-5 py-2'>
            
        <h1 className='text-3xl text-black font-bold'>Portfolio Admin</h1>
        <div className='w-60 h-[1px] bg-white'>
        </div>
        </div>
        {portfolioData&&
       
        <div className='  mx-auto  mt-5 px-5 text-gray-900 font font-bold '>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Intro" key="1">
                <Adminintro/>
                </TabPane>
                <TabPane tab="About" key="2">
                    <Adminabout/>
                </TabPane>
                <TabPane tab="Experiences" key="3">
                    <Experiences/>
                </TabPane>
                <TabPane tab="Projects" key="4">
                    <AdminProjects/>
                </TabPane>
                <TabPane tab="Courses" key="5">
                    <AdminCourses/>
                </TabPane>
                <TabPane tab="Contact" key="6">
                    <AdminContact/>
                </TabPane>
            </Tabs>
        </div>
}
    </div>
  )
}

export default Index