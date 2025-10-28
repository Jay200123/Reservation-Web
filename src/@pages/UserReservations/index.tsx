import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../@state/store";

export default function UserReservations() {

    const { user, getUserReservations } = useStore();

    const { data } = useQuery({
        queryKey: ["user_reservation"],
        queryFn: () => getUserReservations(user?._id!),
        enabled: !!user?._id
    });

    const reservations = data?.details;

    console.log(reservations);

    return (
        <div>
            <h3 className="lg:text-2xl md:text-lg text-base font-medium">Reservations</h3>
        </div>
    )
}