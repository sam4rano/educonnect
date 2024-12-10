// import { useLogin } from "@/app/services/auth";
// import { CreateUserRequest } from "@/app/types/types";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useLoginMutation = () => {
// 	const { login } = useLogin(); // Destructure the login function
// 	const queryClient = useQueryClient();
  
// 	const { mutateAsync, isPending, isError, isSuccess, error } = useMutation(
// 	  async ({ email, password }: CreateUserRequest) => {
// 		return login({ email, password });
// 	  },
// 	  {
// 		onSuccess: () => {
// 		  queryClient.invalidateQueries('login'); // Invalidate user queries
// 		},
// 		onError: (error: any) => {
// 		  console.error('Login error:', error);
// 		},
// 	  }
// 	);
  
// 	return { mutateAsync, isPending, isError, isSuccess, error };
//   };