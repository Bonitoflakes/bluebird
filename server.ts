import { createServer, Model } from "miragejs";
import { faker } from "@faker-js/faker";

const generateFakeUser = () => {
  const user = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.person.bio(),
    avatar: faker.image.avatar(),
    password: "123456",
  };
  return user;
};

export function startMockServer() {
  createServer({
    environment: "development",
    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", generateFakeUser());
      server.create("user", generateFakeUser());
      server.create("user", {
        id: faker.string.uuid(),
        name: "rishab khivsara",
        email: "rishab.khivsara@gmail.com",
        bio: "Howdy mates!!",
        avatar: faker.image.avatar(),
        password: "rishabrocks",
      });
    },

    routes() {
      this.namespace = "/api";

      this.post("/validate-user", (schema, request) => {
        const requestBody = JSON.parse(request.requestBody);
        const { username } = requestBody;
        const userToBeFound = username;

        const user = schema.db.users.findBy({ email: userToBeFound });

        console.log(user, "user");
        console.log(requestBody, "requestBody");
        return Boolean(user);
      });

      this.post("/login", (schema, request) => {
        const requestBody = JSON.parse(request.requestBody);
        const { username, password } = requestBody;

        const user = schema.db.users.findBy({ password });

        console.log(user, "user");
        console.log(requestBody, "requestBody");

        return user;
      });
    },
  });
}
