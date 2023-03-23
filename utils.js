import { v4 as uuid } from "uuid";
const unique_id = uuid();
export const small_id = unique_id.slice(0, 8);
