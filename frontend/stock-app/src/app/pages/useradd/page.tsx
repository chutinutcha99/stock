import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import UserAdd from "@/components/UserAdd";

export const metadata: Metadata = {
    title: "User New Add",
    description: "This is User New Add Page",
}

const UserNewAdd = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="User New Add"/>
                <UserAdd/>
            </div>
        </DefaultLayout>
    );
};

export default UserNewAdd;