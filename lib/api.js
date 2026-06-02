import axios from "axios";

//
// AXIOS INSTANCE
//
const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL,

  headers: {
    "Content-Type":
      "application/json",
  },
});

//
// REQUEST INTERCEPTOR
//
api.interceptors.request.use(
  (config) => {
    // ONLY IN BROWSER
    if (
      typeof window !==
      "undefined"
    ) {
      const token =
        localStorage.getItem(
          "admin_token"
        );

      // ADD TOKEN
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

//
// RESPONSE INTERCEPTOR
//
api.interceptors.response.use(
  (response) => response,

  (error) => {
    // AUTO LOGOUT
    if (
      error.response?.status ===
        401 &&
      typeof window !==
        "undefined"
    ) {
      localStorage.removeItem(
        "admin_token"
      );
    }

    return Promise.reject(error);
  }
);

//
// ===============================
// AUTH APIs
// ===============================
//

// REGISTER
export const registerAdmin = (
  data
) => {
  return api.post(
    "/auth/register",
    data
  );
};

// LOGIN
export const loginAdmin = (
  data
) => {
  return api.post(
    "/auth/login",
    data
  );
};

//
// ===============================
// ENQUIRY APIs
// ===============================
//

// SEND ENQUIRY
export const sendEnquiry = (
  data
) => {
  return api.post(
    "/contact/send-enquiry",
    data
  );
};

//
// ===============================
// BLOG APIs
// ===============================
//

// GET BLOGS
export const getBlogs = () => {
  return api.get("/blogs");
};

// GET SINGLE BLOG
export const getSingleBlog = (
  slug
) => {
  return api.get(
    `/blogs/${slug}`
  );
};

// CREATE BLOG
export const createBlog = (
  formData
) => {
  return api.post(
    "/blogs/create",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

// UPDATE BLOG
export const updateBlog = (
  id,
  formData
) => {
  return api.put(
    `/blogs/${id}`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

// DELETE BLOG
export const deleteBlog = (
  id
) => {
  return api.delete(
    `/blogs/${id}`
  );
};

//
// ===============================
// CATEGORY APIs
// ===============================
//

// GET CATEGORIES
export const getCategories = () => {
  return api.get(
    "/categories"
  );
};

// CREATE CATEGORY
export const createCategory = (
  data
) => {
  return api.post(
    "/categories/create",
    data
  );
};

// UPDATE CATEGORY
export const updateCategory = (
  id,
  data
) => {
  return api.put(
    `/categories/${id}`,
    data
  );
};

// DELETE CATEGORY
export const deleteCategory = (
  id
) => {
  return api.delete(
    `/categories/${id}`
  );
};

//
// ===============================
// TAG APIs
// ===============================
//

// GET TAGS
export const getTags = () => {
  return api.get("/tags");
};

// CREATE TAG
export const createTag = (
  data
) => {
  return api.post(
    "/tags/create",
    data
  );
};

// UPDATE TAG
export const updateTag = (
  id,
  data
) => {
  return api.put(
    `/tags/${id}`,
    data
  );
};

// DELETE TAG
export const deleteTag = (
  id
) => {
  return api.delete(
    `/tags/${id}`
  );
};

export default api;