import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Layout from '../Layout/Layout';
import './Home.css';

const Home = () => {


    return (
        <div>
            <Layout>
                <Banner></Banner>
                <Doctors limit = {6}></Doctors>
            </Layout>
            {/* <Header></Header>
            <Banner></Banner>
            <Doctor></Doctor>
            <Footer></Footer> */}
        </div>
    );
};

export default Home;