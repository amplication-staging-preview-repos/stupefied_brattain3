import { Client } from "../client/Client";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  price: number | null;
  client?: Client | null;
  appointments?: Array<Appointment>;
};
