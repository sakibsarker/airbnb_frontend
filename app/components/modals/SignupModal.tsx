"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import userSingupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "../services/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleLogin } from "@/app/lib/action";

const SignupModal = () => {
  const router = useRouter();
  const sinupModal = userSingupModal();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const submitSignup = async () => {
    const formData = {
      // name: "sakib",
      email: email,
      password1: password1,
      password2: password2,
    };
    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );
    if (response.access) {
      toast.success("Singup successfull");
      handleLogin(response.user.pk, response.access, response.refresh);
      sinupModal.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  };
  const content = (
    <>
      <form action={submitSignup} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter e-mail address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Repeat password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="Signup" onClick={submitSignup} />
      </form>
      <ToastContainer />
    </>
  );
  return (
    <Modal
      isOpen={sinupModal.isOpen}
      close={sinupModal.close}
      lable="Sign up"
      content={content}
    />
  );
};

export default SignupModal;
