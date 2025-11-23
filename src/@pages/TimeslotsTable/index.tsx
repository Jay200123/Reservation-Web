import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../@state/store";
import { FadeLoader } from "react-spinners";
import DataTable, { type TableColumn } from "react-data-table-component";
import { tableCustomStyles } from "../../@utils";
import type { Timeslots } from "../../@types/state/timeslot";
import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TimeslotsTable() {

    const navigate = useNavigate();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(0);

    const { getAllTimeslots } = useStore();

    const { data, isLoading } = useQuery({
        queryKey: ["timeslots", skip, limit],
        queryFn: () => getAllTimeslots(skip, limit)
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
                <div className="w-full max-w-7xl mx-auto rounded-md">
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
                        highlightOnHover
                        pointerOnHover
                        pagination
                        paginationServer
                        paginationTotalRows={timeslots.length ?? 0}
                        paginationPerPage={limit}
                        paginationRowsPerPageOptions={[10, 20, 30]}
                        onChangeRowsPerPage={(newLimit, page) => {
                            // When the user changes "rows per page" (5 → 10 → 15)
                            // 1. Update the limit (how many rows to fetch)
                            setLimit(newLimit);

                            // 2. Recalculate the skip based on the current page
                            //
                            // Example:
                            // If you're on page 2 and you change rowsPerPage from 5 → 10:
                            // skip = (2 - 1) * 10 = 10
                            //
                            // This ensures you stay on page 2 with the updated limit
                            setSkip((page - 1) * newLimit);
                        }}

                        onChangePage={(page) => {
                            // When the user changes page (1 → 2 → 3)
                            //
                            // Recalculate the skip based on:
                            // skip = (page - 1) * limit
                            //
                            // Example:
                            // page = 3, limit = 5
                            // skip = (3 - 1) * 5 = 10
                            //
                            // Meaning: skip the first 10 records and fetch the next part
                            setSkip((page - 1) * limit);
                        }}
                        customStyles={tableCustomStyles}
                    />
                </div>

            )}
        </div>
    )
}