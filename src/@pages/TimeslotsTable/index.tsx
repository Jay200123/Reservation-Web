import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../@state/store";
import { FadeLoader } from "react-spinners";
import DataTable, { type TableColumn } from "react-data-table-component";
import { tableCustomStyles } from "../../@utils";
import type { Timeslots } from "../../@types/state/timeslot";
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TimeslotsTable() {

    const navigate = useNavigate();

    const { getAllTimeslots } = useStore();

    const { data, isLoading } = useQuery({
        queryKey: ["timeslots"],
        queryFn: getAllTimeslots
    });

    const timeslots = data?.details ?? [];

    const columns: TableColumn<Timeslots>[] = [
        {
            name: "ID",
            selector: (row) => row._id
        },

        {
            name: "Start Time",
            selector: (row) => row.start_time
        },
        {
            name: "End Time",
            selector: (row) => row.end_time
        },
        {
            name: "Created At",
            selector: (row) => new Date(row?.createdAt).toISOString().split("T")[0],
        },

        {
            name: "Updated At",
            selector: (row) => new Date(row?.updatedAt).toISOString().split("T")[0],
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex items-center text-center">
                    <FaRegEye className='mr-2 text-xl text-green-500'
                        onClick={() => navigate(`/timeslot/${row._id}`)}
                    />

                    <FaPencilAlt className='mr-2 text-xl text-blue-500'
                        onClick={() => navigate(`/edit/timeslot/${row._id}`)}
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
                            onClick={() => navigate("/timeslot/add")}
                            className="text-[1rem] mb-2 p-2 bg-[#d4af37] cursor-pointer border transition-all duration-500 hover:opacity-75 rounded-md text-white mt-4"
                        >
                            <i className="mr-1 fa-solid fa-plus"></i> Add Timeslot
                        </button>
                    </div>
                    <DataTable
                        title="Timeslots Table"
                        columns={columns}
                        data={timeslots}
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