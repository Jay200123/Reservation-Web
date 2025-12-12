import { useStore } from "../../@state/store"
import { useQuery } from "@tanstack/react-query";
import DataTable, { type TableColumn } from "react-data-table-component";
import type { Ratings } from "../../@types";
import { useNavigate } from "react-router-dom";
import { tableCustomStyles } from "../../@utils";
import { FadeLoader } from "react-spinners";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

export default function RatingsTable() {
    const navigate = useNavigate();

    const { getAllRatings } = useStore();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);

    const { isLoading, data } = useQuery({
        queryKey: ["ratings"],
        queryFn: getAllRatings
    });

    const ratings = data?.details ?? [];

    const columns: TableColumn<Ratings>[] = [
        {
            name: "Rating ID",
            cell: (row) => row?._id,
        },
        {
            name: "User ID",
            cell: (row) => row?.user._id
        },
        {
            name: "Reservation ID",
            cell: (row) => row?.reservation._id
        },
        {
            name: "Description",
            cell: (row) => row?.description,
        },
        {
            name: "Rating",
            cell: (row) => row?.rating,
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex items-center text-center">
                    <FaRegEye className='mr-2 text-xl text-green-500'
                        onClick={() => navigate(`/rating/${row._id}`)}
                    />
                </div>
            )
        }

    ]

    return (
        <div className="flex items-center justify-center min-h-screen">
            {isLoading ? (
                <FadeLoader color="#c9a128" />
            ) : (
                <div className="w-full max-w-7xl mx-auto rounded-md">
                    <DataTable
                        title="Ratings Table"
                        columns={columns}
                        data={ratings}
                        highlightOnHover
                        pointerOnHover
                        pagination
                        paginationServer
                        paginationTotalRows={ratings.length ?? 0}
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