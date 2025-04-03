export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectUsername = state => state.auth.user.username;
export function selectBalance(state) {
  return state.auth.user.balance;
}
