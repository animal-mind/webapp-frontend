import { pick } from 'lodash';

export const transformTrainerData = user => {
  const defaultData = {
    id: null,
    email: '',
    slug: '',
    name: '',
    profileImage: null,
    title: '',
    description: '',
    careerExperience: '',
    license: '',
    areas: [],
  };

  const userBase = pick(user, ['id', 'email', 'slug', 'name']);
  const userValues = pick(user.values, ['profileImage']);
  const trainerValues = pick(user.trainer_values, [
    'title',
    'description',
    'careerExperience',
    'license',
    'areas',
  ]);

  return {
    ...defaultData,
    ...userBase,
    ...userValues,
    ...trainerValues,
  };
};
