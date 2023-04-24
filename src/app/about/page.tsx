import ProfileCard from '@/components/ProfileCard';
import Description from '@/components/about/Description';

const descriptionArr = [
  {
    title: 'Who am I?',
    contents: [
      '개발을 사랑하는 풀스탁 개발자',
      '사람과 디자인을 담는 왭왑을 만들고 이씅ㅁ',
    ],
  },
  {
    title: 'Career',
    contents: ['백수 99년차', '유명수 23'],
  },
  {
    title: 'Skills',
    contents: ['React, Vue, Node', 'Git, got girj', 'afwefwaf'],
  },
];

export default function About() {
  return (
    <section className=''>
      <ProfileCard />
      <div className='p-12 bg-slate-100 rounded-2xl'>
        {descriptionArr.map((item) => (
          <Description
            key={item.title}
            title={item.title}
            contents={item.contents}
          />
        ))}
      </div>
    </section>
  );
}
