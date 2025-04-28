import { useEffect, useState } from 'react';
import {
    Container, Typography, TextField, Button, Paper, Stack,
    Table, TableHead, TableRow, TableCell, TableBody, Select, MenuItem
} from '@mui/material';
import { getTasks, createTask, updateTask, deleteTask } from '../lib/api';
import { AnyMxRecord } from 'node:dns';
type Task = {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
};
const tableHeaders:any = [
    { id: 1, label: 'TITLE' },
    { id: 2, label: 'DESCRIPTION' },
    { id: 3, label: 'STATUS' },
    { id: 4, label: 'CREATED' },
    { id: 5, label: 'UPDATED' },
    { id: 6, label: 'ACTIONS' }
]
export default function Main() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [form, setForm] = useState({
        title: '',
        description: '',
        status: 'Pending',
    });
    const [editId, setEditId] = useState<number | null>(null);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleSubmit = async () => {
        const now = new Date().toISOString();
        const taskData = {
            ...form,
            createdAt: now,
            updatedAt: now,
        };

        if (editId) {
            await updateTask(editId, { ...form, updatedAt: now });
            setEditId(null);
        } else {
            await createTask(taskData);
        }
        setForm({ title: '', description: '', status: 'Pending' });
        loadTasks();
    };

    const handleEdit = (task: Task) => {
        setEditId(task.id);
        setForm({
            title: task.title,
            description: task.description,
            status: task.status,
        });
    };

    const handleDelete = async (id: number) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom style={{textAlign: 'center', backgroundColor: '#A9A9A9', padding: '10px', borderRadius: '5px',color: 'white'}}>
                CRUD OPERATIONS
            </Typography>

            <Paper sx={{ p: 3, mb: 4 }}>
                <Stack spacing={2}>
                    <TextField
                        label="Title"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        fullWidth
                        multiline
                        rows={3}
                    />
                    <Select
                        value={form.status}
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                        fullWidth
                    >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                    <Button variant="contained" onClick={handleSubmit} style={{backgroundColor: '#4682B4', color: 'white' , width: '20%'}}>
                        {editId ? 'Update Task' : 'Create Task'}
                    </Button>
                </Stack>
            </Paper>

            <Table component={Paper} >
                <TableHead style={{backgroundColor: '#B0C4DE', color: 'yellow'}}>
                    <TableRow>
                        {tableHeaders.map((header:any) => (<TableCell key={header.id} style={{color:"#FFF8DC"}}>{header.label}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.title}</TableCell>
                            <TableCell>{task.description}</TableCell>
                            <TableCell>{task.status}</TableCell>
                            <TableCell>{new Date(task.createdAt).toLocaleString().split(',')[0]}</TableCell>
                            <TableCell>{new Date(task.updatedAt).toLocaleString().split(',')[0]}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(task)} style={{color:"red",backgroundColor: '#556B2F'}}>Edit</Button>
                                <Button onClick={() => handleDelete(task.id)} style={{color:"black",backgroundColor: '#2F4F4F'}}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </Container >
    );
}