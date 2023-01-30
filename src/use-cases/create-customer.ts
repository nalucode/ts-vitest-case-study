import { Customer } from "../entities/customer";
import { CustomersRepository } from "../repositories/customers-repository";

interface CreateCustomerRequest {
  name: string;
  email: string;
}

type CreateCustomerResponse = Customer;

export class CreateCustomer {
  constructor(private customerRepostitory: CustomersRepository) {}

  async execute({
    name,
    email,
  }: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    const emailUsageConflict =
      await this.customerRepostitory.findSameEmailUsageConflict(email);

    if (emailUsageConflict) {
      throw new Error("Another customer uses this email.");
    }

    const customer = new Customer({
      name,
      email,
    });

    await this.customerRepostitory.create(customer);

    return customer;
  }
}
