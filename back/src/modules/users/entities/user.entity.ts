import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phone: string;

  @Exclude()
  password: string;

  readonly created_at: Date;
}
