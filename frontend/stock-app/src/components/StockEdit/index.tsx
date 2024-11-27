"use client";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Edit Data Form",
  description: "This is Edit Data Form",
};

const StockEdit = ({
  initialData,
}: {
  initialData: { item_code: number; name: string; brand_name: string; type_pro: string; barcode: string; is_lot_control: boolean; quantity: number; onhand: number; unit_code: string; unit_price: number };
}) => {
  const [formData, setFormData] = useState({
    item_code: initialData?.item_code || 0,
    name: initialData?.name || "",
    brand_name: initialData?.brand_name || "",
    type_pro: initialData?.type_pro || "",
    barcode: initialData?.barcode || "",
    is_lot_control: initialData?.is_lot_control || true,
    quantity: initialData?.quantity || 0,
    onhand: initialData?.onhand || 0,
    unit_code: initialData?.unit_code || "",
    unit_price: initialData?.unit_price || 0  
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState<boolean>(false); // เพิ่ม state ของ checkbox

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "quantity" || name === "unit_price" ? Number(value) : value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // เพิ่มการตรวจสถานะ Checkbox
    if (!isChecked) {
      setMessage("โปรดยืนยันการแก้ไขรายการ");
      setLoading(false);
      return;
    }

    const response = await updateStock(formData); // เปลี่ยนเป็น updateStock สำหรับการแก้ไข

    if (response.success) {
      setMessage("แก้ไขรายการสำเร็จแล้ว");
    } else {
      setMessage(response.message);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Edit Form */}
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            <div>
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Attach image file
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div className="mb-3 flex flex-col gap-5.5 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 mt-3 block text-body-sm font-medium text-dark dark:text-white"
                  htmlFor="item_code"
                >
                  รหัสสินค้า
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="item_code"
                    id="item_code"
                    value={formData.item_code}
                    onChange={handleChange}
                    placeholder="กรอกรหัสสินค้า"
                    defaultValue="กรอกรหัสสินค้า"
                  />
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 mt-3 block text-body-sm font-medium text-dark dark:text-white"
                  htmlFor="name"
                >
                  ชื่อสินค้า
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="กรอกชื่อสินค้า"
                    defaultValue="กรอกชื่อสินค้า"
                  />
                </div>
              </div>
            </div>

            <div className="mb-2 flex flex-col gap-4.5 xl:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                  htmlFor="brand_name"
                >
                  ยี่ห้อสินค้า
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="brand_name"
                    id="brand_name"
                    value={formData.brand_name}
                    onChange={handleChange}
                    placeholder="กรอกยี่ห้อสินค้า"
                    defaultValue="กรอกยี่ห้อสินค้า"
                  />
                </div>
              </div>

              <div className="w-full sm:w-1/2">
              <label
                  htmlFor="type_pro"
                  className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                >
                  ประเภทสินค้า
                </label>
                <select
                  id="type_pro"
                  name="type_pro"
                  className="block w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  value={formData.type_pro}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    กรุณาเลือก...
                  </option>
                  <option value="option1">ตัวเลือกที่ 1</option>
                  <option value="option2">ตัวเลือกที่ 2</option>
                  <option value="option3">ตัวเลือกที่ 3</option>
                </select>
              </div>
            </div>
            <div className="mb-2 flex flex-col gap-4.5 xl:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="barcode"
                  className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                >
                  บาร์โค้ด
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="barcode"
                    id="barcode"
                    value={formData.barcode}
                    onChange={handleChange}
                    placeholder="กรอกบาร์โค้ด"
                    defaultValue="กรอกบาร์โค้ด"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2">
              <label
                  htmlFor="quantity"
                  className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                >
                  จำนวนคงเหลือ
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="quantity"
                    id="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="กรอกจำนวนคงเหลือ"
                    defaultValue="กรอกจำนวนคงเหลือ"
                  />
                </div>
              </div>
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-4.5 xl:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="unit_code"
                  className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                >
                  รหัสหน่วยนับ
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    name="unit_code"
                    id="unit_code"
                    value={formData.unit_code}
                    onChange={handleChange}
                    placeholder="กรอกรหัสหน่วยนับ"
                    defaultValue="กรอกรหัสหน่วยนับ"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor=""
                  className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                >
                  ราคาต่อหน่วย
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    name="unit_price"
                    id="unit_price"
                    value={formData.unit_price}
                    onChange={handleChange}
                    placeholder="กรอกราคาต่อหน่อย"
                    defaultValue="กรอกราคาต่อหน่วย"
                  />
                </div>
              </div>
            </div>
            <div className="mb-2 mt-2 flex flex-col gap-4.5 xl:flex-row">
              
              <div className="w-full sm:w-1/2">
                <div className="mt-5">
                  <label
                    htmlFor="checkboxLabelTwo"
                    className="flex cursor-pointer select-none items-center text-body-sm font-medium"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkboxLabelTwo"
                        className="sr-only"
                        checked={isChecked}
                        onChange={() => {
                          setIsChecked(!isChecked);
                        }}
                      />
                      <div
                        className={`mr-2 flex h-5 w-5 items-center justify-center rounded border ${
                          isChecked
                            ? "border-primary bg-gray-2 dark:bg-transparent"
                            : "border border-dark-5 dark:border-dark-6"
                        }`}
                      >
                        <span
                          className={`opacity-0 ${isChecked && "!opacity-100"}`}
                        >
                          <svg
                            width="11"
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                              fill="#5750F1"
                              stroke="#5750F1"
                              strokeWidth="0.4"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    ควบคุมล็อตสินค้า
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-5 flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
            >
              {loading ? "กำลังบันทึก..." : "บันทึกการแก้ไข"}
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default StockEdit;



