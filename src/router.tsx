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
    ServicesTable,
    TimeslotsTable,
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

                {/* Services Table */}
                <Route path="/services/table" element={
                    <ProtectedRoutes userRole={["ADMIN"]}>
                        <MotionWrapper>
                            <ServicesTable />
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
