import { getConnectionOptions, createConnection } from "typeorm";

// Entities
// Only if I don't want to fix the routes of the files
// https://www.youtube.com/watch?v=LN1VD_oppEQ&list=PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s&index=14
import { User } from "../entity/User";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return process.env.NODE_ENV === "production"
    ? createConnection({
        ...connectionOptions,
        url: process.env.DATABASE_URL,
        entities: [User],
        name: "default"
      } as any)
    : createConnection({ ...connectionOptions, name: "default" });
};
