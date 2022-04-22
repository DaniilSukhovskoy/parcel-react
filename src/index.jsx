import { createRoot } from 'react-dom/client';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardsSection from './components/CardsSection/CardsSection';

import './scss/style.scss';

export default function App() {
    return (
        <>
            <Header />
            <CardsSection />
            <Footer />
        </>
    );
  }

const container = document.getElementById('root');
const root = createRoot(container)

root.render(<App />)