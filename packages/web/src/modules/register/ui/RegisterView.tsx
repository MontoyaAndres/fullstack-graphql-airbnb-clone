import * as React from "react";
import { Form, Icon, Input, Button } from "antd";
import { FormikErrors, FormikProps, withFormik } from "formik";
import { validUserSchema } from "@abb/common";

const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors
    } = this.props;

    return (
      <form method="POST" style={{ display: "flex" }} onSubmit={handleSubmit}>
        <div style={{ width: 400, margin: "auto" }}>
          <FormItem
            help={touched.email && errors.email ? "Wrong email" : ""}
            validateStatus={touched.email && errors.email ? "error" : undefined}
          >
            <Input
              name="email"
              prefix={
                <Icon type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />
              }
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>

          <FormItem
            help={touched.password && errors.password ? "Wrong password" : ""}
            validateStatus={
              touched.password && errors.password ? "error" : undefined
            }
          >
            <Input
              name="password"
              prefix={
                <Icon type="lock" style={{ color: "rgba(0, 0, 0, .25)" }} />
              }
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>

          <FormItem>
            <a className="login-form-forgot">Forgot password</a>
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>

          <FormItem>
            Or <a>Login now!</a>
          </FormItem>
        </div>
      </form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);

    if (errors) {
      setErrors(errors);
    }
  }
})(C);
