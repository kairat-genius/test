import type { IconName } from './type'
import type {SVGProps } from 'react';
import "./Icon.css"
import clsx from "clsx";

interface IconProps extends SVGProps<SVGSVGElement> {
    icon: IconName;
    className?: string;
}

const Icon = ({icon, className='', ...props}: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx('icon', className)}
            {...props}
        >
            <use xlinkHref={`/svg/sprites.svg#${icon}`} />
        </svg>
    );
};

export default Icon