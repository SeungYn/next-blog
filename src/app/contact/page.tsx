export default function Contact() {
  return (
    <section className='w-full h-full flex flex-col items-center gap-4'>
      <h1 className='text-3xl font-bold'>Contact me</h1>
      <p className='opacity-50'>info@naver.com</p>
      <h1 className='text-4xl font-bold'>Or Send me an email</h1>
      <form className='w-full max-w-prose bg-slate-600 px-4 py-6 rounded-lg text-white flex flex-col  gap-2'>
        <label>
          <p className='pb-3'>Your Email</p>
          <input type='text' name='email' className='w-full' />
        </label>
        <label>
          <p className='pb-3'>Your Subject</p>
          <input type='text' name='subject' className='w-full' />
        </label>
        <label>
          <p className='pb-3'>Message</p>
          <textarea className='w-full h-96'></textarea>
        </label>
        <button className='w-full bg-yellow-500 text-xl rounded-md'>
          Submit
        </button>
      </form>
    </section>
  );
}
