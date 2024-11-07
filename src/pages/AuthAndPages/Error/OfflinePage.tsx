import React from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap'
import auth from 'assets/images/auth/offline-page.gif'
import ParticlesAuth from './ParticlesAuth';

const OfflinePage = () => {
    const refreshPage = () => {
        window.location.reload();
    };
    document.title = "Offline Page | Judia - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <ParticlesAuth>
                <Col xxl={6} className="mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="mt-2 text-center">
                                <div className="error-img text-center px-5">
                                    <Image src={auth} className="img-fluid" alt="" />
                                </div>
                                <h3 className="mt-2 fw-semibold">We're Currently Offline</h3>
                                <p className="text-muted mb-4">We can't show you this images because you aren't connected to the internet. When you’re back online refresh the page or hit the button below</p>
                                <Button className="btn btn-primary" onClick={refreshPage}><i className="ri-refresh-line align-bottom"></i> Refresh</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </ParticlesAuth>
        </React.Fragment>
    )
}

export default OfflinePage