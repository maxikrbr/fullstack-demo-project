import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    default: 'Contato',
    type: String
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email do contato',
    default: 'contact@example.com',
    type: String
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Telefone do contato',
    default: '11999999999',
    type: String
  })
  @IsString()
  @IsNotEmpty()
  phone: string;
}
