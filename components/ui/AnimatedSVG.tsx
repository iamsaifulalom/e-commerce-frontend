import { motion } from "framer-motion";

export default function AnimatedSVG() {

    return (
        <svg width="94" height="40" viewBox="0 0 94 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_43_472)">
                <motion.path
                    stroke="#FF392B"
                    strokeWidth="3"
                    fill="none"
                    d="M4.29639 30.5C7.76661 29.8005 15.5744 26.0515 21.5692 16.5965C23.0176 14.3122 24.3805 11.942 26.2569 9.9938C36.6412 -0.787839 50.6728 -3.13624 64.2586 13.8392C76.0926 28.6257 85.2146 28.3306 88.2964 26.3348"
                    initial="hidden"
                    animate="visible"
                />
            </g>
            <defs>
                <filter id="filter0_d_43_472" x="0" y="0" width="93.1118" height="39.9705" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.223529 0 0 0 0 0.168627 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_472" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_472" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
