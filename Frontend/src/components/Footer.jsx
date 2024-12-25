import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{background: "#FF7043"}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <img src='./src/assets/rhai.png' style={{width: "50px"}} className='me-3' />
              </h6>
              <span className='text-white'>
                <b>RightHome AI</b>
              </span>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>AI Tools</h6>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                How AI Works
                </a>
              </p>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                AI Powered Search
                </a>
              </p>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                Virtual Tour with AI
                </a>
              </p>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                All Insights
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Get Assistance</h6>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                Feedback on AI Features
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Explore Properties</h6>
              <p>
                <MDBIcon icon="list" className="me-2 text-white" />
                <h8 className='text-white'>Featured Listings</h8>
              </p>
              <p>
                <MDBIcon icon="search" className="me-3 text-white" />
                <h8 className='text-white'>Find Homes with AI</h8>
              </p>
              <p>
                <MDBIcon icon="dollar-sign" className="me-3 text-white" /> <h8 className='text-white'>Sell your Property</h8>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-[#FF6200]' style={{ backgroundColor: '#fff' }}>
      <span style={{ marginRight: '5px' }}>© 2024</span>
        <a className='text-[#FF6200] fw-bold' href='https://www.righthomeai.co.uk/' style={{ textDecoration: 'none', marginRight: '5px'}}>
          RightHome AI.
        </a>
        <span style={{ marginRight: '5px' }}>All rights reserved. |</span>
        <a className='text-[#FF6200] fw-bold' href='#!' style={{textDecoration: 'none'}}>Privacy Policy |</a>
        <span style={{marginLeft: '5px'}}><a className='text-[#FF6200] fw-bold' href='#!' style={{textDecoration: 'none'}}>Terms of Services</a></span>
      </div>
    </MDBFooter>
  );
}