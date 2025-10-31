import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../@components";
import { AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export default function HomeLayout() {
/**
 * HomeLayout Component
 * --------------------
 * 
 * Defines the main page layout structure for the application's public routes.
 * 
 * Features:
 * - Wraps all routed content with a shared `Navbar` and `Footer`.
 * - Uses `AnimatePresence` from Framer Motion to enable smooth page transitions.
 * - The `Outlet` component renders child routes dynamically based on the current path.
 * - The `key={location.pathname}` ensures animations trigger on route changes.
 * 
 * Example:
 * ```jsx
 * <Route element={<HomeLayout />}>
 *   <Route index element={<HomePage />} />
 *   <Route path="about" element={<AboutPage />} />
 * </Route>
 * ```
 */
    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait">
                <main className={`min-h-screen flex flex-col`}>
                    <Navbar />
                    <div key={location.pathname}>
                        <Outlet />
                    </div>
                    <Footer />
                </main>
            </AnimatePresence>
        </>
    )
}