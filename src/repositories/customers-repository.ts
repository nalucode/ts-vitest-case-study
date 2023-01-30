import { Customer } from "../entities/customer";

export interface CustomersRepository {
  create(appointment: Customer): Promise<void>;
  findSameEmailUsageConflict(email: string): Promise<Customer | null>
}