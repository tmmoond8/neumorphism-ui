import Link from 'next/link';

const Index = () => (
  <div>
    <h3>링크로 갑시다.</h3>
    <ul>
      <li><Link href="/dog">Dog</Link></li>
      <li><Link href="/cat">Cat</Link></li>
    </ul>
  </div>
);

export default Index;
