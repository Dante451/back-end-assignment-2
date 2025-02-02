import request from 'supertest';
import app from '../../app'; // Assuming you have an app.js that sets up your Express app

describe('Employee API', () => {
  let employeeId;

  it('should create a new employee', async () => {
    const res = await request(app)
      .post('/api/v1/employees')
      .send({
        name: 'Alice Johnson',
        position: 'Branch Manager',
        department: 'Management',
        email: 'alice.johnson@pixell-river.com',
        phone: '604-555-0148',
        branchId: 1
      });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Alice Johnson');
    employeeId = res.body.id; // Save the ID for later tests
  });

  it('should get all employees', async () => {
    const res = await request(app).get('/api/v1/employees');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get an employee by ID', async () => {
    const res = await request(app).get(`/api/v1/employees/${employeeId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(employeeId);
  });

  it('should update an employee', async () => {
    const res = await request(app)
      .put(`/api/v1/employees/${employeeId}`)
      .send({ position: 'Senior Branch Manager' });
    expect(res.status).toBe(200);
    expect(res.body.position).toBe('Senior Branch Manager');
  });

  it('should delete an employee', async () => {
    const res = await request(app).delete(`/api/v1/employees/${employeeId}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Employee deleted successfully');
  });
});
