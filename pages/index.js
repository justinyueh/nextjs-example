import Link from 'next/link';

const Index = ({ count }) => (
  <div>
    Welcome to next.js {count}!
    <Link href="/home"><a>Home</a></Link>
  </div>
);

Index.getInitialProps = async () => {
  return {
    count: 5,
  };
};

export default Index
