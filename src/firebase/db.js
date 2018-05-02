import { db } from './firebase';

export const getAllUsers = () =>
  db.ref('users').once('value');

export const registerUser = (userInformation) =>
  db.ref('users').push(userInformation);
