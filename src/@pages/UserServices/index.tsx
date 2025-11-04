export default function UserServices() {

    const test = [
        {
            message: "Container 1"
        },

        {
            message: "Container 2"
        },
        {
            message: "Container 3"
        },
        {
            message: "Container 4"
        },
        {
            message: "Container 5"
        },
        {
            message: "Container 6"
        },
        {
            message: "Container 7"
        },
        {
            message: "Container 8"
        },
        {
            message: "Container 9"
        },
        {
            message: "Container 10"
        },
        {
            message: "Container 11"
        },
        {
            message: "Container 12"
        },
    ]
    return (
        <>
            <div className="h-screen overflow-y-auto">
                <h3>This is User Services</h3>

                <div className="w-full flex items-center justify-center">
                    {/* Box Containers */}
                    <div className="grid grid-cols-4 gap-5 p-5 w-full">


                        {test.map((item, index) => {
                            return (
                                <div key={index} className="w-[350px] h-[400px] border border-b-black mt-3.5 rounded-md">
                                    <h5>{item.message}</h5>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>


        </>
    )
}