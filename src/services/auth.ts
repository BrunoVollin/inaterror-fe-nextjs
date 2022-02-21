import { v4 as uuid } from "uuid";
type SignInRequestData = {
  userName: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();
  return {
    token: uuid(),
    user: {
      name: "Bruno",
      email: "bruno@email.com",
      avatarUrl: "https://github.com/BrunoVollin.png",
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
		
    user: {
      name: "Bruno",
      email: "bruno@email.com",
      avatarUrl: "https://github.com/BrunoVollin.png",
    },
  };
}
