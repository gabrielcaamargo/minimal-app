import { userStore } from '@/store/userStore';

export function useUserStore() {
  const token = userStore((state) => state.token);
  const setToken = userStore((state) => state.setToken);

  return { token, setToken };
}
