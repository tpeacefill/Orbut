import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import PasswordInput from "../Components/PasswordInput";
import EmailInput from "../Components/EmailInput";
import NameInput from "../Components/NameInput";
import PhoneInput from "../Components/PhoneInput";
import { loginRequest, loginSuccess, loginFailure } from "../slices/authSlice";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [msisdn, setMsisdn] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormFilled =
    name.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormFilled) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(loginRequest());
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://test.quups.app/api/create-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, msisdn }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.message || "Failed to sign up");
      }

      const responseData = await response.json();
      dispatch(
        loginSuccess({ user: responseData.user, token: responseData.token })
      );
      navigate("/campaigns");
    } catch (error: any) {
      dispatch(loginFailure(error.message));
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-white overflow-hidden">
      <div className="flex flex-col lg-custom:flex-row w-full max-w-7xl gap-10 lg:gap-20">
        <div className="hidden lg-custom:flex lg-custom:w-6/12 w-full justify-center items-center p-4 lg-custom:p-0">
          <img
            src="/loginImage.jpg"
            className="w-full h-auto rounded-2xl object-cover"
            alt="signup"
          />
        </div>

        <div className="lg-custom:w-6/12 w-full flex flex-col justify-between items-center bg-white relative lg-custom:px-8 h-screen lg:mt-0 mt-8">
          <div className="w-full max-w-full flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between lg:mt-14">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-[28px] md:text-4xl text-[#02208D] font-krona flex-shrink-0">
                Orbùt
              </h1>
            </div>

            <div className="flex flex-col items-center lg:items-center lg:flex-row lg:gap-2 mt-4 lg:mt-0">
              <p className="text-base text-neutral-600 font-poppins text-center lg:text-left flex-shrink-0">
                Already have an account?
              </p>
              <button
                className="px-4 py-3 mt-4 lg:mt-0 text-sm md:text-base text-indigo-600 border border-violet-400 rounded-full font-poppins whitespace-nowrap flex-shrink-0"
                onClick={() => navigate("/login")}
              >
                Sign in now
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow w-full px-4">
            <div className="text-center w-full mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-black">
                Join Us
              </h2>
              <p className="mt-2 text-lg text-neutral-600 font-poppins">
                Sign up to start your journey
              </p>
            </div>

            <form
              className="w-full flex flex-col items-center px-4"
              onSubmit={handleSubmit}
            >
              <NameInput
                id="name"
                name="name"
                placeholder="Full Name"
                className="mt-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <EmailInput
                id="email"
                name="email"
                placeholder="Email address"
                className="mt-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
              />
              {error && (
                <p className="mt-4 text-red-600 font-poppins">{error}</p>
              )}
              <PasswordInput
                id="password"
                name="password"
                placeholder="Password"
                className="mt-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PhoneInput
                id="msisdn"
                name="msisdn"
                placeholder="Phone Number"
                className="mt-4"
                value={msisdn}
                onChange={(e) => setMsisdn(e.target.value)}
              />
              <LoginButton isActive={isFormFilled} type="submit">
                {isLoading ? "Signing Up..." : "Sign Up"}
              </LoginButton>
            </form>

            <p className="mt-6 text-base text-indigo-600 font-poppins px-4">
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
