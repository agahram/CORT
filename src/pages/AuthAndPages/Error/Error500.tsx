import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import auth from 'assets/images/auth/500.png'
import ParticlesAuth from './ParticlesAuth'

const Error500 = () => {
    document.title = "500 Error | Judia - Admin & Dashboard Template"
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
                                    <h4 className="fs-2xl error-subtitle text-uppercase mb-0">Internal Server Error</h4>
                                    <p className="fs-base text-muted mt-3">It will be as simple as Occidental in fact,
                                        it will Occidental to an English person</p>
                                    <div className="mt-4">
                                        <Link to="/index" className="btn btn-primary"><i className="bi bi-house me-1"></i>Back to home</Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </ParticlesAuth>
        </React.Fragment>
    )
}

export default Error500