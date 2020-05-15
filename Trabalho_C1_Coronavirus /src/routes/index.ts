/* eslint-disable no-unused-expressions */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import AppError from '../errors/AppError';
import User from '../models/User';

import UpdateUserService from '../services/UpdateUserServices';
import CreateUserService from '../services/CreateUserServices';

const routes = Router();

routes.post('/users', async (request, response) => {
  const createUser = new CreateUserService();

  const user = await createUser.execute(request.body);

  return response.status(201).json(user);
});

routes.get('/users', async (request, response) => {
  const userReposiory = getRepository(User);
  const { page = 1 } = request.query;

  const usersAndCount = await userReposiory.findAndCount({
    take: 5,
    skip: (Number(page) - 1) * 5,
  });

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

routes.delete('/users/:id', async (request, response) => {
  const { id } = request.params;

  if (!isUuid(id)) {
    throw new AppError('Format ID invalid', 401);
  }

  const userRepository = getRepository(User);

  const { affected } = await userRepository.delete({ id });

  if (!affected) {
    throw new AppError('Not found User with the ID');
  }

  return response.json({ message: 'User deleted with success' });
});

routes.patch('/users/:id', async (request, response) => {
  const { id } = request.params;
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
    is_health_area,
  } = request.body;

  if (!isUuid(id)) {
    throw new AppError('Format ID invalid', 401);
  }

  const updateUserService = new UpdateUserService();

  const user = await updateUserService.execute({
    id,
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
    is_health_area,
  });

  return response.json(user);
});

routes.get('/filters', async (request, response) => {
  const {
    city,
    state,
    neighborhood,
    street,
    is_health_area,
    group_of_risk,
  } = request.query;
  const userReposiory = getRepository(User);

  let where = {};

  city ? (where = { city }) : {};
  state ? (where = { state }) : {};
  neighborhood ? (where = { neighborhood }) : {};
  street ? (where = { street }) : {};
  is_health_area ? (where = { is_health_area }) : {};
  group_of_risk ? (where = { group_of_risk }) : {};

  const users = await userReposiory.find({
    where,
  });

  return response.json(users);
});
export default routes;
