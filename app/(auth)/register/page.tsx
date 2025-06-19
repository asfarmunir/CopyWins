"use client";
import Image from "next/image";
import { createRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeClosed, Loader } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";

import { FaArrowLeft } from "react-icons/fa6";

import bg1 from "../../../public/authBg1.svg";
import bg2 from "../../../public/authBg2.svg";
import bg3 from "../../../public/authbg3.svg";
import { carouselItems } from "../login/page";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password should be atleast 6 characters",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password should be atleast 6 characters",
  }),
});

const Register = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [AuthError, setAuthError] = useState("");
  interface value {
    email: string;
    password: string;
  }
  const router = useRouter();
  async function onSubmit(values: value) {
    setIsLoading(true);

    setIsLoading(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-svh w-full  items-center justify-center gap-2 overflow-hidden p-4 md:p-6 ">
      <div className=" absolute   top-6 xl:top-8 left-8">
        <Image
          src={"/logo.svg"}
          alt="logo"
          className="mb-4 mx-auto dark:hidden w-[95px] md:w-[140px] "
          width={140}
          height={140}
        />
        <Image
          src={"/logo-dark.svg"}
          alt="logo"
          className="mb-4 mx-auto dark:block hidden w-[95px] md:w-[140px] "
          width={140}
          height={140}
        />
      </div>
      <div className="relative flex flex-1  w-full flex-col items-center justify-center   p-2 md:p-8 md:py-8 2xl:p-10">
        <div className=" w-full md:w-fit">
          <Link
            href={"/login"}
            className=" w-full flex items-center justify-start mb-4"
          >
            <p className=" bg-card p-2.5 rounded-full">
              <FaArrowLeft className="text-lg" />
            </p>
            <h1 className="ml-3.5 text-lg font-semibold text-[#3E4347] dark:text-white">
              Back
            </h1>
          </Link>
          <div className="max-h-[90svh] w-full  sm:w-fit  overflow-y-auto scroll-smooth rounded-[24px] bg-card p-6 xl:p-8  shadow-sm [scrollbar-width:none] ">
            <h2 className=" text-xl font-bold text-vintage-50 xl:text-2xl">
              Create an account
            </h2>
            <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              Sign up to start copying the best.
            </p>

            <Form {...form}>
              <div
                id="first"
                className="mt-4 flex w-full flex-col items-center justify-center gap-6 md:gap-4"
              >
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-4 w-full">
                        <FormLabel className=" block w-fit text-[0.7rem]  font-semibold 2xl:text-[0.85rem]">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            className="mr-0 text-xs md:text-sm  w-full rounded-[10px] border bg-card-foreground  border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px]  px-3 py-3 leading-tight text-[#3E4347] "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="mb-4 w-full">
                        <FormLabel className=" block w-fit text-[0.7rem]  font-semibold 2xl:text-[0.85rem]">
                          Password
                        </FormLabel>
                        <FormControl className=" ">
                          <div className=" relative">
                            <Input
                              placeholder="Enter your password"
                              type={showPass ? "text" : "password"}
                              {...field}
                              className="mr-0 text-xs md:text-sm  w-full rounded-[10px] border bg-card-foreground  border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px]  px-3 py-3 leading-tight text-[#3E4347] "
                            />
                            <button
                              type="button"
                              onClick={() => setShowPass(!showPass)}
                              className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                              {!showPass ? (
                                <Eye className="h-5 w-5 text-gray-400" />
                              ) : (
                                <EyeClosed className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="mb-4 w-full">
                        <FormLabel className=" block w-fit text-[0.7rem]  font-semibold 2xl:text-[0.85rem]">
                          Confirm Password
                        </FormLabel>
                        <FormControl className=" ">
                          <div className=" relative">
                            <Input
                              placeholder="Confirm your password"
                              type={showPass ? "text" : "password"}
                              {...field}
                              className="mr-0 text-xs md:text-sm  w-full rounded-[10px] border bg-card-foreground  border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px]  px-3 py-3 leading-tight text-[#3E4347] "
                            />
                            <button
                              type="button"
                              onClick={() => setShowPass(!showPass)}
                              className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                              {!showPass ? (
                                <Eye className="h-5 w-5 text-gray-400" />
                              ) : (
                                <EyeClosed className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox className=" rounded-full" id="remember-me" />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block font-normal cursor-pointer  text-sm "
                      >
                        I agree to the{" "}
                        <span className="underline">terms and conditions</span>
                      </label>
                    </div>
                  </div>

                  {AuthError && (
                    <p className="mb-2 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#F74418]/20 bg-[#F74418]/15 px-3 py-2 text-xs font-medium leading-none text-[#F74418] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 2xl:text-sm">
                      <span className="text-[#F74418]">{AuthError}</span>
                    </p>
                  )}

                  <div className="mt-5 flex w-full flex-col items-center justify-center">
                    <Button
                      type="submit"
                      className="focus:shadow-outline mb-4 py-3.5 w-full rounded-full border  font-normal text-white focus:outline-none  "
                    >
                      {isLoading ? (
                        <Loader className="h-5 w-5 animate-spin text-white" />
                      ) : (
                        <span className="capitalize font-semibold">
                          Sign Up
                        </span>
                      )}
                    </Button>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-semibold text-[#3E4347] dark:text-white/80">
                        Already have an account?{" "}
                      </h2>
                      <Link
                        href={"/login"}
                        className="text-sm font-bold text-vintage-50"
                      >
                        <span className="capitalize text-primary">Login</span>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div
        className="relative hidden h-full flex-1 w-full flex-col items-center justify-center overflow-hidden rounded-xl md:flex"
        style={{
          backgroundImage: `url('/mainbg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex  flex-col"
          >
            <Image
              src={`/${currentSlide + 1}.svg`}
              alt={carouselItems[currentSlide].alt}
              width={500}
              height={500}
              className={`
                      w-[550px] h-[550px] 2xl:h-[700px] 2xl:w-[700px] 3xl:w-[830px] 3xl:h-[830px] 
                      ${currentSlide === 0 ? "mb-32 2xl:mb-40" : "mb-24"}
                      `}
              priority
            />
            <div className="absolute  bottom-16 2xl:bottom-28 left-0 right-0 flex flex-col items-center text-center gap-2 px-4">
              {carouselItems[currentSlide].text}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel indicators */}
        <div className="absolute bottom-10 2xl:bottom-20 left-0 right-0 flex justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
