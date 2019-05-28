import * as React from "react";
import { RegisterController } from "@abb/controller";

import { RegisterView } from "./ui/RegisterView";

export const RegisterConnector: React.SFC = () => {
  return (
    <RegisterController>
      {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
    </RegisterController>
  );
};
