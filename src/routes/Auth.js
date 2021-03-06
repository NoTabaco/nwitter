import AuthForm from "components/AuthForm";
import { firebaseInstance, authService } from "fbase";

const Auth = () => {
  const onSocialClick = async (event) => {
    try {
      const {
        target: { name },
      } = event;
      let provider;
      if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === "github") {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }
      await authService.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
