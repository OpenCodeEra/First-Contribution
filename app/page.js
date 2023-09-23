import Image from 'next/image';
import Herobar from './components/Herobar';
import Allcontributors from './components/Contributors/Allcontributors';

export default function Home() {
  return (
    <>
      <Herobar />
      <Allcontributors />
    </>
  )
}
