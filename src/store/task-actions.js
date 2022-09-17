import { taskActions } from "./task-slice";

export const fetchTasksData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://631737bccb0d40bc414f3cfe.mockapi.io/todos"
      );
      if (!response) {
        throw new Error("Could not fetch tasks data");
      }
      const data = await response.json();
      if (data && data.length > 0) {
        return data;
      } else {
        return [];
      }
    };

    try {
      const tasksData = await fetchData();
      dispatch(taskActions.replaceFetchedData(tasksData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTask = (content) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://631737bccb0d40bc414f3cfe.mockapi.io/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(content),
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong ");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTaskData = (content, id) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://631737bccb0d40bc414f3cfe.mockapi.io/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(content),
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong ");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (id) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://631737bccb0d40bc414f3cfe.mockapi.io/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong ");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
