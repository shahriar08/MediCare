import React from 'react';
import notFound from './notFound.jpg'
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center pt-5">
            <div className="card row" style={{ width: "50rem" }}>
                <img className="card-img-top" src={notFound} alt="not found img" />
                <h4 className="card-text text-center fs-2 fw-bold mt-5 mb-5">Sorry, Page Not Found!</h4>
            </div>

        </div>
    );
};

export default NotFound;