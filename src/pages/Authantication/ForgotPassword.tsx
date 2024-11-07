import React from 'react'

import { Alert, Button, Card, Col, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import email from 'assets/images/auth/email.png'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { userForgetPassword } from 'slices/forgetpwd/thunk'
import ParticlesAuth from 'pages/AuthAndPages/Error/ParticlesAuth'

const ForgotPassword = (props: any) => {


    const dispatch = useDispatch<any>();

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
        }),
        onSubmit: (values) => {
            dispatch(userForgetPassword(values, props.history));
        }
    });

    const selectForgetPassword = createSelector(
        (state: any) => state.ForgetPassword,
        (forgetPassword) => ({
            forgetError: forgetPassword.forgetError,
            forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
        })
    );

    const { forgetError, forgetSuccessMsg } = useSelector(selectForgetPassword);
    document.title = "Reset Password | Judia - Admin & Dashboard Template"

    return (
        <React.Fragment>
            <ParticlesAuth>
                <Col xxl={6} className="mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center mt-2">
                                <h5 className="fs-3xl">Forgot Password?</h5>
                                <p className="text-muted mb-4">Reset password with Judia</p>
                                <div className="pb-4">
                                    <Image src={email} alt="" className="avatar-md" />
                                </div>
                            </div>

                            <Alert variant="warning" className="text-center mb-2 mx-2">
                                Enter your email and instructions will be sent to you!
                            </Alert>

                            <div className="p-2">
                                {forgetError && forgetError ? (
                                    <Alert variant="danger" style={{ marginTop: "13px" }}>
                                        {forgetError}
                                    </Alert>
                                ) : null}
                                {forgetSuccessMsg ? (
                                    <Alert variant="success" style={{ marginTop: "13px" }}>
                                        {forgetSuccessMsg}
                                    </Alert>
                                ) : null}
                                <Form action=''
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Email or username</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name='email'
                                            className="form-control bg-light border-light password-input"
                                            id="email"
                                            placeholder="Enter email or username"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.email || ""}
                                            isInvalid={
                                                validation.touched.email && validation.errors.email ? true : false
                                            }
                                        />
                                        {validation.touched.email && validation.errors.email ? (
                                            <Form.Control.Feedback type="invalid">{validation.errors.email}</Form.Control.Feedback>
                                        ) : null}
                                    </Form.Group>

                                    <div className="text-center mt-4">
                                        <Button className="btn btn-primary w-100" type="submit">
                                            Send Reset Link
                                        </Button>
                                    </div>
                                </Form>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="mb-0">
                                    Wait, I remember my password... <Link to="/login" className="fw-semibold text-primary text-decoration-underline">Click here</Link>{' '}
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </ParticlesAuth>
        </React.Fragment>
    )
}

export default ForgotPassword