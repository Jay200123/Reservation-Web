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
    FaCalendarDay
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function ReservationsTable() {

    const navigate = useNavigate();

    const { getAllReservations } = useStore();

    const { data, isLoading } = useQuery({
        queryKey: ["reservations"],
        queryFn: getAllReservations,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false
    });

    const reservations = data?.details ?? [];

    console.log(reservations);

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
                    <FaRegEye className='mr-2 text-xl text-green-500'
                        onClick={() => navigate(`/reservation/${row._id}`)}
                    />

                    <FaPencilAlt className='mr-2 text-xl text-blue-500'
                        onClick={() => toast.error("Edit Status: Feature on progress")}
                    />

                    <FaCalendarDay className='mr-2 text-xl text-red-500'
                        onClick={() => toast.error("Reschedule: Feature on progress")}
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