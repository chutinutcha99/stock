import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Signup from "@/components/Auth/Signup";

export const metadata: Metadata = {
    title: "Sign Up Page",
    description: "This is Sign Up Page",

};

const SignUp: React.FC = () => {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Sign Up" />
  
        <>

        <Signup />

        </>
        
              
      </DefaultLayout>
    );
  };
  
  export default SignUp;