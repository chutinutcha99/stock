import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TransactionForm from "@/components/Transaction";


export const metadata: Metadata = {
    title: "Transaction Form",
    description: "This is Transaction Form",
};

const TransactionAddForm = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="Transaction Form"/>
                <TransactionForm/>
            </div>
        </DefaultLayout>
    );
};

export default TransactionAddForm;