import chai from 'chai';
import supertest from 'supertest';
import app from '../app.js'; 

const { expect } = chai;
const request = supertest(app);

describe('Adoptions Routes', () => {
  // Test: Obtener todas las adopciones
  it('GET /api/adoptions debería retornar todas las adopciones', async () => {
    const res = await request.get('/api/adoptions');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array'); 
  });

  // Test: Obtener una adopción específica por ID
  it('GET /api/adoptions/:aid debería retornar una adopción específica', async () => {
    const aid = 'adoptionIdValido'; // Reemplaza con un ID válido de prueba
    const res = await request.get(`/api/adoptions/${aid}`);
    expect(res.status).to.equal(200); // Cambia según tu controlador
    expect(res.body).to.have.property('id').eql(aid); // Asegúrate de que la propiedad existe
  });

  // Test: Crear una adopción
  it('POST /api/adoptions/:uid/:pid debería crear una nueva adopción', async () => {
    const uid = 'validUserId'; // Cambia por un ID válido
    const pid = 'validPetId'; // Cambia por un ID válido
    const res = await request.post(`/api/adoptions/${uid}/${pid}`);
    expect(res.status).to.equal(201); // Cambia según el código de estado esperado
    expect(res.body).to.have.property('success').eql(true);
    expect(res.body).to.have.property('adoption'); // Ajusta según la estructura de tu respuesta
  });
});
