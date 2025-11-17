import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import {
    MotionWrapper,
    ProtectedRoutes
} from "./@components";
import {
    HomeLayout,
    UserLayout,
    ServiceLayout
} from "./@layouts";
import {
    Home,
    About,
    Contact,
    Forbidden,
    NotFound,
    SignIn,
    SignUp,
    Profile,
    EditProfile,
    ServiceDetails,
    Checkout,
    ReservationForms,
    UserReservations,
    RescheduleReservation,
    UserServices,
    Dashboard,
    UsersTable,
    UserDetails,
    ServicesTable,
    GetServiceById,
    AddService,
    UpdateServiceById,
    TimeslotsTable,
    GetTimeslotById,
    AddTimeslot,
    UpdateTimeslotById,
    ReservationsTable
} from "./@pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/*Public Routes here */}
            <Route element={<HomeLayout />}>

                {/* Landing Page Route */}
                <Route index path="/" element={
                    <MotionWrapper>
                        <Home />
                    </MotionWrapper>
                } />

                <Route index path="/about" element={
                    <MotionWrapper>
                        <About />
                    </MotionWrapper>
                } />

                <Route index path="/contact" element={
                    <MotionWrapper>
                        <Contact />
                    </MotionWrapper>
                } />

                {/* Sign In Route */}
                <Route path="/signin" element={
                    <MotionWrapper>
                        <SignIn />
                    </MotionWrapper>
                } />

                {/* Sign Up Route */}
                <Route path="/signup" element={
                    <MotionWrapper>
                        <SignUp />
                    </MotionWrapper>
                } />

                {/* Service Details Route */}
                <Route path="/service/details/:id" element={
                    <MotionWrapper>
                        <ServiceDetails />
                    </MotionWrapper>
                } />

                {/*  Reservation Forms */}
                <Route path="/reservation/forms" element={
                    <MotionWrapper>
                        <ReservationForms />
                    </MotionWrapper>
                } />

                {/* Forbidden page */}
                <Route path="forbidden" element={
                    <ProtectedRoutes userRole={["ADMIN", "USER"]}>
                        <MotionWrapper>
                            <Forbidden />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                <Route path="*" element={
                    <MotionWrapper>
                        <NotFound />
                    </MotionWrapper>
                } />

                {/* Checkout Form */}
                <Route path="/checkout" element={
                    <ProtectedRoutes userRole={["USER"]}>
                        <MotionWrapper>
                            <Checkout />
                        </MotionWrapper>
                    </ProtectedRoutes>

                } />
            </Route>

            <Route element={<ServiceLayout />}>
                <Route path="/services" element={
                    <MotionWrapper>
                        <UserServices />
                    </MotionWrapper>
                } />
            </Route>

            {/* USERS Private Routes here */}

            {/* User Routes */}
            <Route element={<UserLayout />}>
                {/* Profile Route */}
                <Route path="/profile" element={
                    <ProtectedRoutes userRole={["USER"]}>
                        <MotionWrapper>
                            <Profile />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Edit Profile Route */}
                <Route path="/edit/profile/:id" element={
                    <ProtectedRoutes userRole={["USER"]}>
                        <MotionWrapper>
                            <EditProfile />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* User Reservations route  */}
                <Route path="reservations/:user_id" element={
                    <ProtectedRoutes userRole={["USER"]}>
                        <MotionWrapper>
                            <UserReservations />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Reschedule Reservation route */}
                <Route path="reservation/reschedule/:id" element={
                    <ProtectedRoutes userRole={["USER"]}>
                        <MotionWrapper>
                            <RescheduleReservation />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />
            </Route>

            {/* ADMIN Private Route */}

            <Route element={<HomeLayout />}>
                {/* Admin Dashboard Route  */}
                <Route path="/dashboard" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <Dashboard />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Users Table */}
                <Route path="/users/table" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <UsersTable />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />


                {/* User Details  */}
                <Route path="/user/:id" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <UserDetails />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Services Table */}
                <Route path="/services/table" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <ServicesTable />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Service Details */}
                <Route path="/service/:id" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <GetServiceById />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Add Service */}
                <Route path="/service/add" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <AddService />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />


                {/* Edit Service */}
                <Route path="/service/edit/:id" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <UpdateServiceById />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Timeslots Table */}
                <Route path="/timeslots/table" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <TimeslotsTable />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                <Route path="/timeslot/:id" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <GetTimeslotById />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                <Route path="/timeslot/add" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <AddTimeslot />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                <Route path="/edit/timeslot/:id" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <UpdateTimeslotById />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Reservations Table */}
                <Route path="/reservations/table" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <ReservationsTable />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />
            </Route>

        </Route>
    )
);

export default Router;
