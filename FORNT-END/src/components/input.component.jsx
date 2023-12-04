
import React, { useState } from 'react'


const InputBox = ({name, type , id , value ,placeholder ,icon}) => {
    const [PasswordVisible, setPasswordVisible]= useState(false)
  return (
   <div className=' relative w-[100%] mb-4'>

          <input 
         
           type={type == "password" ? PasswordVisible ? "text": "password": type}
           name={name}
           defaultValue={value}
           id={id}
           placeholder={placeholder}
           className='input-box'
           
           />
          <i className={"fi " + icon + " input-icon"}></i>
      
        {/* ตปุ้มเปีดปีดตา */}
        {
            type == "password"?
                <i class={"fi fi-rr-eye"+( !PasswordVisible ? "-crossed" :"")+" input-icon left-[auto] right-4 cursor-pointer"}
                onClick={()=> setPasswordVisible(currentVal => !currentVal)}
            ></i>
            :""
        }

   </div>
  )
}

export default InputBox