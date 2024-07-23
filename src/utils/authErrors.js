export const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-credential":
      return "Invalid email or password. Please check your login details and try again.";
    case "auth/user-not-found":
      return "No user found with this email. Please check your email or sign up.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/email-already-in-use":
      return "This email is already in use. Please use a different email or sign in.";
    case "auth/weak-password":
      return "The password is too weak. Please use a stronger password.";

    default:
      return "An error occurred. Please try again.";
  }
};
