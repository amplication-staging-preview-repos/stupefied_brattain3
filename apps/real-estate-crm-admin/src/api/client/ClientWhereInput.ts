import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  properties?: PropertyListRelationFilter;
  appointments?: AppointmentListRelationFilter;
};
