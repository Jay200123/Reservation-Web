import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { MotionWrapper, ProtectedRoutes } from "./@components";
import { HomeLayout } from "./@layouts";
import {
    Home,
    SignIn,
    SignUp,
    Profile,
    Dashboard,
} from "./@pages";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/*Public Routes here */}
            <Route element={<HomeLayout />}>
                <Route index path="/" element={
                    <MotionWrapper>
                        <Home />
                    </MotionWrapper>
                } />

                <Route path="/signin" element={
                    <MotionWrapper>
                        <SignIn />
                    </MotionWrapper>
                } />

                <Route path="/signup" element={
                    <MotionWrapper>
                        <SignUp />
                    </MotionWrapper>
                } />

                {/* Private Routes here */}
                <Route path="/profile" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <Profile />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />

                <Route path="/dashboard" element={
                    <ProtectedRoutes>
                        <MotionWrapper>
                            <Dashboard />
                        </MotionWrapper>
                    </ProtectedRoutes>
                } />
            </Route>

            {/* Private Routes here */}
        </Route>
    )
);

export default Router;
