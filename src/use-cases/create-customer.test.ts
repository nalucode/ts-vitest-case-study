import { describe, expect, it } from "vitest";
import { Customer } from "../entities/customer";
import { CreateCustomer } from "./create-customer";

import { InMemoryCustomersRepository } from "../repositories/in-memory/in-memory-customers-repository";

describe("Create Customer", () => {
  it("should be able to create a customer", () => {
    const createCustomerRepository = new InMemoryCustomersRepository();

    const createCustomer = new CreateCustomer(createCustomerRepository);

    const name = "John Doe";
    const email = "johndoe@mail.com";

    expect(
      createCustomer.execute({
        name,
        email,
      })
    ).resolves.toBeInstanceOf(Customer);
  });

  it("should not be able to create a customer with an email already in use", async () => {
    const createCustomerRepository = new InMemoryCustomersRepository();
    const createCustomer = new CreateCustomer(createCustomerRepository);

    const name = "John Doe";
    const email = "johndoe@mail.com";

    await createCustomer.execute({
      name,
      email,
    });

    expect(
      createCustomer.execute({
        name,
        email,
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createCustomer.execute({
        name,
        email: "jhondoe1@mail.com",
      })
    ).resolves.toBeInstanceOf(Customer);
  });
});
