import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stocks from "@/components/Stocks";

export const metadata: Metadata = {
    title: "Stocks DataTable",
    description: "This is Stocks DataTable page",
};

const Stock = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="Stocks DataTable"/>
                <Stocks/>
            </div>
        </DefaultLayout>
    );
};

export default Stock;