import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// type Props = {
//   title: string;
//   description: string;
//   path: string;
//   direction: 'next' | 'prev';
// };

type PrevNextPostCardType = {
  path: string;
  children: React.ReactNode;
};

export default function PrevNextPostCard({
  path,
  children,
}: PrevNextPostCardType) {
  return (
    <div className={`w-full h-full bg-[url('/image/${path}.png')]`}>
      {children}
    </div>
  );
}

PrevNextPostCard.ArrowIcon = ArrowIcon;
PrevNextPostCard.Content = Content;

type ArrowIconType = {
  direction: 'next' | 'prev';
};

function ArrowIcon({ direction }: ArrowIconType) {
  return direction === 'prev' ? (
    <AiOutlineArrowLeft />
  ) : (
    <AiOutlineArrowRight />
  );
}

type ContentType = {
  title: string;
  description: string;
};

function Content({ title, description }: ContentType) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
