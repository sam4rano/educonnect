const url = "https://educonnect-c7x82qlv.b4a.run";

export const api = {
  auth: {
    login: `${url}/api/v1/login`,
    register: `${url}/api/v1/create-user`,
    resetPassword: `${url}/api/v1/reset-password`,
    verify: `${url}/api/v1/verifySession`,
    loginSession: `${url}/api/v1/login-session`,
    resetPasswordToken: `${url}/api/v1/forget-password-token`,

    admin: {
      login: `${url}/Admin/login`,
	  loginSession:`${url}/Admin/login-session`,
      register: `${url}/Admin/sign-up`,
      forgotPassword: `${url}/Admin/forget-password`,
      resetPassword: `${url}/Admin/reset-password`,
    },
  },
  answers: {
    allAnswers: `${url}/answer/fetch-all`,
    singleAnswer: `${url}/answer/fetch-single`,
    createQuestion: `${url}/answer/create-question`,
    answerUpdate: `${url}/answer/update-answer`,
    deleteAnswer: `${url}/answer/delete-answer`,
  },
  question: {
    createQuestion: `${url}/question/create-question`,
    allQuestion: `${url}/question/all-question`,
    singleQuestion: `${url}/question/single-question`,
    updatedQuestion: `${url}/question/updated-question`,
    deleteQuestion: `${url}/question/delete-question`,
  },
  profile: {
    createProfile: `${url}/profile/create-profile`,
    allProfile: `${url}/profile/fetch-all-profile`,
    updateProfile: `${url}/profile/update-profile`,
    deleteProfile: `${url}/profile/delete-profile`,
  },
};
