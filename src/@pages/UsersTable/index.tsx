import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import DataTable, { type TableColumn } from "react-data-table-component";
import { FadeLoader } from "react-spinners";
import type { UserDetails } from "../../@types";
import { tableCustomStyles } from "../../@utils";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UsersTable() {
    const navigate = useNavigate();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);

    const { getAllUsers } = useStore();

    const { data, isLoading } = useQuery({
        queryKey: ["users", skip, limit],
        queryFn: () => getAllUsers(skip, limit),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
    });

    const users = data?.details ?? [];

    const columns: TableColumn<UserDetails>[] = [
        {
            name: "ID",
            selector: (row) => row.user._id
        },
        {
            name: "Username",
            selector: (row) => row?.user?.username
        },
        {
            name: "Fullname",
            selector: (row) => row?.fullname
        },
        {
            name: "Email",
            selector: (row) => row?.email,
        },
        {
            name: "Contact Number",
            selector: (row) => row?.contact_number
        },
        {
            name: "Address",
            selector: (row) => row?.address
        },
        {
            name: "City",
            selector: (row) => row?.city
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
                <div className="flex text-center items-center ">
                    <FaEye className='mr-2 text-xl text-green-500'
                        onClick={() => navigate(`/user/${row.user._id}`)}
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
                    <DataTable
                        title="Users Table"
                        columns={columns}
                        data={users}
                        highlightOnHover
                        pointerOnHover
                        pagination
                        paginationServer
                        paginationTotalRows={users.length ?? 0}
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