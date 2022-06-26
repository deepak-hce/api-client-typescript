import { Checks } from "./functions/checks";
export const ApiClient = {
  checks: {
    create: new Checks().create,
  },
};

async function fetch() {
  const result = await ApiClient.checks.create();
  console.log(result);
}

setInterval(() => {
  fetch();
}, 2000);
