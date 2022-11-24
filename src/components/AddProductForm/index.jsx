import React, { useContext } from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'
import { addProduct } from '../../requests/products';
import { Context } from '../../context'

export default function AddProductForm() {

  const { createNewProduct } = useContext(Context);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const submit = data => {
    console.log(data);
    addProduct(data, createNewProduct)
  };

  const titleRegister = register('title', {
    required: 'Field "title" required'
  });

  const descriptionRegister = register('description', {
    required: 'Field "description" required'
  });

  const priceRegister = register('price', {
    required: 'Field "price" required'
  });

  return (
    <div>
      <form className={s.add_product_form} onSubmit={handleSubmit(submit)}>
        <input 
          type='text' 
          name='title' 
          placeholder='Title' 
          {...titleRegister} 
        />

        <input 
          type='text' 
          name='description' 
          placeholder='Description' 
          {...descriptionRegister}
        />

        <input 
          type='text' 
          name='price' 
          placeholder='Price' 
          {...priceRegister}
        />

        <button>Add product</button>
      </form>

      <div>
        <div>
          { errors?.title && <p>{ errors?.title?.message }</p> }
        </div>

        <div>
          { errors?.description && <p>{ errors?.description?.message }</p> }
        </div>

        <div>
          { errors?.price && <p>{ errors?.price?.message }</p> }
        </div>
      </div>
    </div>
  )
}