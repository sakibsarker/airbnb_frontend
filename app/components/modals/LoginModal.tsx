"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import userLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import apiService from "../services/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleLogin } from "@/app/lib/action";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = userLoginModal();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    const formData = {
      // name: "sakib",
      email: email,
      password: password,
    };
    const response = await apiService.postWithoutToken(
      "/api/auth/login/",
      JSON.stringify(formData)
    );
    if (response.access) {
      toast.success("Login successfull");
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
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
      <form action={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter e-mail address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
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
        <CustomButton label="Submit" onClick={submitLogin} />
      </form>
      <ToastContainer />
    </>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      lable="Log in"
      content={content}
    />
  );
};

export default LoginModal;
