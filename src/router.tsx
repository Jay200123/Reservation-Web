import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { MotionWrapper, ProtectedRoutes } from "./@components";
import { HomeLayout, UserLayout } from "./@layouts";
import {
    Home,
    About,
    Contact,
    SignIn,
    SignUp,
    Profile,
    EditProfile,
    ServiceDetails,
    Checkout,
    ReservationForms,
    UserReservations,
    RescheduleReservation,
    Dashboard,
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

                {/* Admin Dashboard Route  */}
                <Route path="/dashboard" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <Dashboard />
                        </MotionWrapper>
                    </ProtectedRoutes>
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

                {/* Checkout Form */}
                <Route path="/checkout" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <Checkout />
                        </MotionWrapper>
                    </ProtectedRoutes>

                } />
            </Route>

            {/* Private Routes here */}

            {/* User Routes */}
            <Route element={<UserLayout />}>
                {/* Profile Route */}
                <Route path="/profile" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <Profile />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Edit Profile Route */}
                <Route path="/edit/profile/:id" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <EditProfile />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* User Reservations route  */}
                <Route path="reservations/:user_id" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <UserReservations />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                {/* Reschedule Reservation route */}
                <Route path="reservation/reschedule/:id" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <RescheduleReservation />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />
            </Route>

        </Route>
    )
);

export default Router;
