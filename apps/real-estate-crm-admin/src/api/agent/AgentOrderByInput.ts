import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
};
