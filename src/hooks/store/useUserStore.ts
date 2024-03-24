import { userStore } from '@/store/userStore';

export function useUserStore() {
  const token = userStore((state) => state.token);
  const setToken = userStore((state) => state.setToken);
  const isFirstSignin = userStore((state) => state.isFirstSignin);
  const setIsFirstSignin = userStore((state) => state.setIsFirstSignin);

  return { token, setToken, isFirstSignin, setIsFirstSignin };
}
