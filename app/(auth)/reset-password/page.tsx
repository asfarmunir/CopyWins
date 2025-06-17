"use client";
import Image from "next/image";
import { createRef, useState } from "react";
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

const carouselItems = [
  {
    src: "/authBg1.svg",
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
    src: "/authBg3.svg",
    alt: "signup3",
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
  {
    src: "/authBg2.svg",
    alt: "signup2",
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
];

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [AuthError, setAuthError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  interface value {
    email: string;
    password: string;
  }
  const router = useRouter();
  async function onSubmit(values: value) {
    setIsLoading(true);

    // const result = await signIn("credentials", {
    //   redirect: false,
    //   email: values.email,
    //   password: values.password,
    // });
    // console.log("🚀 ~ onSubmit ~ result:", result);
    // if (result?.status !== 200) {
    //   setToggle(true);

    //   setAuthError("Incorrect credentials please try again!");
    // } else {
    //   router.push("/");
    //   setAuthError("");
    //   setToggle(false);
    // }
    setIsLoading(false);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center gap-2 overflow-hidden p-4 md:p-6 ">
      <div className=" absolute top-6 xl:top-8 left-8">
        <Image
          src={"/logo.svg"}
          alt="logo"
          className="mb-4 mx-auto dark:hidden "
          width={140}
          height={140}
        />
        <Image
          src={"/logo-dark.svg"}
          alt="logo"
          className="mb-4 mx-auto dark:block hidden "
          width={140}
          height={140}
        />
      </div>
      <div className="relative flex flex-1  w-full flex-col items-center justify-center   p-2 md:p-8 md:py-8 2xl:p-10">
        <div className="max-h-[90svh] w-full   sm:w-fit  overflow-y-auto scroll-smooth rounded-[24px] bg-card p-4 md:p-6 xl:p-8  shadow-sm [scrollbar-width:none] ">
          <h2 className=" text-xl font-bold text-vintage-50 xl:text-2xl">
            Forget Password?
          </h2>
          <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
            Please enter your email here.
          </p>

          <Form {...form}>
            <div
              id="first"
              className="mt-4 flex w-full flex-col items-center justify-center gap-6 md:gap-4"
            >
              {/* @ts-ignore */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className=" block w-fit text-[0.7rem]  font-semibold 2xl:text-[0.75rem]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="mr-0 w-full rounded-[10px] border bg-card-foreground border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px]  px-3 py-3 leading-tight text-[#3E4347] "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                      <span className="capitalize">Send Email</span>
                    )}
                  </Button>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-[#3E4347] dark:text-white/80">
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
      <div className="relative hidden h-full flex-1 w-full flex-col items-center justify-center overflow-hidden rounded-xl md:flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselItems[currentSlide].src}
              alt={carouselItems[currentSlide].alt}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute bottom-28 left-0 right-0 flex flex-col items-center text-center gap-2 px-4">
              {carouselItems[currentSlide].text}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel indicators */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
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
