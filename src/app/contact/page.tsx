'use client';

import { useReducer, useState } from 'react';

const initialForm = { email: '', subject: '', message: '' };

type ActionType =
  | {
      type: 'email';
      value: string;
    }
  | {
      type: 'subject';
      value: string;
    }
  | {
      type: 'message';
      value: string;
    };

function formReducer(state: typeof initialForm, action: ActionType) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.value };
    case 'subject':
      return { ...state, subject: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      return state;
  }
}

export default function Contact() {
  const [form, dispatch] = useReducer(formReducer, initialForm);

  return (
    <section className='w-full h-full flex flex-col items-center gap-4'>
      <h1 className='text-3xl font-bold'>Contact me</h1>
      <p className='opacity-50'>info@naver.com</p>
      <h1 className='text-4xl font-bold'>Or Send me an email</h1>
      <form className='w-full max-w-prose bg-slate-600 px-4 py-6 rounded-lg text-black flex flex-col  gap-2'>
        <label>
          <p className='pb-3'>Your Email</p>
          <input
            type='text'
            name='email'
            className='w-full'
            value={form.email}
            onChange={(e) => {
              dispatch({ type: 'email', value: e.target.value });
            }}
          />
        </label>
        <label>
          <p className='pb-3'>Your Subject</p>
          <input
            type='text'
            name='subject'
            className='w-full'
            onChange={(e) => {
              dispatch({ type: 'subject', value: e.target.value });
            }}
          />
        </label>
        <label>
          <p className='pb-3'>Message</p>
          <textarea
            className='w-full h-96'
            onChange={(e) => {
              dispatch({ type: 'message', value: e.target.value });
            }}
          ></textarea>
        </label>
        <button className='w-full bg-yellow-500 text-xl rounded-md'>
          Submit
        </button>
      </form>
    </section>
  );
}
