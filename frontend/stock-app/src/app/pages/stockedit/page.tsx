import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import StockEdit from "@/components/StockEdit";

export const metadata: Metadata = {
    title: "Stock Edit Data",
    description: "This is Stock Edit Data Page",
}

const EditForm = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="Stock Edit Data"/>
                <StockEdit/>
            </div>
        </DefaultLayout>
    );
};

export default EditForm;