import { Checks } from "./functions/checks";
export const ApiClient = {
  checks: {
    create: new Checks().create,
  },
};
