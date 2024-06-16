import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  name?: string | null;
  location?: string | null;
  price?: number | null;
  client?: ClientWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
