const env = "development";
let baseUrl = "";

if (env === "production") {
  baseUrl = "https://expense-tracker-backend-0ijd.onrender.com";
} else {
  baseUrl = "http://localhost:8000";
}

export async function registerUser(userData) {
  try {
    const response = await fetch(baseUrl + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function loginUser(userData) {
  try {
    const response = await fetch(baseUrl + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function expenseData(token) {
  try {
    const response = await fetch(baseUrl + "/data/expenses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function addExpense(token, expense) {
  try {
    const response = await fetch(baseUrl + "/data/add/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(expense),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteExpense(token, expenseId) {
  try {
    const response = await fetch(
      baseUrl + "/data/delete/expenses/" + expenseId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getTotalAmount(token, userId, category) {
  try {
    const response = await fetch(
      baseUrl + "/data/total/" + userId + "/" + category,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getChartData(token) {
  try {
    const response = await fetch(baseUrl + "/data/chartdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
