import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { User, UserLoginForm, UserRegistrationForm } from '../types/userType';

type AuthResponse = {
  user: User;
  accessToken: string;
};

class AuthApi {
  static registration = async (data: UserRegistrationForm): Promise<AuthResponse> => {
    try {
      const response: AxiosResponse<AuthResponse> = await axiosInstance.post(
        '/auth/registration',
        data,
      );

     console.log(response)

      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  static authorization = async (data: UserLoginForm): Promise<AuthResponse> => {
    try {
      const response: AxiosResponse<AuthResponse> = await axiosInstance.post(
        '/auth/authorization',
        data,
      );

      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  static logout = async (): Promise<{ message: string }> => {
    const response: AxiosResponse<{ message: string }> = await axiosInstance.get('/auth/logout');
    return response.data;
  };

  static tokensRefresh = async (): Promise<AuthResponse> => {
    const response: AxiosResponse<AuthResponse> = await axiosInstance.get('/tokens/refresh');
    return response.data;
  };
}

export default AuthApi;
