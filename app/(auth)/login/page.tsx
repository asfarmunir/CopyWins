"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
import bg1 from "../../../public/authBg1.svg";
import bg2 from "../../../public/authBg2.svg";
import bg3 from "../../../public/authbg3.svg";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters",
  }),
});

export const carouselItems = [
  {
    src: bg1,
    alt: "signup1",
    text: (
      <>
        <h3 className="text-xl 2xl:text-2xl font-bold text-white">
          Introducing CopyWins.
        </h3>
        <p className="text-sm 2xl:text-base font-semibold text-white">
          Start turning your skills into income today.
        </p>
        <p className="text-sm 2xl:text-base font-semibold text-[#55FEFF]">
          Providers earn $6,500 per month on average.
        </p>
      </>
    ),
  },
  {
    src: bg3,
    alt: "signup3",
    text: (
      <>
        <h3 className="text-xl 2xl:text-2xl font-bold text-white">
          Copy The Best Trading Signals
        </h3>
        <p className="text-sm 2xl:text-base font-semibold text-white">
          <span className="text-[#55FEFF]">
            Copy the best Trading signals from{" "}
          </span>
          top-performing traders and take <br />
          your trading to the next level.
        </p>
      </>
    ),
  },
  {
    src: bg2,
    alt: "signup2",
    text: (
      <>
        <h3 className="text-xl 2xl:text-2xl font-bold text-white">
          Sport Pick Signals
        </h3>
        <p className="text-sm 2xl:text-base font-semibold text-white">
          Get winning sports picks, straight to your feed.
        </p>
        <p className="text-sm 2xl:text-base font-semibold text-[#55FEFF]">
          Real signals, real results.
        </p>
      </>
    ),
  },
];

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [AuthError, setAuthError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const router = useRouter();

  async function onSubmit(values: any) {
    setIsLoading(true);
    setIsLoading(false);
    router.push("/");
  }

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-svh w-full  items-center justify-center gap-2 overflow-hidden p-4 md:p-6">
      <div className="relative flex flex-1 w-full  flex-col items-center justify-center p-2 md:p-8 md:py-8 2xl:p-10">
        <div className="max-h-[90svh] w-full sm:w-fit overflow-y-auto scroll-smooth rounded-[24px] bg-card p-4 md:p-6 xl:p-8 shadow-sm [scrollbar-width:none]">
          <Image
            src={"/logo-dark.png"}
            alt="logo"
            className="mb-4 mx-auto dark:hidden"
            width={130}
            height={130}
          />
          <Image
            src={"/logo-light.png"}
            alt="logo"
            className="mb-4 mx-auto dark:block hidden"
            width={130}
            height={130}
          />
          <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
            Sign In
          </h2>
          <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white 2xl:text-[0.9rem]">
            Start copying successful people.
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
                      <FormLabel className="block w-fit text-[0.7rem] font-semibold 2xl:text-[0.75rem]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="mr-0 w-full bg-card-foreground rounded-[10px] border border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] px-3 py-3 leading-tight text-[#3E4347]"
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
                      <FormLabel className="block w-fit text-[0.7rem] font-semibold 2xl:text-[0.75rem]">
                        Password
                      </FormLabel>
                      <FormControl className="">
                        <div className="relative">
                          <Input
                            placeholder="Enter your password"
                            type={showPass ? "text" : "password"}
                            {...field}
                            className="mr-0 w-full bg-card-foreground rounded-[10px] border border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] px-3 py-3 leading-tight text-[#3E4347]"
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
                    <Checkbox className="rounded-full" id="remember-me" />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block font-normal cursor-pointer text-sm"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm text-primary font-medium">
                    <Link href="/reset-password" className="">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {AuthError && (
                  <p className="mb-2 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#F74418]/20 bg-[#F74418]/15 px-3 py-2 text-xs font-medium leading-none text-[#F74418] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 2xl:text-sm">
                    <span className="text-[#F74418]">{AuthError}</span>
                  </p>
                )}

                <div className="mt-6 flex w-full flex-col items-center justify-center">
                  <Button
                    type="submit"
                    className="focus:shadow-outline mb-4 py-3.5 w-full rounded-full border font-normal text-white focus:outline-none"
                  >
                    {isLoading ? (
                      <Loader className="h-5 w-5 animate-spin text-white" />
                    ) : (
                      <span className="capitalize font-semibold">Sign In</span>
                    )}
                  </Button>
                  <div className="flex items-center mt-2 gap-2">
                    <h2 className="text-sm font-semibold text-[#3E4347] dark:text-white">
                      New to CopyWins?{" "}
                    </h2>
                    <Link
                      href={"/register"}
                      className="text-sm font-bold text-vintage-50"
                    >
                      <span className="capitalize text-primary">
                        Create Account
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </Form>
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

export default Login;
