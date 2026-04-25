import "./style.css";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

const taskList = document.querySelector("#task-list");
const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const statusText = document.querySelector("#status");

function renderTasks(tasks) {
  taskList.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = `${task.id}. ${task.title}${task.done ? " (done)" : ""}`;
    taskList.appendChild(li);
  }
}

async function loadTasks() {
  statusText.textContent = "Loading tasks...";

  try {
    const response = await fetch(`${API_BASE}/api/tasks`);

    if (!response.ok) {
      throw new Error("Could not fetch tasks");
    }

    const data = await response.json();
    renderTasks(data.tasks);
    statusText.textContent = `Loaded ${data.tasks.length} task(s).`;
  } catch (_error) {
    statusText.textContent = "API is not reachable. Start backend first.";
  }
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = taskTitleInput.value.trim();
  if (!title) return;

  statusText.textContent = "Saving task...";

  try {
    const response = await fetch(`${API_BASE}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });

    if (!response.ok) {
      throw new Error("Could not save task");
    }

    taskTitleInput.value = "";
    await loadTasks();
  } catch (_error) {
    statusText.textContent = "Failed to save task.";
  }
});

loadTasks();

