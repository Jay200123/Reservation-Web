import Navbar from "./Navbar";
import UserSidebar from "./UserSidebar";
import ServiceSidebar from "./ServiceSidebar";
import Footer from "./Footer";
import MotionWrapper from "./MotionWrapper";
import ProtectedRoutes from "./ProtectedRoutes";

/**
 * Centralized component exports
 * -----------------------------
 * This file acts as a barrel export for commonly used layout and navigation components.
 *
 * Components exported:
 * - `Navbar`: Top navigation bar for main site navigation.
 * - `UserSidebar`: Sidebar for user-specific navigation and shortcuts.
 * - `Footer`: Footer section displayed at the bottom of pages.
 * - `MotionWrapper`: Wrapper component providing animated page transitions.
 * - `ProtectedRoutes`: Component for guarding routes based on authentication or role access.
 *
 * Purpose:
 * Simplifies imports across the app by allowing grouped exports.
 * Example:
 * ```ts
 * import { Navbar, Footer } from "@/components/layout";
 * ```
 */

export {
  Navbar,
  UserSidebar,
  ServiceSidebar,
  Footer,
  MotionWrapper,
  ProtectedRoutes,
};
