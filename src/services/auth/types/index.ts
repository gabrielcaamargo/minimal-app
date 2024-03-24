type TSigninDto = {
  email: string
  password: string
}

type TSignupDto = {
  name: string
  email: string
  password: string
}

type TSigninResponse = {
  accessToken: string
  descriptin: null,
  email: string
  id: string
  name: string
  firstSignin: boolean
  profilePicture: null
  updatedAt: Date
  createdAt: Date
}

export { TSigninDto, TSigninResponse, TSignupDto };
