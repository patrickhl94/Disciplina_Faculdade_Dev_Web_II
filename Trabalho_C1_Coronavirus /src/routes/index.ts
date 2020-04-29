import { Router } from 'express';
import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import CreateUserService from '../services/CreateUserServices';
import User from '../models/User';
import AppError from '../errors/AppError';

const routes = Router();

routes.post('/users', async (request, response) => {
  const createUser = new CreateUserService();

  const user = await createUser.execute(request.body);

  return response.json(user);
});

routes.get('/users', async (request, response) => {
  const userReposiory = getRepository(User);

  const usersAndCount = await userReposiory.findAndCount();

  return response.json(usersAndCount);
});

routes.get('/users/:id', async (request, response) => {
  const { id } = request.params;
  const userReposiory = getRepository(User);

  if (!isUuid(id)) {
    throw new AppError('Format ID invalid', 401);
  }

  const user = await userReposiory.findOne(id);

  if (!user) {
    throw new AppError('Not found User with the ID');
  }

  return response.json(user);
});

export default routes;
