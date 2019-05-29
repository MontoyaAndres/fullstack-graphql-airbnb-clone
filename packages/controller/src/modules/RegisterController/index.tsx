import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";

import { RegisterMutation, RegisterMutationVariables } from "../../schemaTypes";

interface Props {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

const C: React.SFC<
  ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>
> = ({ children, mutate }) => {
  async function submit(values: RegisterMutationVariables) {
    const response = await mutate({ variables: values });

    console.log(response);

    return null;
  }

  return children({ submit });
};

export const RegisterController = graphql<
  Props,
  RegisterMutation,
  RegisterMutationVariables
>(registerMutation)(C);
