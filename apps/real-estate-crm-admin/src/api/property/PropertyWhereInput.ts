import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  price?: FloatNullableFilter;
  client?: ClientWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
};
