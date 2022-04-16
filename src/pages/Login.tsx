import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import axios from "axios";
import { Navigate } from "react-router-dom";

type Props = {};
interface Values {
  password: string;
  email: string;
}

const Login = (props: Props) => {
  const [redirect, setRedirect] = useState(false);

  async function submitLogin(data: any) {
    await axios
      .post("http://localhost:8000/api/admin/login", data, {
        withCredentials: true,
      })
      .then(() => {
        setRedirect(true);
      });
  }
  if (redirect) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div>
      <h1>Acceder</h1>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            submitLogin(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" type="email" />
          <label htmlFor="password">Contraseña</label>
          <Field id="password" name="password" placeholder="John" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
