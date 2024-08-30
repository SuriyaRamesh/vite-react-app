import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
//  returns form object
  const {register, handleSubmit} = useForm();  

  return (
    <form className='w-50 bg-warning p-4 rounded-2' onSubmit={handleSubmit(data => console.log(data))}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input {...register('name')} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input {...register('age')}  id="age" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ReactHookForm;
