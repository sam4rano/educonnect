import { CreateUserRequest } from '@/app/types/types';
import { api } from "@/app/api/api";
import { apis } from '@/lib/api-client';




export const useLogin = () => {
	const login = async ({email, password}: CreateUserRequest) => {
		try {
			const response = await apis.post(`${api.auth.login}`, {
				email,
				password,
			  });
			return response.data
		} catch (error) {
			console.error('Login error:', error);
      throw error;
		}
	}
	return {login}

}
