import { PrismaService } from 'src/database/prisma.service';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { ContactRepository } from '../contact.repository';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactPrismaRepository implements ContactRepository {
  constructor(private prisma: PrismaService) {}

  async create(user_id: string, data: CreateContactDto): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, { ...data });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        user_id: user_id
      }
    });

    return plainToInstance(Contact, newContact);
  }

  async findAll(user_id: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: { user_id: user_id },
      orderBy: { name: 'asc' }
    });

    return plainToInstance(Contact, contacts);
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id }
    });
    return plainToInstance(Contact, contact);
  }

  async delete(id: string): Promise<void> {
    const contact = await this.prisma.contact.delete({
      where: { id }
    });
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data }
    });
    return plainToInstance(Contact, contact);
  }
}
