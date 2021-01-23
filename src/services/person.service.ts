import axios from 'axios';
import { messages } from 'common/constants';
import { BASE_URL } from 'common/constants/apiUrls';
import { IPersonDataResult } from 'common/types';

export const getPersonData = async (data: any) => {
  const url = `${BASE_URL}/obtenerdatospersona`;

  try {
    const response = await axios.post<IPersonDataResult>(url, data);
    return response.data;
  } catch (error) {
    throw new Error(messages.GENERAL_ERROR);
  }
};
