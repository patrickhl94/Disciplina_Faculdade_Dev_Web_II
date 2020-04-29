import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
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
}

class CreateUserService {
  public async execute({
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
  }: Request): Promise<User> {
    try {
      const usersRepository = getRepository(User);

      let group_of_risk = false;
      const imc = weight / height ** 2;
      // SE DER TEMPO USAR A BIBLIOTECA date-fns PARA CALCULAR A IDADE COM MAIS PRECISÃO
      const idade =
        Number(new Date().getFullYear()) - Number(birth.substring(0, 4));

      if (
        health_problems.toUpperCase() === 'DOENÇAS RESPIRATÓRIAS' ||
        health_problems.toUpperCase() === 'INSUFICIÊNCIA RENAL' ||
        health_problems.toUpperCase() === 'DOENÇAS CARDIOVASCULARES' ||
        health_problems.toUpperCase() === 'DIABETES' ||
        health_problems.toUpperCase() === 'HIPERTENSÃO' ||
        imc >= 30 ||
        idade > 60
      ) {
        group_of_risk = true;
      }

      const user = usersRepository.create({
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
        group_of_risk,
      });

      await usersRepository.save(user);

      return user;
    } catch (error) {
      throw new AppError('Error when registering the user');
    }
  }
}

export default CreateUserService;
