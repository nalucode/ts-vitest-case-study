import { expect, test } from "vitest";
import { Customer } from "./customer";

test("create a customer", () => {
  const name = "John Doe";
  const email = "johndoe@mail.com";

  const customer = new Customer({
    name,
    email,
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.name).toEqual(name);
});

test("cannot create a customer with name length less 3 characters.", () => {
  const name = "Jh";
  const email = "johndoe@mail.com";

  expect(() => {
    return new Customer({
      name,
      email,
    });
  }).toThrow();
});

test("cannot create a customer without an email.", () => {
  const name = "John Doe";
  const email = "";

  expect(() => {
    return new Customer({
      name,
      email,
    });
  }).toThrow()
});