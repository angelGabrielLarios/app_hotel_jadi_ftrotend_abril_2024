import { SVGAttributes } from "react"


export const IconErrorInput = ({ width = 24, height = 24 }: { width: number, height: number }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exclamation-circle stroke-error" width={width} height={height} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 9v4" />
            <path d="M12 16v.01" />
        </svg>
    )
}


export const IconMapPin = ({ className }: SVGAttributes<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-map-pin-filled ${className}`} viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" strokeWidth={0} fill="currentColor" />
        </svg>
    )
}
