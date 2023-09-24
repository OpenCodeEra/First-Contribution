import Allcontributors from './components/Contributors/Allcontributors';
import PageWrapper from './components/PageWrapper';
import Document from './document';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Herobar from './components/Herobar';
import WhyContribute from './components/ContributeGuide/WhyContribute';

const index = () => {
  return (
    <>
      <Document />
      <Navbar />
      <Herobar />
      <PageWrapper className="relative z-10 mb-10 space-y-24 !bg-transparent">
        <Allcontributors/>
        <WhyContribute />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default index;
