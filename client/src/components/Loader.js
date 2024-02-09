import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
      <div className='flex gap-5 text-4xl sm:xl font-bold'>
        <h1 className='text-secondary x1'>Code</h1>
        <h1 className='text-white x2'>Code</h1>
        <h1 className='text-tertiary x3'>Code</h1>
      </div>
    </div>
  )
}

export default Loader
