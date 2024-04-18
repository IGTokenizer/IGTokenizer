import { FC } from 'react'
import { IconProps } from './IconProps'

const DownIcon: FC<IconProps> = ({ fillPrimary, fillSecondary, className, size }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={className}
            fill={fillPrimary}
            style={{
                height: size,
                width: size
            }}
        >
            <path
                opacity=".4"
                d="M201.4 278.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 210.7 86.6 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            />
            <path
                d="M201.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 86.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            />
        </svg>
    )
}
export default DownIcon