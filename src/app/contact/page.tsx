'use client';

import Popup from '@/components/contact/Popup';
import { sendContactEmail } from '@/service/contact';
import { FormEvent, useReducer, useState } from 'react';

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
  const [pop, setPop] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendContactEmail(form).then((d) => {
      
      setPop(true);
    });
  };

  return (
    <section
      className='w-full h-full max-w-prose flex flex-col items-center gap-4 mx-auto'
      onSubmit={onSubmit}
    >
      <h1 className='text-3xl font-bold'>Contact me</h1>
      <p className='opacity-50'>info@naver.com</p>
      <h1 className='text-4xl font-bold'>Or Send me an email</h1>
      <Popup isPop={pop} setPop={setPop} />
      <form className='w-full bg-slate-600 px-4 py-6 rounded-lg text-black flex flex-col  gap-2'>
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
