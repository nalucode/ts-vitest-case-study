export interface CustomerProps {
  email: string;
  name: string;
}

export class Customer {
  private props: CustomerProps;

  get email() {
    return this.props.email;
  }

  get name() {
    return this.props.name;
  }

  constructor(props: CustomerProps) {
    const { name, email } = props;

    if (name.length < 3) {
      throw new Error("Invalid name.");
    }

    if (!email.length) {
      throw new Error("Invalid email.")
    }

    this.props = props;
  }
}
