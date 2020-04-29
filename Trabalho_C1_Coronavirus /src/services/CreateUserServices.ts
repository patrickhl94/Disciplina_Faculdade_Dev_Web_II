import { getRepository } from 'typeorm';
import { parseISO, differenceInYears, isValid } from 'date-fns';

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
    const usersRepository = getRepository(User);

    let group_of_risk = false;

    const parseDate = parseISO(birth);

    if (!isValid(parseDate)) {
      throw new AppError('Date invalid');
    }

    const age = differenceInYears(new Date(), parseDate);

    const imc = weight / height ** 2;

    if (
      health_problems.toUpperCase() === 'DOENÇAS RESPIRATORIAS' ||
      health_problems.toUpperCase() === 'INSUFICIENCIA RENAL' ||
      health_problems.toUpperCase() === 'DOENÇAS CARDIOVASCULARES' ||
      health_problems.toUpperCase() === 'DIABETES' ||
      health_problems.toUpperCase() === 'HIPERTENSAO' ||
      imc >= 30 ||
      age > 60
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
  }
}

export default CreateUserService;
