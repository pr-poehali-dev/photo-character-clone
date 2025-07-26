import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CharacterCreation from '@/components/CharacterCreation';
import Gallery from '@/components/Gallery';
import Guide from '@/components/Guide';
import Profile from '@/components/Profile';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <CharacterCreation />
      <Gallery />
      <Guide />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;