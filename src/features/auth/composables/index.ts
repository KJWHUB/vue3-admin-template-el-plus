export const useAuth = () => {
  const { authModel } = useAuthModel()
  const { login, logout, register } = authModel
  const { loginForm, registerForm } = useAuthForms()
  return {
    login,
    logout,
    register,
    loginForm,
    registerForm
  }
}
