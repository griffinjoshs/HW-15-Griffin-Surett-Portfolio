import React from 'react'
import { Container } from "react-bootstrap";
import './FooterBottom.css'

const FooterBottom = () => {
    return (
        <div>
            {/* Footer Bottom */}
          <Container fluid className='footer-bottom'>
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Griffin Surett Web Services -
                All Rights Reserved
              </p>
            </div>
          </Container>
        </div>
    )
}

export default FooterBottom
