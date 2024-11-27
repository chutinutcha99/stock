import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import RecuisitionForm from "@/components/Recuisition";

export const metadata: Metadata = {
    title: "Recuisition Form",
    description: "This is Recuisition page",
};

const Recuisition = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="Recuisition"/>
                <RecuisitionForm/>
            </div>
        </DefaultLayout>
    );
};

export default Recuisition;