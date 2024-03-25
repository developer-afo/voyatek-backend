"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [inputIsValid, setInputIsValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (email?.length > 0 && password?.length > 0) setInputIsValid(true);
    else setInputIsValid(false);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (email?.length > 0 && password?.length > 0) setInputIsValid(true);
    else setInputIsValid(false);
  };

  return (
    <div className="w-full h-full flex">
      <section className="w-1/2 h-full px-20 py-10 flex flex-col gap-20">
        <header className="flex items-center justify-between">
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />

          <p className="text-[#676E7E]">
            Are you new to GoPaddi?
            <Link href={"/auth/register/"} className="text-[#0D6EFD]">
              {" "}
              Sign Up
            </Link>
          </p>
        </header>

        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="font-[600] text-[36px]">
            Log in. <br /> Welcome back!
          </h1>

          <p className="text-[#676E7E] font-[500]">
            Ready to take control? Sign in to your GoPaddi account.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <button className="w-full h-[56px] rounded-[4px] flex items-center justify-center gap-4 border-[1px] border-[#98A2B3]">
            <Image
              src={"/google-logo.svg"}
              width={20}
              height={20}
              alt="google"
            />
            <span>Login with Google</span>
          </button>

          <label className="mx-auto text-[#676E7E]">
            or continue with email
          </label>

          <form className="space-y-6">
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full h-[56px] rounded-[4px] border-[1px] border-[#98A2B3] p-[14px]"
                placeholder="your@email.com"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-4 w-full">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full h-[56px] rounded-[4px] border-[1px] border-[#98A2B3] p-[14px]"
                placeholder="Enter your password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-2">
                <input id="keep_me_logged_in" type="checkbox" required />
                <label htmlFor="keep_me_logged_in">Keep me logged in</label>
              </div>

              <Link
                href={"/auth/forgot-password/"}
                className="text-[#0D6EFD] underline w-fit"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              disabled={!inputIsValid}
              className="w-full h-[56px] rounded-[4px] flex items-center justify-center gap-4 bg-[#0D6EFD] text-white disabled:bg-[#E7F0FF] disabled:text-[#98A2B3] disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>
        </div>
      </section>

      <section className="w-1/2 h-full bg-[#0054E4] relative grid place-items-center place-content-center">
        <Image
          src={"/clouds.png"}
          width={500}
          height={500}
          className="h-[500px] w-[80%] absolute top-5 right-[-10px] z-10"
          alt="clouds"
        />

        <Image
          src={"/buildings.png"}
          width={500}
          height={500}
          className="h-[500px] w-[100%] absolute bottom-[5%] z-10"
          alt="clouds"
        />

        <Image
          src={"/water.png"}
          width={500}
          height={500}
          className="h-[100px] w-[100%] absolute bottom-0 z-10"
          alt="clouds"
        />

        <div className="z-40 px-40">
          <h4 className="text-white text-[40px] font-[700] leading-[48px]">
            Welcome to Gopaddi !!
          </h4>
          <p className="text-white text-[20px] leading-[28px] font-[400]">
            Welcome to Gopaddi, your one-stop shop for unforgettable travel
            experiences! Dive into curated getaways, explore hidden gems, and
            unlock exclusive deals. Let&apos;s turn your travel dreams into
            memories that last a lifetime. Explore with us!{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
