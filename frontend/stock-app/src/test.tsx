"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonDefault from "../Buttons/ButtonDefault";

interface Stock {
  image: string;
  item_code: number;
  name: string;
  brand_name: string;
  type_pro: string;
  barcode: number;
  is_lot_control: boolean;
  quantity: number;
  onhand: number;
  unit_code: string;
  unit_price: number;
}

function Stocks() {
  const [stockData, setStockData] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage = 10;

  const fetchStocks = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get("https://127.0.0.1:8000/api/stocks", {
        params: { page, limit: itemsPerPage },
      });
      setStockData(response.data.stocks);
      setTotalItems(response.data.totalItems);
      setTotalPages(Math.ceil(response.data.totalItems / itemsPerPage));
    } catch (error) {
      console.error("Failed to fetch stock data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // แสดงตารางข้อมูลสินค้า
  return (
    <>
      <div className="flex w-full flex-col rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="overflow-x-auto">
          <div className="mb-1 flex flex-wrap gap-5 xl:gap-7.5">
            <ButtonDefault
              label="Add"
              link="/stockadd"
              customClasses="bg-primary text-white py-[11px] px-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                />
              </svg>
            </ButtonDefault>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#F7F9FC] dark:bg-dark-2">
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                    Image
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Item Code
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Name
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Brand Name
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Type Product
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Barcode
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Lot Control
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Quantity
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Onhand
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Unit Code
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Unit Price
                  </th>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((stockItem, index) => (
                  <tr key={index}>
                    <td className="flex items-center justify-center border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5">
                      <Image
                        src={stockItem.image}
                        width={60}
                        height={50}
                        alt="Stock image"
                      />
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.item_code}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.name}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.brand_name}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.type_pro}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.barcode}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.is_lot_control ? 1 : 0}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.quantity}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.onhand}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      {stockItem.unit_code}
                    </td>
                    <td className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                      ฿{stockItem.unit_price}
                    </td>
                    <td className="border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5">
                      <div className="flex justify-center space-x-3.5">
                        {/* Edit Button */}
                        <button className="hover:text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-5 fill-current"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          </div>

          {/* Pagination Controls */}
          <div className="border-tbg-[#F7F9FC] flex items-center justify-between px-4 py-3 text-left dark:bg-dark-2 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-md text-dark dark:text-white">
                  Showing
                  <span className="px-2 font-medium">1</span>
                  to
                  <span className="px-2 font-medium">10</span>
                  of
                  <span className="px-2 font-medium">97</span>
                  results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  {/* ปุ่ม Previous */}
                  <a
                    href="#"
                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      currentPage === 1
                        ? "pointer-events-none cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePrevPage();
                    }}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* Loop แสดงเลขหน้า */}
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;

                    // กำหนดสไตล์ของหน้า
                    const isActive = pageNumber === currentPage;
                    return (
                      <a
                        key={pageNumber}
                        href="#"
                        aria-current={isActive ? "page" : undefined}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                          isActive
                            ? "z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          if (!isActive) handlePageChange(pageNumber);
                        }}
                      >
                        {pageNumber}
                      </a>
                    );
                  })}

                  {/* ปุ่ม Next */}
                  <a
                    href="#"
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      currentPage === totalPages
                        ? "pointer-events-none cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handleNextPage();
                    }}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stocks;
