import { Link } from 'react-router-dom';
import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBContainer className='p-2 pb-0'>

        <MDBFooter className='text-center text-white text-lg-left w-100'>
            <form action=''>
            <MDBRow className='d-flex justify-content-center'>
                <MDBCol size='auto' className='mt-3'>
                <p className="text-light">
                    Are you passionate about gastronomy? Discover new recipes and culinary secrets with us.
                </p>
                </MDBCol>
                <MDBCol size='auto' className='mb-2'>
                <Link to="/subscribe/" className="btn btn-outline-warning">Subscribe</Link>
                </MDBCol>
            </MDBRow>
        </form>
        <div className='text-center p-3 bg-dark'>
            &copy; {new Date().getFullYear()} Copyright.{' '}
        </div>
        </MDBFooter>
        </MDBContainer>

    );
}
