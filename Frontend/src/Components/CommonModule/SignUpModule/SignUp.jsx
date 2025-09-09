import { useEffect } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set background only for this page
    document.body.style.backgroundImage = "url('/BACKGROUNDSIGNUP.svg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    // Clean up when leaving the page
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundSize = "";
    };
  }, []);

  const handleGoogleSignIn = () => {
    navigate("/"); // redirect to Home
  };

  return (
    <div className={styles.App}>
      <h2 className={styles.welcome}>Welcome to</h2>
      <h1 className={styles.brand}>WallGodds</h1>
      <button className={styles['google-btn']} onClick={handleGoogleSignIn}>
        <img
          className={styles['google-icon']}
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
        />
        Continue with Google
      </button>
    </div>
  );
};

export default SignUp;
