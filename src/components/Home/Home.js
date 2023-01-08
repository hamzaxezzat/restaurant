import React from "react"
import Aboutus from "./Aboutus";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from './Header';
import Numbers from "./Numbers";
import OurFoods from "./OurFoods";
import Testmonials from "./Testmonials";
const Home =()=>{
    return(
    <>
        <Header />
        <Numbers />
        <Aboutus />
        <OurFoods />
        <Testmonials />
        <FAQ />
        <Footer />
    </>
    )
}
export default Home;