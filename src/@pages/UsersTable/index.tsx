import { useStore } from "../../@state/store";
import { useQuery } from "@tanstack/react-query";
import DataTable, { type TableColumn } from "react-data-table-component";
import { FadeLoader } from "react-spinners";
import type { UserDetails } from "../../@types";
import { tableCustomStyles } from "../../@utils";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UsersTable() {
    const navigate = useNavigate();

    const { getAllUsers } = useStore();

    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: false
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
                <div className="flex flex-col rounded-md shadow-lg">
                    <DataTable
                        title="Users Table"
                        columns={columns}
                        data={users}
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