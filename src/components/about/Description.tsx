interface Props {
  title: string;
  contents: Array<string>;
}

export default function Description(props: Props) {
  const { title, contents } = props;

  return (
    <article className='flex flex-col items-center '>
      <h2 className='text-xl py-2 font-bold'>title</h2>
      {contents?.map((str) => (
        <p key={str} className='mb-1 opacity-50'>
          {str}
        </p>
      ))}
    </article>
  );
}
