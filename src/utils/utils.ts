import { FormValues, TUser } from './types';

export const updateUserData = (values: TUser, userData: FormValues) => {
  const updatedData: FormValues = {};

  if (values.username !== userData.username) {
    updatedData['username'] = userData.username;
  }

  if (values.email !== userData.email) {
    updatedData['email'] = userData.email;
  }

  return updatedData;
};
