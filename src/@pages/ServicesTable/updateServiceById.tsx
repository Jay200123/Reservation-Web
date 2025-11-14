import { useStore } from "../../@state/store";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { ServiceFormik } from "../../@types";

export default function updateServiceById() {
    const navigate = useNavigate();

    const { id } = useParams();

    const { getServiceById, updateServiceById } = useStore();

    const { data } = useQuery({
        queryKey: ["service"],
        queryFn: () => getServiceById(id!),
        enabled: !!id,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
    });

    const service = data?.details;

    const formik = useFormik<ServiceFormik>({
        enableReinitialize: true,
        initialValues: {
            service_name: service?.service_name || "",
            service_price: service?.service_price || 0,
            duration: service?.duration || "",
            description: service?.description || "",
            image: []
        },
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append("service_name", values?.service_name);
            formData.append("service_price", values.service_price.toString());
            formData.append("duration", values.duration);
            formData.append("description", values.description);
            values.image.forEach((file) => {
                formData.append("image", file)
            });

            const result = await updateServiceById(service?._id!, formData);

            if (result.status == 200) {
                toast.success(result.message);
                navigate("/services/table")
            } else {
                toast.error("Service update failed.")
            }
        }
    });

    return (
        <div className="flex justify-center items-center lg:bg-[#d4af37] md:bg-[#d4af37] lg:p-5 md:p-4 p-0">
            <form onSubmit={formik.handleSubmit} className="lg:w-[70rem] lg:max-h-[65rem] md:w-[60rem] md:h-[62rem] h-full w-full flex rounded-lg bg-white lg:shadow-lg md:shadow-lg shadow-none lg:m-0 md:m-3.5">
                {/* Image Layout */}
                <div className="flex flex-col items-center justify-around w-1/2">
                    {service?.image.map((file) => (
                        <div key={file.public_id} className="w-[12rem] h-[12rem] shadow">
                            <img src={file.url} alt="Service" className="w-full h-full object-cover object-center rounded-lg" />
                        </div>
                    ))}
                </div>

                {/* Service Information Layout */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <div className=" lg:px-3.5 lg:py-3.5 md:px-2.5 md:py-2.5 px-1.5 py-1.5">
                        <h3 className="lg:text-4xl md:text-2xl text-lg text-center font-medium">Service Information</h3>
                        <p className="lg:text-base lg:mt-3.5 md:text-sm text-xs text-center">Provide the details of your service below. Clear and accurate information helps customers understand what you offer best.</p>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="service_name"
                                    name="service_name"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.service_name || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Price</label>
                            <div className="relative">

                                <input
                                    type="text"
                                    id="service_price"
                                    name="service_price"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.service_price || 0}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Duration</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.duration || ""}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="fullname">Service Description</label>
                            <div className="relative">
                                <textarea
                                    id="description"
                                    name="description"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.description || ""}
                                    rows={6}
                                    className="p-1.5 border border-gray-400 w-full rounded-md pr-3 focus:outline-none focus:border-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-2.5">
                            <label htmlFor="image">Image Upload</label>
                            <div>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    multiple
                                    onChange={(e) => {
                                        const files = Array.from(e.currentTarget.files || []);
                                        formik.setFieldValue("image", files)
                                    }}
                                    className="cursor-pointer p-1.5"
                                />
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center p-2.5">
                            <button
                                type="submit"
                                disabled={!formik.isValid || formik.isSubmitting}
                                className={`rounded-2xl border border-white bg-[#d4af37] text-white lg:text-lg md:text-base text-base p-1.5 lg:px-2.5 lg:py-2.5 w-full md:px-1.5 md:py-1.5 lg:[8rem] lg:font-medium md:mb-2.5 mb-1.5 cursor-pointer ${!formik.isValid && "cursor-not-allowed opacity-50"}`}>
                                Update Service
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}