import HomeLayout from "./Homelayout";
import UserLayout from "./UserLayout";
import ServiceLayout from "./ServicesLayout";
/**
 * Layout Exports
 * ---------------
 *
 * Centralized export file for all application layout components.
 *
 * Components:
 * - `HomeLayout`: Public-facing layout with Navbar and Footer.
 * - `UserLayout`: Authenticated user layout with sidebar and content outlet.
 *
 * Purpose:
 * Simplifies import paths throughout the project by re-exporting layouts.
 *
 * Example:
 * ```tsx
 * import { HomeLayout, UserLayout } from "@/layouts";
 * ```
 */
export { 
    HomeLayout, 
    UserLayout,
    ServiceLayout
 };
