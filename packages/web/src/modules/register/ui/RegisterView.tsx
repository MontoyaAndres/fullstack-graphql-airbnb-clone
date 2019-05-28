import * as React from "react";
import * as Antd from "antd";
import { FormikErrors, FormikProps, withFormik, Form, Field } from "formik";
import { validUserSchema } from "@abb/common";

import { InputField } from "../../shared/InputField";

const { Form: AntForm, Icon, Button } = Antd;
const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const C: React.SFC<FormikProps<FormValues> & Props> = () => (
  <Form method="POST" style={{ display: "flex" }}>
    <div style={{ width: 400, margin: "auto" }}>
      <Field
        type="email"
        name="email"
        prefix={<Icon type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />}
        placeholder="Email"
        component={InputField}
      />

      <Field
        type="password"
        name="password"
        prefix={<Icon type="lock" style={{ color: "rgba(0, 0, 0, .25)" }} />}
        placeholder="Password"
        component={InputField}
      />

      <FormItem>
        <a className="login-form-forgot">Forgot password</a>
      </FormItem>

      <FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
      </FormItem>

      <FormItem>
        Or <a>Login now!</a>
      </FormItem>
    </div>
  </Form>
);

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
