import axios from "axios";

const BASE_URL = import.meta.env.VITE_USER_SERVICE_GRAPHQL;

export const getAllUsers = async () => {
  const res = await axios.post(BASE_URL, {
    query: `
      query {
        users {
          user_id
          name
          email
        }
      }
    `,
  });
  return res.data.data.users;
};

export const getUserById = async (id: number) => {
  const res = await axios.post(BASE_URL, {
    query: `
      query {
        user(id: ${id}) {
          user_id
          name
          email
        }
      }
    `,
  });
  return res.data.data.user;
};

export const addUser = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post(BASE_URL, {
    query: `
      mutation {
        addUser(
          name: "${user.name}",
          email: "${user.email}",
          password: "${user.password}"
        ) {
          user_id
          name
          email
        }
      }
    `,
  });
  return res.data.data.addUser;
};

export const updateUser = async (
  id: number,
  user: { name: string; email: string }
) => {
  const res = await axios.post(BASE_URL, {
    query: `
      mutation {
        updateUser(
          id: ${id},
          name: "${user.name}",
          email: "${user.email}"
        ) {
          user_id
          name
          email
        }
      }
    `,
  });
  return res.data.data.updateUser;
};

export const deleteUser = async (id: number) => {
  const res = await axios.post(BASE_URL, {
    query: `
      mutation {
        deleteUser(id: ${id}) {
          success
        }
      }
    `,
  });
  return res.data.data.deleteUser;
};
