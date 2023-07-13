import './Body.css'
import { motion, useScroll } from "framer-motion";

export default function Footer(props) {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div>
                {props.children}
            </div>
        </>
    )
}