import React from 'react'
import SectionTitle from '../SectionTitle'
import { useSelector } from 'react-redux';
function Contact() {
  //const [selectedItemIndex, setselectedItemIndex ]=useState(0);
  const{portfolioData}=useSelector((state)=>state.root)
  const {contact}=portfolioData;

  
  return (
    <div>
           <SectionTitle title="Say hello"/>
           <div className='flex items-center justify-between pl-5'>
            <div className='flex flex-col gap-1'>
<p className='text-black'>{'{'}</p>
            {Object.keys(contact).map((key)=>(
              key!=='_id'&&
                <p className='ml-5'>
                    <span className='text-black italic font-bold'>{key}: </span>
                    <span className='text-black italic font-bold'>{contact[key]}</span>
                </p>
            ))}
            <p className='text-black'>{"}"}</p>
           </div>
           <div className='h-[500px]'>
           <lottie-player src="https://lottie.host/ce742e70-1a54-443d-87c1-8c7637ee7d20/v4O0ztFQ51.json" background="##FFFFFF" speed="1" loop  autoplay direction="1" mode="normal"></lottie-player>
           </div>
           </div>
    </div>
  )
}

export default Contact