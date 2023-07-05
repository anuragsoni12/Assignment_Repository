import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const callApiFn = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    callApiFn();
  }, []);
  console.log(data);

  const handleDeleteFn = (value) => {
    setData(data.filter((item) => item.id !== value));
  };

  const initialTaskData = {
    title: "",
    completed: "",
    id: "",
  };
  const [taskData, setTaskData] = useState(initialTaskData);

  const handleAddTaskFn = (e) => {
    const { name, value } = e.target;

    setTaskData({ ...taskData, [name]: value });
  };
  const handleSubmitFn = (e) => {
    e.preventDefault();
    let id = (taskData.id = 20000);
    let newObj = { ...taskData, id };
    setData({ ...data, newObj });
    setData([
      ...data,
      {
        ...taskData,
        id: data.length + 1,
      },
    ]);
  };
  const handleEditFn = (value) => {};
  return (
    <div>
      <h1>This is a Dashboard</h1>
      <div>
        <input
          type="text"
          name="taskName"
          value={taskData.title}
          placeholder="Add Task "
          onChange={handleAddTaskFn}
        />{" "}
        <b></b>
        <input
          type="text"
          name="taskStatus"
          value={taskData.taskStatus}
          placeholder="Complete Status"
          onChange={handleAddTaskFn}
        />{" "}
        <br />
        <button onClick={handleSubmitFn}>Add Task</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Complete</th>
            <th>Add</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>
                <input type="text" value={item.title} disabled={true} />
              </td>
              {/* <td>{item.title}</td> */}
              <td>{item.completed}</td>
              <td>
                <button>Add</button>
              </td>
              <td>
                <button onClick={() => handleDeleteFn(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEditFn(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
