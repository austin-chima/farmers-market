
const API_URL = '/api/v1/products';

export const getAllProducts = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// API call to add a new product
export const addProduct = async (productData) => {
  try {
      const response = await fetch('/api/v1/products', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData), // Send the form data in the body
      });

      if (!response.ok) {
          throw new Error('Failed to add the product');
      }

      return await response.json(); // Return the newly added product
  } catch (error) {
      console.error('Error adding product:', error);
      throw error;
  }
};

// API call to update an existing product
export const updateProduct = async (productId, productData) => {
  try {
      const response = await fetch(`/api/v1/products/${productId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData), // Send the form data in the body
      });

      if (!response.ok) {
          throw new Error('Failed to update the product');
      }

      return await response.json(); // Return the updated product
  } catch (error) {
      console.error('Error updating product:', error);
      throw error;
  }
};

// API call to delete an existing product
export const deleteProduct = async (productId) => {
  try {
      const response = await fetch(`/api/v1/products/${productId}`, {
          method: 'DELETE',
      });

      if (!response.ok) {
          throw new Error('Failed to delete the product');
      }

      return await response.json(); // Return the response after deletion
  } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
  }
};

