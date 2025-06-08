import axios from "axios";

const BASE_URL = import.meta.env.VITE_PRODUCT_SERVICE_GRAPHQL;

export const getAllProducts = async () => {
  const res = await axios.post(BASE_URL, {
    query: `
      query {
        products {
          product_id
          name
          type
          location
          status
          description
        }
      }
    `,
  });
  return res.data.data.products;
};

export const getProductById = async (id: number) => {
  const res = await axios.post(BASE_URL, {
    query: `
      query {
        product(id: ${id}) {
          product_id
          name
          type
          location
          status
          description
        }
      }
    `,
  });
  return res.data.data.product;
};

export const addProduct = async (product: {
  name: string;
  type: string;
  location: string;
  status: string;
  description: string;
}) => {
  const res = await axios.post(BASE_URL, {
    query: `
      mutation {
        addProduct(
          name: "${product.name}"
          type: "${product.type}"
          location: "${product.location}"
          status: "${product.status}"
          description: "${product.description}"
        ) {
          product_id
        }
      }
    `,
  });
  return res.data.data.addProduct;
};

export const updateProduct = async (
  id: number,
  product: {
    name: string;
    type: string;
    location: string;
    status: string;
    description: string;
  }
) => {
  const res = await axios.post(BASE_URL, {
    query: `
      mutation {
        updateProduct(
          id: ${id}
          name: "${product.name}"
          type: "${product.type}"
          location: "${product.location}"
          status: "${product.status}"
          description: "${product.description}"
        ) {
          product_id
        }
      }
    `,
  });
  return res.data.data.updateProduct;
};

export const deleteProduct = async (id: number) => {
  const res = await axios.post(BASE_URL, {
    query: `
      mutation {
        deleteProduct(id: ${id}) {
          success
        }
      }
    `,
  });
  return res.data.data.deleteProduct;
};
