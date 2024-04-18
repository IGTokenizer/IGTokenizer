import { FC } from 'react'
import { IconProps } from './IconProps'

const CloseIcon: FC<IconProps> = ({ fillPrimary, fillSecondary, className, size }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            // fill="#FFFFFF" 
            className={className}
            fill={fillPrimary}
            style={{
                height: size,
                width: size
            }}
        >
            <defs>
                {/* <!-- <style>.fa-secondary{opacity:.4}</style> --> */}
            </defs>

            <path
                fill={fillPrimary}
                d="M.335.335c.446-.446 1.17-.446 1.616 0L8 6.384 14.049.335c.446-.446 1.17-.446 1.616 0s.446 1.17 0 1.616L9.616 8l6.049 6.049c.446.446.446 1.17 0 1.616s-1.17.446-1.616 0L8 9.616l-6.049 6.049c-.446.446-1.17.446-1.616 0s-.446-1.17 0-1.616L6.384 8 .335 1.951c-.446-.446-.446-1.17 0-1.616"
            />
        </svg>
    )
}
export default CloseIcon