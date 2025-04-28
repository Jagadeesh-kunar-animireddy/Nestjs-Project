const API_BASE = 'http://localhost:3000';
 
export const getTasks = async () => {
  const res = await fetch(`${API_BASE}/task`);
  return res.json();
};
 
export const createTask = async (task: any) => {
  const res = await fetch(`${API_BASE}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return res.json();
};
 
export const updateTask = async (id: number, task: any) => {
  const res = await fetch(`${API_BASE}/task/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return res.json();
};
 
export const deleteTask = async (id: number) => {
  await fetch(`${API_BASE}/task/${id}`, { method: 'DELETE' });
};