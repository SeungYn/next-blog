import { type Post } from '@/service/posts';
import PrevNextPostCard from './PrevNextPostCard';

type PropsType = {
  prevPost?: Post;
  nextPost?: Post;
};

export default function PrevNextPostCardContainer({
  prevPost,
  nextPost,
}: PropsType) {
  return (
    <div className='flex grow'>
      {prevPost && (
        <PrevNextPostCard path={prevPost.path} direction='prev'>
          <PrevNextPostCard.ArrowIcon direction='prev' />
          <PrevNextPostCard.Content
            title={prevPost.title}
            description={prevPost.description}
          />
        </PrevNextPostCard>
      )}
      {nextPost && (
        <PrevNextPostCard path={nextPost.path} direction='next'>
          <PrevNextPostCard.Content
            title={nextPost.title}
            description={nextPost.description}
          />
          <PrevNextPostCard.ArrowIcon direction='next' />
        </PrevNextPostCard>
      )}
    </div>
  );
}
