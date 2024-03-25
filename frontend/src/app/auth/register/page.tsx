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
            Already have an account?
            <Link href={"/auth/login/"} className="text-[#0D6EFD]">
              {" "}
              Sign In
            </Link>
          </p>
        </header>

        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="font-[600] text-[36px]">Create an Account</h1>

          <p className="text-[#676E7E] font-[500]">
            Create your GoPaddi account and get started in minutes.
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
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full h-[56px] rounded-[4px] border-[1px] border-[#98A2B3] p-[14px]"
                  placeholder="Enter your first name"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full h-[56px] rounded-[4px] border-[1px] border-[#98A2B3] p-[14px]"
                  placeholder="Enter your last name"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

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
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  className="w-full h-[56px] rounded-[4px] border-[1px] border-[#98A2B3] p-[14px]"
                  placeholder="Enter phone number"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="w-full h-[56px] rounded-[4px] border-[1px] border-[#98A2B3] p-[14px]"
                  placeholder="At least eight characters"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <label htmlFor="confirmPassword">Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full h-[56px] rounded-[4px] border-[1px] border-[#98A2B3] p-[14px]"
                  placeholder="Re-enter Password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div className="flex justify-start items-center gap-2">
              <input id="keep_me_logged_in" type="checkbox" required />
              <label htmlFor="keep_me_logged_in">
                By checking this box and clicking &quot;Sign Up&quot;, you
                acknowledge and agree to the{" "}
                <Link className="text-[#0D6EFD]" href={"t-and-c-with-policy"}>
                  Terms & Conditions, Privacy Policy,
                </Link>
                and{" "}
                <Link className="text-[#0D6EFD]" href={"cookie-policy"}>
                  Cookie Policy.
                </Link>
              </label>
            </div>

            <button
              disabled={!inputIsValid}
              className="w-full h-[56px] rounded-[4px] flex items-center justify-center gap-4 bg-[#0D6EFD] text-white disabled:bg-[#E7F0FF] disabled:text-[#98A2B3] disabled:cursor-not-allowed"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>

      <section className="w-1/2 h-full bg-[#E7F0FF] relative flex justify-start items-start">
        <Image
          src={"/board.png"}
          width={500}
          height={500}
          className="h-[80%] w-[80%] absolute right-52"
          alt="board"
        />

        <div className="flex flex-col items-start justify-start gap-6 w-[380px] absolute right-[29%] top-[33%] transform -rotate-[5.25deg]">
          <p className="text-[#0054E4] font-[500] text-[16px]">
            I was particularly impressed by the wide range of options available,
            whether I wanted to explore cities or relax on secluded beaches. The
            curated activity suggestions were spot-on and helped me discover
            hidden gems I wouldn&apos;t have found otherwise
          </p>
          <div className="flex items-center gap-4">
            <Image src={"/avatar.png"} width={50} height={50} alt="avatar" />
            <div className="flex flex-col justify-start items-start">
              <label className="text-[#0054E4] font-[600] text-[18px]">
                Peter Daniels
              </label>
              <label className="text-[#0054E4] font-[600] text-[16px]">
                Marketing Manager, One dot
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
