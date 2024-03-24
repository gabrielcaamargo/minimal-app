type TUserStore = {
  token: string | undefined
  setToken: (token: string) => void
  isFirstSignin: boolean
  setIsFirstSignin: (isFirstSignin: boolean) => void
}

export { TUserStore };
