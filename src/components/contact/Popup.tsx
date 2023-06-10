'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';

type PropsType = {
  isPop: boolean;
  setPop: Dispatch<SetStateAction<boolean>>;
};

export default function Popup({ isPop, setPop }: PropsType) {
  useEffect(() => {
    if (!isPop) return;

    const timeOut = setTimeout(() => {
      console.log('종료');
      setPop(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [isPop]);

  if (!isPop) return <></>;

  return (
    <div className='p-4 bg-green-300 w-full rounded-md text-center'>
      ✅성공했어
    </div>
  );
}
