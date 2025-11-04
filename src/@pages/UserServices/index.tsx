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
        <div className="h-screen overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-200 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                User Services
            </h3>

            <div className="w-full flex items-center justify-center">
                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                    {test.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transform"
                        >
                            <h5 className="text-lg font-medium text-gray-700 text-center mb-3">
                                {item.message}
                            </h5>

                            <div className="flex-1 flex items-center justify-center">
                                <div className="text-sm text-gray-500">
                                    Description or details here...
                                </div>
                            </div>

                            <button className="mt-5 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}