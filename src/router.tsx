import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { MotionWrapper } from "./@components";
import { HomeLayout } from "./@layouts";
import { Home, SignIn, SignUp } from "./@pages";

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
            </Route>

            {/* Private Routes here */}
        </Route>
    )
);

export default Router;
