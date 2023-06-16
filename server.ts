import { createServer } from "miragejs";
import { faker } from "@faker-js/faker";

export function startMockServer() {
  createServer({
    routes() {
      this.namespace = "/api";

      this.get("/users", () => {
        const users = Array.from({ length: 5 }).map(() => ({
          id: faker.string.uuid(),
          name: faker.person.firstName(),
          email: faker.internet.email(),
        }));

        return { users };
      });
    },
  });
}
