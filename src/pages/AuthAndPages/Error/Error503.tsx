import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import auth from 'assets/images/auth/503.png'
import ParticlesAuth from './ParticlesAuth'

const Error503 = () => {
    document.title = "503 Error | Judia - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <ParticlesAuth>
                <Col xxl={6} className="mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="error-img text-center px-5">
                                <Image src={auth} className="img-fluid" alt="" />
                            </div>
                            <div className="mt-4 text-center pt-4">
                                <div className="position-relative">
                                    <h4 className="fs-2xl error-subtitle text-uppercase mb-0">Service Unavailable</h4>
                                    <p className="fs-base text-muted mt-3">The service is temporarily unavailable, try again later!</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </ParticlesAuth>
        </React.Fragment>
    )
}

export default Error503