import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  console.log('update', prop, value);
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
