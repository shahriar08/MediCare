import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import FAQ from '../FAQ/FAQ';
import Layout from '../Layout/Layout';
import Specialized from '../Specialized/Specialized';
import './Home.css';

const Home = () => {


    return (
        <div>
            <Layout>
                <Banner></Banner>
                <h3 className='mt-5 text-danger fw-bold text-center'>Helpful Doctors</h3>
                <h2 className='fw-bold text-center'>Advance Carefully Doctor</h2>
                <Doctors limit = {6}></Doctors>
                <Specialized></Specialized>
                <FAQ></FAQ>
            </Layout>
        </div>
    );
};

export default Home;