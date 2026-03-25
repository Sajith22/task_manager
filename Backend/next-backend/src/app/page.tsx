export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Task Manager API</h1>
        <p>Backend is running successfully!</p>
        <p>Available endpoints:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><code>GET /api/tasks</code> - Get all tasks</li>
          <li><code>POST /api/tasks</code> - Create a new task</li>
          <li><code>GET /api/tasks/:id</code> - Get a single task</li>
          <li><code>PUT /api/tasks/:id</code> - Update a task</li>
          <li><code>DELETE /api/tasks/:id</code> - Delete a task</li>
        </ul>
        <p style={{ marginTop: '20px' }}>
          <a href="/api/tasks" style={{ color: 'blue' }}>View all tasks →</a>
        </p>
      </div>
    </div>
  );
}