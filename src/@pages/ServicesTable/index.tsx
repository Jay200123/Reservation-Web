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
                <div className="flex flex-col rounded-md shadow-lg">
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