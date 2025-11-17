import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import DataTable, { type TableColumn } from "react-data-table-component";
import type { Services } from "../../@types";
import { useNavigate } from "react-router-dom";
import { tableCustomStyles } from "../../@utils";
import { FadeLoader } from "react-spinners";
import { FaRegEye, FaPencilAlt } from "react-icons/fa";

export default function ServicesTable() {

    const navigate = useNavigate();

    const { getAllServices } = useStore();

    const { data, isLoading } = useQuery({
        queryKey: ["services"],
        queryFn: getAllServices
    });

    const services = data?.details ?? [];

    const columns: TableColumn<Services>[] = [
        {
            name: "Service ID",
            selector: (row) => row._id
        },
        {
            name: "Service Name",
            selector: (row) => row.service_name
        },
        {
            name: "Price",
            selector: (row) => row.service_price
        },
        {
            name: "Duration",
            selector: (row) => row.service_name
        },
        {
            name: "Description",
            selector: (row) => row.description
        },
        {
            name: "Images",
            cell: (row) => {
                return (
                    <div className="flex items-center justify-center p-1">
                        < img
                            src={row?.image[Math.floor(Math.random() * row?.image.length)]?.url}
                            alt={row?.image[Math.floor(Math.random() * row.image.length)]?.originalname}
                            className="object-contain lg:h-22 lg:w-22 md:h-16 md:w-16 h-10 w-10 rounded-md"
                        />
                    </div>
                )
            }
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex items-center text-center">
                    <FaRegEye className='mr-2 text-xl text-green-500'
                        onClick={() => navigate(`/service/${row._id}`)}
                    />

                    <FaPencilAlt className='mr-2 text-xl text-blue-500'
                        onClick={() => navigate(`/service/edit/${row._id}`)}
                    />
                </div>
            )
        }

    ];


    return (
        <div className="flex items-center justify-center min-h-screen">
            {isLoading ? (
                <FadeLoader color="#c9a128" />
            ) : (
                <div className="w-full max-w-6xl mx-auto rounded-md">
                    <div className="flex items-center justify-end">
                        <button
                            onClick={() => navigate("/service/add")}
                            className="text-[1rem] mb-2 p-2 bg-[#d4af37] cursor-pointer border transition-all duration-500 hover:opacity-75 rounded-md text-white mt-4"
                        >
                            <i className="mr-1 fa-solid fa-plus"></i> Add Service
                        </button>
                    </div>
                    <DataTable
                        title="Services Table"
                        columns={columns}
                        data={services}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        paginationPerPage={10}
                        paginationRowsPerPageOptions={[10, 20, 30]}
                        customStyles={tableCustomStyles}
                    />
                </div>

            )}
        </div>
    )
}