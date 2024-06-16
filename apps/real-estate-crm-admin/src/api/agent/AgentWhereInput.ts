import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
