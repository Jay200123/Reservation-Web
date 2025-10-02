import type { ReactNode } from "react";
import { motion } from "motion/react";
import { pageVariants, pageTransition } from "../../@utils";

type MotionWrapperProp = {
    children: ReactNode;
};



export default function MotionWrapper({ children }: MotionWrapperProp) {
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </>
    )
}