import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  birth: string;
  weight: number;
  height: number;
  health_problems: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  address_number: number;
  zip_code: string;
  is_health_area: boolean;
}

class UpdateUserServices {
  public async execute({
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
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found with ID');
    }

    user.name = name || user.name;
    user.address_number = address_number || user.address_number;
    user.birth = birth || user.birth;
    user.cellphone = cellphone || user.cellphone;
    user.city = city || user.city;
    user.email = email || user.email;
    user.health_problems = health_problems || user.health_problems;
    user.height = height || user.height;
    user.is_health_area = is_health_area || user.is_health_area;
    user.neighborhood = neighborhood || user.neighborhood;
    user.state = state || user.state;
    user.street = street || user.street;
    user.weight = weight || user.weight;
    user.zip_code = zip_code || user.zip_code;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserServices;
