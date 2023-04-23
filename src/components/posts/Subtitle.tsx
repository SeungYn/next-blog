interface Props {
  title: string;
}

export default function Subtitle({ title }: Props) {
  return <h1 className='text-2xl'>{title}</h1>;
}
