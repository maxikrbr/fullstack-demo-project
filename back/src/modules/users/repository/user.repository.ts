import { UpdateUserDto } from './../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(data: CreateUserDto): Promise<User> | User;

  abstract findOne(id: string): Promise<User> | User;
  abstract delete(id: string): Promise<void> | void;
  abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
  abstract findEmail(email: string): Promise<User> | User;
}
