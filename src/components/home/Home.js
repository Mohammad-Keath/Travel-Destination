import './Home.css'
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

const data = require('../../data/data.json')

 function Home() {
  return (
    <>
     <Header />
     <Tours arrayData={data} />
     <Footer />
    </>

  )
}




export default Home;