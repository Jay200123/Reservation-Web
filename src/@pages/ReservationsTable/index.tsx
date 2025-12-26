import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import DataTable, { type TableColumn } from "react-data-table-component";
import { tableCustomStyles } from "../../@utils";
import type { Reservations } from "../../@types";
import {
    FaRegEye,
    FaPencilAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function ReservationsTable() {

    const navigate = useNavigate();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const { getAllReservations } = useStore();

    const { data, isLoading } = useQuery({
        queryKey: ["reservations", skip, limit],
        queryFn: () => getAllReservations(skip, limit),
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false
    });

    const reservations = data?.details ?? [];

    const columns: TableColumn<Reservations>[] = [
        {
            name: "Reservation ID",
            selector: (row) => row._id
        },
        {
            name: "User",
            selector: (row) => row.user.username
        },
        {
            name: "Reservation Date",
            selector: (row) => new Date(row?.reservation_date).toISOString().split("T")[0]
        },
        {
            name: "Start Time",
            selector: (row) => row.timeslot.start_time
        },
        {
            name: "End Time",
            selector: (row) => row.timeslot.end_time
        },
        {
            name: "Services",
            cell: (row) => {
                return (
                    <ul className="space-y-1 text-sm list-disc list-inside">
                        {row?.services?.map((service, index) => (
                            <li className="truncate" key={index}>
                                {service?.service?.service_name}{" "}
                                <span className="font-medium">- ₱{service.service.service_price}</span>
                            </li>
                        ))}
                    </ul>
                );
            },
        },
        {
            name: "Status",
            selector: (row) => row.status
        },
        {
            name: "Total Amount",
            selector: (row) => `₱${row.amount.toLocaleString()}`
        },
        {
            name: "Payment Type",
            selector: (row) => row.payment_type
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex items-center text-center">
                    <FaRegEye className='mr-2 text-xl text-green-500 cursor-pointer'
                        onClick={() => navigate(`/reservation/${row._id}`)}
                    />

                    <FaPencilAlt className='mr-2 text-xl text-blue-500 cursor-pointer'
                        onClick={() => {
                            // setSelectedReservation(row);
                            setIsModalOpen(true);
                        }}
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
                        title="Reservations Table"
                        columns={columns}
                        data={reservations}
                        pagination
                        paginationServer
                        paginationTotalRows={reservations.length ?? 0}
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

                    {isModalOpen && (
                        <div className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center rounded-md">
                            <div className="bg-white p-6 rounded shadow-lg w-96">
                                <h2 className="text-xl font-semibold mb-4">Reservation Details</h2>

                                {/* Display selected row data */}
                                <p><strong>Name:</strong> Lorem</p>
                                <p><strong>Date:</strong> test</p>

                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            )}
        </div>
    )
}