/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Client as PrismaClient,
  Property as PrismaProperty,
  Appointment as PrismaAppointment,
} from "@prisma/client";

export class ClientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ClientCountArgs, "select">): Promise<number> {
    return this.prisma.client.count(args);
  }

  async clients(args: Prisma.ClientFindManyArgs): Promise<PrismaClient[]> {
    return this.prisma.client.findMany(args);
  }
  async client(
    args: Prisma.ClientFindUniqueArgs
  ): Promise<PrismaClient | null> {
    return this.prisma.client.findUnique(args);
  }
  async createClient(args: Prisma.ClientCreateArgs): Promise<PrismaClient> {
    return this.prisma.client.create(args);
  }
  async updateClient(args: Prisma.ClientUpdateArgs): Promise<PrismaClient> {
    return this.prisma.client.update(args);
  }
  async deleteClient(args: Prisma.ClientDeleteArgs): Promise<PrismaClient> {
    return this.prisma.client.delete(args);
  }

  async findProperties(
    parentId: string,
    args: Prisma.PropertyFindManyArgs
  ): Promise<PrismaProperty[]> {
    return this.prisma.client
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .properties(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.client
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }
}
