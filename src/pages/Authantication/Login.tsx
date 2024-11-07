import withRouter from "Common/withRouter";
import { useFormik } from "formik";
import ParticlesAuth from "pages/AuthAndPages/Error/ParticlesAuth";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import { loginUser, resetLoginFlag, socialLogin } from "slices/thunk";
import * as Yup from "yup";

const Login = (props: any) => {
  const dispatch: any = useDispatch();
  const selectAccountAndLogin = createSelector(
    (state: any) => state.Account,
    (state: any) => state.Login,
    (account, login) => ({
      user: account.user,
      error: login.error,
      loading: login.loading,
      errorMsg: login.errorMsg,
    })
  );

  const { user, error, loading, errorMsg } = useSelector(selectAccountAndLogin);

  const [userLogin, setUserLogin] = useState<any>([]);

  useEffect(() => {
    if (user && user) {
      const updatedUserData =
        process.env.REACT_APP_DEFAULTAUTH === "firebase"
          ? user.multiFactor.user.email
          : user.email;
      const updatedUserPassword =
        process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.password;
      setUserLogin({
        email: updatedUserData,
        password: updatedUserPassword,
      });
    }
  }, [user]);

  //  validation
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const validation: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || "admin@themesbrand.com" || "",
      password: userLogin.password || "123456" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    },
  });

  const signIn = (type: any) => {
    dispatch(socialLogin(type, props.router.navigate));
  };

  //for facebook and google authentication
  const socialResponse = (type: any) => {
    signIn(type);
  };

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        dispatch(resetLoginFlag());
      }, 3000);
    }
  }, [dispatch, errorMsg]);
  document.title = "Login | Judia - Admin & Dashboard Template";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <Col className="mx-auto">
          <Card className="mb-0 border-0 shadow-none mb-0">
            <Card.Body className="p-sm-5">
              <div className="text-center mt-4">
                <h5 className="fs-3xl">Welcome Back</h5>
                <p className="text-muted">Sign in to continue to CORT.</p>
              </div>
              <div className="p-2 mt-5">
                {error && error ? (
                  <Alert variant="danger"> {error} </Alert>
                ) : null}
                <Form
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>
                      Username <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="email"
                        name="email"
                        className="form-control bg-light border-light password-input"
                        placeholder="Enter username"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        isInvalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <Form.Control.Feedback type="invalid">
                          {validation.errors.email}
                        </Form.Control.Feedback>
                      ) : null}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password-input">
                    <div className="float-end">
                      <Link to="/forgot-password" className="text-muted">
                        Forgot password?
                      </Link>
                    </div>
                    <Form.Label>
                      Password <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <Form.Control
                        type={passwordShow ? "text" : "password"}
                        name="password"
                        className="form-control bg-light border-light pe-5 password-input"
                        placeholder="Enter password"
                        value={validation.values.password || ""}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        isInvalid={
                          validation.touched.password &&
                          validation.errors.password
                            ? true
                            : false
                        }
                      />
                      {validation.touched.password &&
                      validation.errors.password ? (
                        <Form.Control.Feedback type="invalid">
                          {validation.errors.password}
                        </Form.Control.Feedback>
                      ) : null}
                      <button
                        className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                        type="button"
                        id="password-addon"
                        onClick={() => setPasswordShow(!passwordShow)}
                      >
                        <i className="ri-eye-fill align-middle"></i>
                      </button>
                    </div>
                  </Form.Group>

                  <Form.Check className="mb-3" id="auth-remember-check">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>

                  <div className="mt-4">
                    <Button
                      className="btn btn-primary w-100"
                      type="submit"
                      disabled={loading}
                    >
                      {loading && <Spinner size="sm" />} Sign In
                    </Button>
                  </div>

                  {/* <div className="mt-4 pt-2 text-center">
                    <div className="signin-other-title position-relative">
                      <h5 className="fs-sm mb-4 title">Sign In with</h5>
                    </div>
                    <div className="pt-2 hstack gap-2 justify-content-center">
                      <Button
                        type="button"
                        className="btn btn-subtle-primary btn-icon"
                        onClick={(e) => {
                          e.preventDefault();
                          socialResponse("facebook");
                        }}
                      >
                        <i className="ri-facebook-fill fs-lg"></i>
                      </Button>
                      <Button
                        type="button"
                        className="btn btn-subtle-danger btn-icon"
                        onClick={(e) => {
                          e.preventDefault();
                          socialResponse("google");
                        }}
                      >
                        <i className="ri-google-fill fs-lg"></i>
                      </Button>
                      <Button
                        type="button"
                        className="btn btn-subtle-dark btn-icon"
                      >
                        <i className="ri-github-fill fs-lg"></i>
                      </Button>
                      <Button
                        type="button"
                        className="btn btn-subtle-info btn-icon"
                      >
                        <i className="ri-twitter-fill fs-lg"></i>
                      </Button>
                    </div>
                  </div> */}
                </Form>

                <div className="text-center mt-5">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="fw-semibold text-secondary text-decoration-underline"
                    >
                      SignUp
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default withRouter(Login);
