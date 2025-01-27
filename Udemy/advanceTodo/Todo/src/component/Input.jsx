import React, { forwardRef } from 'react'

 const Input =forwardRef( function Input({label,textarea, ...props},ref) {
  const classes='w-full p-2 border-b-2 rounded-md border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:border-gray-500'
  return (
    <div className='flex flex-col gap-2 my-4'>
      <label className='text-sm font-semibold uppercase text-gray-600'>{label}</label>
      {textarea ? <textarea ref={ref} className={classes} {...props}/> : <input ref={ref} className={classes} {...props}/>}
    </div>
  )
})
export default Input;

