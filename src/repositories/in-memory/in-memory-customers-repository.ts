import { Customer } from "../../entities/customer";
import { CustomersRepository } from "../customers-repository";

export class InMemoryCustomersRepository implements CustomersRepository {
  public customers: Customer[] = [];

  async create(customer: Customer): Promise<void> {
    this.customers.push(customer)
  }

  async findSameEmailUsageConflict(email: string): Promise<Customer | null> {
    const sameEmailUsageConflict = this.customers.find(customer => {
      return customer.email == email
    })

    if (!sameEmailUsageConflict) {
      return null
    }

    return sameEmailUsageConflict
  }
}