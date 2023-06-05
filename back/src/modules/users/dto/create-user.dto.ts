import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    default: 'Nome'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    default: 'mail@mail.com'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Telefone do usuário',
    default: '11999999999',
    minLength: 11
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  phone: string;

  @ApiProperty({
    description: 'Senha do usuário',
    default: '12345678',
    minLength: 8
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transforms']
  })
  password: string;
}
