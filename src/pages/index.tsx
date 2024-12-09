import React from 'react';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import Articles from '../components/Articles';
import Services from '../components/Services';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="w-full">
        <ProductDetails />
        <div className="h-10"></div>
        <Articles title="Articles similaires" itemCount={9} />
        <div className="h-10"></div>
        <Articles title="Ces produits pourraient vous intéresser" itemCount={3} />
        <div className="h-10"></div>
        <Services/>
        <div className="h-10"></div>
        <Subscribe/>
        <div className="h-10"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
