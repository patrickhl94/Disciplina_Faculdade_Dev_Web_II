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
  is_health_area: boolean;
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
    is_health_area,
  }: Request): Promise<User> {
    if (
      !name ||
      !cellphone ||
      !birth ||
      !weight ||
      !height ||
      !state ||
      !city ||
      !neighborhood ||
      !street ||
      !address_number ||
      !zip_code
    ) {
      throw new AppError('Empty mandatory data');
    }

    const usersRepository = getRepository(User);

    let group_of_risk = false;

    const parseDate = parseISO(birth);

    if (!isValid(parseDate)) {
      throw new AppError('Date invalid');
    }

    const age = differenceInYears(new Date(), parseDate);

    const imc = weight / height ** 2;

    const arrayHeaalthProblems = health_problems.split(', ');

    arrayHeaalthProblems.map(disease => {
      if (
        disease.toUpperCase() === 'DOENÇAS RESPIRATORIAS' ||
        disease.toUpperCase() === 'INSUFICIENCIA RENAL' ||
        disease.toUpperCase() === 'DOENÇAS CARDIOVASCULARES' ||
        disease.toUpperCase() === 'DIABETES' ||
        disease.toUpperCase() === 'HIPERTENSAO'
      ) {
        group_of_risk = true;
      }
      return '';
    });

    if (imc >= 30 || age > 60) {
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
      is_health_area,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
