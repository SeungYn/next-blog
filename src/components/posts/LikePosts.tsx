import LikeProtsCarousel from './LikeProtsCarousel';
import Subtitle from './Subtitle';
import 'react-multi-carousel/lib/styles.css';

export default function LikePosts() {
  return (
    <section className='overflow-scroll'>
      <Subtitle title='You may like' />
      <LikeProtsCarousel />
    </section>
  );
}
