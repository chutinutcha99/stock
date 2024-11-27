"use client";
import { Metadata } from "next";
import Link from "next/link";
import InputGroup from "@/components/FormElements/InputGroup";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Signup Form",
  description: "This is SignUp Form",
};

export default function SignupForm() {
    const [data, setData] = useState({
        remember: false,
    });

    return (
        <>
         {/* <!-- Sign Up Form --> */}
         <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
         <form action="#">
           <div className="p-6.5">
             <InputGroup
               label="Username"
               type="text"
               placeholder="Enter your Username"
               customClasses="mb-4.5"
             />

               <InputGroup
               label="First Name"
               type="text"
               placeholder="Enter your First Name"
               customClasses="mb-4.5"
             />

               <InputGroup
               label="Last Name"
               type="text"
               placeholder="Enter your Last Name"
               customClasses="mb-4.5"
             />

               <InputGroup
               label="Position"
               type="text"
               placeholder="Enter your Position"
               customClasses="mb-4.5"
             />

             <InputGroup
               label="Email"
               type="email"
               placeholder="Enter email address"
               customClasses="mb-4.5"
             />

             <InputGroup
               label="Password"
               type="password"
               placeholder="Enter password"
               customClasses="mb-4.5"
             />

             <InputGroup
               label="Re-type Password"
               type="password"
               placeholder="Re-enter"
               customClasses="mb-5.5"
             />

             <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
               Sign Up
             </button>
           </div>
         </form>
       </div>
       </>
    );
};

