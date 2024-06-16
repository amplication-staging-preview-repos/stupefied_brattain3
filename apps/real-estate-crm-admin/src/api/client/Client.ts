import { Property } from "../property/Property";
import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  properties?: Array<Property>;
  appointments?: Array<Appointment>;
};
