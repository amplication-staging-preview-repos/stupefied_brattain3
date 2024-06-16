import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  name?: string | null;
  location?: string | null;
  price?: number | null;
  client?: ClientWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
