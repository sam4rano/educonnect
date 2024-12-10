// Request Interfaces
export interface CreateUserRequest {
	fullName: string;
	email: string;
	username: string;
	password: string;
	phone: string
  }
  
  export interface LoginRequest {
	logInID: string; // Assuming the email is used for login
	password: string;
  }

  export interface confirmEmail {
	email: string;
  }
  
  // Response Interfaces
  export interface LoginResponse {
	success: boolean;
	message: string;
	data: string; // This contains the session ID
  }
  
  export interface SignupResponse {
	success: boolean;
	message: string;
	data: {
	  fullName: string;
	  email: string;
	  username: string;
	  password: string; // This is a hashed password
	  creatAt: string; // Date in ISO string format
	  _id?: string;
	  __v?: number;
	};
  }
  
  export interface ErrorResponse {
	success: boolean;
	message: string;
	status: number; // This is only present when there's an error
  }
  