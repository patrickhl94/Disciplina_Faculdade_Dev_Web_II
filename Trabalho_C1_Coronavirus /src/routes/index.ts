import { Router } from 'express';

import CreateUserService from '../services/CreateUserServices';

const routes = Router();

routes.post('/users', async (request, response) => {
  const {
    name,
    email,
    cellphone,
    birth,
    weight,
    height,
    health_problems,
    state,
    city,
    neighborhood,
    street,
    address_number,
    zip_code,
  } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    cellphone,
    birth,
    weight,
    height,
    health_problems,
    state,
    city,
    neighborhood,
    street,
    address_number,
    zip_code,
  });

  return response.json(user);
});

export default routes;
