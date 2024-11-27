import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import UserData from "@/components/UserDataTable";

export const metadata: Metadata = {
    title: "User DataTable",
    description: "This is User DataTable page",
};

const UserDataTable = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="UserDataTable"/>
                <UserData/>
            </div>
        </DefaultLayout>
    );
};

export default UserDataTable;