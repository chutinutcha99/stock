"use client";
import { Metadata } from "next";
import InputGroup from "../FormElements/InputGroup";
import flatpickr from "flatpickr";
import { recuisitionPackage } from "@/types/recuisitionTable"; 
import React, { useEffect, useState } from "react";

export const metadata: Metadata = {
    title: "Recuisition Form",
    description: "This is Recuisition Form",
};

export default function RecuisitionForm() {
    const [data, setData] = useState({
        remember: false,
    });

    return (
        <>
        
        {/* Recuisition Form */}
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <form action="">
                <div className="p-6.5">
                    <div className="mt-2 mb-2 flex flex-col gap-4.5 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <SelectGroupTwo />
                        </div>
                        <InputGroup
                        label="เลขที่ใบเบิกสินค้า"
                        type="number"
                        placeholder="กรอกเลขที่ใบเบิกสินค้า"
                        customClasses="w-full xl:w-1/2"
                        />
                    </div>
                    <div className="mt-2 mb-2 flex flex-col gap-4.5 xl:flex-row">
                        <InputGroup
                        label="รหัสคลังสินค้า"
                        type="number"
                        placeholder="กรอกรหัสคลังสินค้า"
                        customClasses="w-full xl:w-1/2"
                        />

                        <InputGroup
                        label="รหัสสินค้า"
                        type="number"
                        placeholder="กรอกรหัสสินค้า"
                        customClasses="w-full xl:w-1/2"
                        />
                    </div>
                    <div className="mt-2 mb-2 flex flex-col gap-4.5 xl:flex-row">
                        <InputGroup
                        label="จำนวนคงเหลือ"
                        type="number"
                        placeholder="กรอกจำนวนคงเหลือ"
                        customClasses="w-full xl:w-1/2"
                        />

                        <div className="w-full xl:w-1/2">
                            <DatePickerOne />
                        </div>
                    </div>
                    <div className="mt-2 mb-2 flex flex-col gap-4.5 xl:flex-row">
                        <div className="w-full xl:w-3/12">
                            <SelectEmployeeOne />
                        </div>
                        <InputGroup
                        label="ชื่อผู้บันทึก"
                        type="text"
                        placeholder="แสดงชื่อผู้บันทึก"
                        customClasses="w-full xl:w-9/12"/>
                    </div>
                    <div className="mt-2 mb-2 flex flex-col gap-4.5 xl:flex-row">
                        <div className="w-full xl:w-3/12">
                            <SelectEmployeeTwo />
                        </div>
                        <InputGroup
                        label="ชื่อผู้เบิก"
                        type="text"
                        placeholder="กรอกชื่อผู้เบิก"
                        customClasses="w-full xl:w-9/12"/>
                    </div>
                    <button className="mt-5 flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <div className="mt-5">
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <RecuisitionTable/>
            </div>
        </div>
        </>
    );
};


const packageData: recuisitionPackage[] = [
    {
        itemCode: 100000,
        name: "Sugar",
        unitOfMeature: "KG",
        storeName: "Store1",
        locName: "Loc1",
        quantity: 10,
    },
];

const RecuisitionTable = () => {
    return (
        <>
            <div className="w-full flex flex-col rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-[#F7F9FC] dark:bg-dark-2">
                                    <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5 text-center">
                                        Item Code
                                    </th>
                                    <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white text-center">
                                        Name
                                    </th>
                                    <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white text-center">
                                        Unit
                                    </th>
                                    <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white text-center">
                                        Store Name
                                    </th>
                                    <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white text-center">
                                        Location Name
                                    </th>
                                    <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white text-center">
                                        Quantity
                                    </th>
                                    <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white text-center">
                                        Print
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {packageData.map((packageItem, index) => (
                                    <tr key={index}>
                                        <td className ={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}>
                                            <h5 className="text-dark dark:text-white text-center">
                                                {packageItem.itemCode}
                                            </h5>
                                        </td>
                                        <td className ={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}>
                                            <h5 className="text-dark dark:text-white text-center">
                                                {packageItem.name}
                                            </h5>
                                        </td>
                                        <td className ={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}>
                                            <h5 className="text-dark dark:text-white text-center">
                                                {packageItem.unitOfMeature}
                                            </h5>
                                        </td>
                                        <td className ={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}>
                                            <h5 className="text-dark dark:text-white text-center">
                                                {packageItem.storeName}
                                            </h5>
                                        </td>
                                        <td className ={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}>
                                            <h5 className="text-dark dark:text-white text-center">
                                                {packageItem.locName}
                                            </h5>
                                        </td>
                                        <td className ={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}>
                                            <h5 className="text-dark dark:text-white text-center">
                                                {packageItem.quantity}
                                            </h5>
                                        </td>
                                        <td
                                        className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"} text-center`}
                                        >
                                        <div className="flex justify-center items-center space-x-3.5">
                                            <button className="hover:text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0 1 18 8.653v4.097A2.25 2.25 0 0 1 15.75 15h-.241l.305 1.984A1.75 1.75 0 0 1 14.084 19H5.915a1.75 1.75 0 0 1-1.73-2.016L4.492 15H4.25A2.25 2.25 0 0 1 2 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5Zm8.5 3.397a41.533 41.533 0 0 0-7 0V2.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v3.397ZM6.608 12.5a.25.25 0 0 0-.247.212l-.693 4.5a.25.25 0 0 0 .247.288h8.17a.25.25 0 0 0 .246-.288l-.692-4.5a.25.25 0 0 0-.247-.212H6.608Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
                <div className="w-full items-center justify-between border-tbg-[#F7F9FC] text-left dark:bg-dark-2 px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                        <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                        <p className="text-md text-dark dark:text-white">
                            Showing
                            <span className="font-medium px-2">1</span>
                            to
                            <span className="font-medium px-2">10</span>
                            of
                            <span className="font-medium px-2">97</span>
                            results
                        </p>
                        </div>
                        <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                            </a>
                            {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
                            <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                            <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                            <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                            <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            </a>
                        </nav>
                        </div>
                        </div>
                    </div>
            </div>
        </>
    );
};


const SelectGroupTwo: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    return (
        <>
        <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            รายการเอกสาร
        </label>
        <div className="relative z-20 rounded-[7px] bg-white dark:bg-dark-2">
            <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                <svg 
                className="size-5 fill-current"
                width="20"
                height="20" 
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >

                <path fillRule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clipRule="evenodd" />
                </svg>
            </span>

            <select
            value={selectedOption}
            onChange={(e) => {
                setSelectedOption(e.target.value);
                changeTextColor();
            }}
            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 ${
                isOptionSelected ? "text-dark dark:text-white" : ""
            }`}
            >
            <option value="yes" className="text-dark-5 dark:text-dark-6">
                เบิกสินค้า
            </option>
            </select>

            <span className="absolute right-4.5 top-1/2 z-10 -translate-y-1/2 text-dark-4 dark:text-dark-6">
            <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                fill=""
                />
            </svg>
            </span>
        </div>
        </>
    );
};

const DatePickerOne = () => {
    useEffect(() => {
        flatpickr(".form-datepicker", {
            mode: "single",
            static: true,
            monthSelectorType: "static",
            dateFormat: "d.m.Y",
            defaultDate: new Date(),
            prevArrow:
                '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
            nextArrow:
                '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
            });
    }, []);

    return (
        <>
        <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            วันที่เอกสาร
        </label>
        <div className="relative">
            <input
                className="form-datepicker w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
                placeholder="dd/mm/yyyy"
                dara-class="flatpickr-right"
            />

            <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M14.166 11.6666C14.6263 11.6666 14.9993 11.2935 14.9993 10.8333C14.9993 10.373 14.6263 9.99992 14.166 9.99992C13.7058 9.99992 13.3327 10.373 13.3327 10.8333C13.3327 11.2935 13.7058 11.6666 14.166 11.6666Z"
                    fill="#9CA3AF"
                    />
                    <path
                    d="M14.166 14.9999C14.6263 14.9999 14.9993 14.6268 14.9993 14.1666C14.9993 13.7063 14.6263 13.3333 14.166 13.3333C13.7058 13.3333 13.3327 13.7063 13.3327 14.1666C13.3327 14.6268 13.7058 14.9999 14.166 14.9999Z"
                    fill="#9CA3AF"
                    />
                    <path
                    d="M10.8327 10.8333C10.8327 11.2935 10.4596 11.6666 9.99935 11.6666C9.53911 11.6666 9.16602 11.2935 9.16602 10.8333C9.16602 10.373 9.53911 9.99992 9.99935 9.99992C10.4596 9.99992 10.8327 10.373 10.8327 10.8333Z"
                    fill="#9CA3AF"
                    />
                    <path
                    d="M10.8327 14.1666C10.8327 14.6268 10.4596 14.9999 9.99935 14.9999C9.53911 14.9999 9.16602 14.6268 9.16602 14.1666C9.16602 13.7063 9.53911 13.3333 9.99935 13.3333C10.4596 13.3333 10.8327 13.7063 10.8327 14.1666Z"
                    fill="#9CA3AF"
                    />
                    <path
                    d="M5.83268 11.6666C6.29292 11.6666 6.66602 11.2935 6.66602 10.8333C6.66602 10.373 6.29292 9.99992 5.83268 9.99992C5.37245 9.99992 4.99935 10.373 4.99935 10.8333C4.99935 11.2935 5.37245 11.6666 5.83268 11.6666Z"
                    fill="#9CA3AF"
                    />
                    <path
                    d="M5.83268 14.9999C6.29292 14.9999 6.66602 14.6268 6.66602 14.1666C6.66602 13.7063 6.29292 13.3333 5.83268 13.3333C5.37245 13.3333 4.99935 13.7063 4.99935 14.1666C4.99935 14.6268 5.37245 14.9999 5.83268 14.9999Z"
                    fill="#9CA3AF"
                    />
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.83268 1.45825C6.17786 1.45825 6.45768 1.73807 6.45768 2.08325V2.71885C7.00935 2.70824 7.61712 2.70825 8.28556 2.70825H11.713C12.3815 2.70825 12.9893 2.70824 13.541 2.71885V2.08325C13.541 1.73807 13.8208 1.45825 14.166 1.45825C14.5112 1.45825 14.791 1.73807 14.791 2.08325V2.77249C15.0076 2.78901 15.2128 2.80977 15.4069 2.83586C16.3839 2.96722 17.1747 3.24398 17.7983 3.86762C18.4219 4.49126 18.6987 5.28205 18.8301 6.25907C18.9577 7.2084 18.9577 8.42142 18.9577 9.95287V11.7136C18.9577 13.245 18.9577 14.4581 18.8301 15.4074C18.6987 16.3845 18.4219 17.1752 17.7983 17.7989C17.1747 18.4225 16.3839 18.6993 15.4069 18.8306C14.4575 18.9583 13.2445 18.9583 11.7131 18.9583H8.28567C6.75422 18.9583 5.54117 18.9583 4.59183 18.8306C3.61481 18.6993 2.82402 18.4225 2.20039 17.7989C1.57675 17.1752 1.29998 16.3845 1.16863 15.4074C1.04099 14.4581 1.041 13.2451 1.04102 11.7136V9.9529C1.041 8.42144 1.04099 7.20841 1.16863 6.25907C1.29998 5.28205 1.57675 4.49126 2.20039 3.86762C2.82402 3.24398 3.61481 2.96722 4.59183 2.83586C4.78594 2.80977 4.99106 2.78901 5.20768 2.77249V2.08325C5.20768 1.73807 5.48751 1.45825 5.83268 1.45825ZM4.75839 4.07472C3.91998 4.18744 3.43694 4.39883 3.08427 4.7515C2.73159 5.10418 2.5202 5.58722 2.40748 6.42563C2.38839 6.56761 2.37243 6.71709 2.35909 6.87492H17.6396C17.6263 6.71709 17.6103 6.56761 17.5912 6.42563C17.4785 5.58722 17.2671 5.10418 16.9144 4.7515C16.5618 4.39883 16.0787 4.18744 15.2403 4.07472C14.3839 3.95958 13.255 3.95825 11.666 3.95825H8.33268C6.74367 3.95825 5.61478 3.95958 4.75839 4.07472ZM2.29102 9.99992C2.29102 9.28824 2.29128 8.66886 2.30192 8.12492H17.6968C17.7074 8.66886 17.7077 9.28824 17.7077 9.99992V11.6666C17.7077 13.2556 17.7064 14.3845 17.5912 15.2409C17.4785 16.0793 17.2671 16.5623 16.9144 16.915C16.5618 17.2677 16.0787 17.4791 15.2403 17.5918C14.3839 17.7069 13.255 17.7083 11.666 17.7083H8.33268C6.74367 17.7083 5.61478 17.7069 4.75839 17.5918C3.91998 17.4791 3.43694 17.2677 3.08427 16.915C2.73159 16.5623 2.5202 16.0793 2.40748 15.2409C2.29234 14.3845 2.29102 13.2556 2.29102 11.6666V9.99992Z"
                    fill="#9CA3AF"
                    />
                </svg>
            </div>
        </div>
        </>
    );
};

const SelectEmployeeOne: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    return (
        <>
        <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            รหัสผู้บันทึก
        </label>
        <div className="relative z-20 rounded-[7px] bg-white dark:bg-dark-2">
            <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                <svg 
                className="size-5 fill-current"
                width="20"
                height="20" 
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >

                <path fillRule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clipRule="evenodd" />
                </svg>
            </span>

            <select
            value={selectedOption}
            onChange={(e) => {
                setSelectedOption(e.target.value);
                changeTextColor();
            }}
            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 ${
                isOptionSelected ? "text-dark dark:text-white" : ""
            }`}
            >
            <option value="yes" className="text-dark-5 dark:text-dark-6">
                00001
            </option>
            </select>

            <span className="absolute right-4.5 top-1/2 z-10 -translate-y-1/2 text-dark-4 dark:text-dark-6">
            <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                fill=""
                />
            </svg>
            </span>
        </div>
        </>
    );
};


const SelectEmployeeTwo: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    return (
        <>
        <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            รหัสผู้เบิก
        </label>
        <div className="relative z-20 rounded-[7px] bg-white dark:bg-dark-2">
            <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                <svg 
                className="size-5 fill-current"
                width="20"
                height="20" 
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >

                <path fillRule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clipRule="evenodd" />
                </svg>
            </span>

            <select
            value={selectedOption}
            onChange={(e) => {
                setSelectedOption(e.target.value);
                changeTextColor();
            }}
            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 ${
                isOptionSelected ? "text-dark dark:text-white" : ""
            }`}
            >
            <option value="yes" className="text-dark-5 dark:text-dark-6">
                00001
            </option>
            </select>

            <span className="absolute right-4.5 top-1/2 z-10 -translate-y-1/2 text-dark-4 dark:text-dark-6">
            <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                fill=""
                />
            </svg>
            </span>
        </div>
        </>
    );
};
