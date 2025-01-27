import React from 'react'

export default function Button({children , ...props}) {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 hove:text-stone-900" {...props}>
     
      {children}
    </button>
  );
}
