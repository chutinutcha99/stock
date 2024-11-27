import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import StockAdd from "@/components/StockAdd";

export const metadata: Metadata = {
    title: "Stock Add Data",
    description: "This is Stock Add Data page",
};

const AddForm = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="Stock Add Data"/>
                <StockAdd/>
            </div>
        </DefaultLayout>
    );
};

export default AddForm;
