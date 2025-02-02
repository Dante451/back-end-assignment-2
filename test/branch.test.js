import request from 'supertest';
import app from '../../app'; // Assuming app.js sets up Express

describe('Branch API', () => {
  let branchId;

  it('should create a new branch', async () => {
    const res = await request(app)
      .post('/api/v1/branches')
      .send({
        name: 'Vancouver Branch',
        address: '1300 Burrard St, Vancouver, BC, V6Z 2C7',
        phone: '604-456-0022'
      });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Vancouver Branch');
    branchId = res.body.id; // Save ID for future tests
  });

  it('should get all branches', async () => {
    const res = await request(app).get('/api/v1/branches');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a branch by ID', async () => {
    const res = await request(app).get(`/api/v1/branches/${branchId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(branchId);
  });

  it('should update a branch', async () => {
    const res = await request(app)
      .put(`/api/v1/branches/${branchId}`)
      .send({ phone: '604-456-1234' });
    expect(res.status).toBe(200);
    expect(res.body.phone).toBe('604-456-1234');
  });

  it('should delete a branch', async () => {
    const res = await request(app).delete(`/api/v1/branches/${branchId}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Branch deleted successfully');
  });
});
