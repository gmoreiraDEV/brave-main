import { SVGProps } from "react";

interface IProps {
    color: string;
}
export default function Logo({
    color,
    ...props
}: IProps & SVGProps<SVGSVGElement>) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1277.05 219.54"
                {...props}
            >
                <g>
                    <path
                        d="m181.84 0-64.1 99.85L52.93 0H0l102.68 154.46h29.27L233.97 0h-52.13zM273.36 0H244.1L141.41 154.46h52.35l64.99-99.86 63.92 99.86h52.71L273.36 0zM425.98 114.6V0h-45.6v154.46h154.65V114.6H425.98zM703.31 39.86V0H545.03v154.46h158.28V114.6H590.44V93.34h107.14V53.48H590.44V39.86h112.87zM869.16 0v89.95L748.6 0h-35.29v154.46h42.16V59.47l130.17 94.99h25.68V0h-42.16zM921.32 0v39.86h70.48v114.6h45.4V39.86h68.56V0H921.32zM1274.04 39.86V0h-158.28v154.46h158.28V114.6h-112.87V93.34h107.14V53.48h-107.14V39.86h112.87zM475.94 193.08c0-9 6.59-16.36 15.49-16.36 5.48 0 10.06 2.69 12.17 7.6l-4.81 3.13c-1.59-3.9-4.38-5.63-7.75-5.63-5.34 0-8.71 4.47-8.71 11.26s3.37 11.26 8.71 11.26c3.37 0 6.16-1.73 7.75-5.63l4.81 3.13c-2.12 4.91-6.69 7.6-12.17 7.6-8.9 0-15.49-7.36-15.49-16.36ZM516.69 193.08c0-8.95 6.54-16.36 15.06-16.36s15.06 7.41 15.06 16.36-6.54 16.36-15.06 16.36-15.06-7.41-15.06-16.36Zm23.72 0c0-6.78-3.46-11.26-8.66-11.26s-8.66 4.52-8.66 11.26 3.42 11.26 8.66 11.26 8.66-4.47 8.66-11.26ZM562.39 177.2h5.44l14.39 21.94V177.2h5.48v31.75h-5.44l-14.38-21.94v21.94h-5.48V177.2ZM602.33 204.53l3.66-3.99c1.73 2.65 5.24 3.99 8.52 3.99 3.7 0 5.63-1.78 5.63-4.33 0-2.07-1.3-3.56-4.38-4.23l-3.9-.87c-5.29-1.15-8.03-4.19-8.03-8.42 0-5.63 4.86-9.96 11.79-9.96 4.38 0 8.8 1.73 10.68 4.52l-3.8 3.8c-1.49-2.31-4.43-3.42-7.12-3.42-3.51 0-5.48 1.88-5.48 4.38 0 2.26 1.59 3.51 4.33 4.14l3.9.87c5.1 1.11 8.08 4.14 8.08 8.52 0 5.58-4.81 9.91-12.17 9.91-4.62 0-9.57-1.78-11.69-4.91ZM641.59 196.21v-19h6.01v19.29c0 5.1 2.55 7.84 6.83 7.84s6.83-2.69 6.83-7.84v-19.29h6.01v19c0 8.42-4.86 13.23-12.85 13.23s-12.85-4.81-12.85-13.23ZM684.4 177.2h6.01v27.04h13.81v4.71H684.4V177.2ZM721.64 181.92h-9.48v-4.71h24.97v4.71h-9.48v27.04h-6.01v-27.04ZM748.92 193.08c0-8.95 6.54-16.36 15.06-16.36s15.06 7.41 15.06 16.36-6.54 16.36-15.06 16.36-15.06-7.41-15.06-16.36Zm23.72 0c0-6.78-3.46-11.26-8.66-11.26s-8.66 4.52-8.66 11.26 3.42 11.26 8.66 11.26 8.66-4.47 8.66-11.26ZM794.63 177.2h9.72c8.71 0 13.52 3.08 13.52 8.76 0 4.28-3.08 7.12-8.37 7.75v.1c5.05.38 7.46 2.36 7.46 7.51v2.16c0 2.45.48 4.19 1.44 5.48h-6.21c-.87-1.01-1.35-2.6-1.35-5v-2.21c0-4.28-1.59-5.82-5.68-5.82h-4.52v13.04h-6.01v-31.75Zm6.01 4.52v9.91h3.56c4.91 0 7.26-1.54 7.26-4.96s-2.36-4.96-7.26-4.96h-3.56ZM834.03 177.2h6.01v31.75h-6.01V177.2ZM865.26 177.2h6.01l11.69 31.75h-6.4l-2.26-6.74h-12.27l-2.31 6.74h-6.11l11.64-31.75Zm-1.88 20.64H873l-4.81-14.1-4.81 14.1ZM936.61 205.06c-2.79 2.89-6.5 4.38-10.63 4.38-6.78 0-11.4-3.9-11.4-9.09 0-4.14 2.98-7.22 7.99-8.9l-.24-.24c-2.17-2.17-3.13-4.28-3.13-6.5 0-4.43 3.85-7.99 9.48-7.99s9.48 3.61 9.48 8.47c0 3.94-2.6 6.54-6.54 8.23l4.71 4.57c2.93-5.92 5.53-7.65 10.01-7.65.72 0 1.25.05 1.88.14l.87 5.1c-.48-.05-.91-.1-1.59-.1-3.32 0-5.87 1.3-8.13 5.39l6.93 6.64-3.9 3.13-5.77-5.58Zm-2.93-2.84-8.71-8.47c-2.74 1.3-4.33 3.46-4.33 5.87 0 3.03 2.55 5.39 6.54 5.39 2.45 0 4.62-.91 6.5-2.79Zm-6.21-12.75 1.68 1.64c2.31-1.35 3.56-3.32 3.56-5.73 0-2.74-1.64-4.62-4.14-4.62-2.21 0-3.8 1.49-3.8 3.85 0 1.97 1.11 3.32 2.69 4.86ZM983.04 177.2h6.01v31.75h-6.01V177.2ZM1006.27 177.2h5.44l14.38 21.94V177.2h5.49v31.75h-5.44l-14.39-21.94v21.94h-5.48V177.2ZM1047.17 193.08c0-8.95 6.54-16.36 15.06-16.36s15.06 7.41 15.06 16.36-6.54 16.36-15.06 16.36-15.06-7.41-15.06-16.36Zm23.72 0c0-6.78-3.46-11.26-8.66-11.26s-8.66 4.52-8.66 11.26 3.42 11.26 8.66 11.26 8.66-4.47 8.66-11.26ZM1088.83 177.2h6.45l8.37 24.58 8.37-24.58h6.11l-11.64 31.75h-6.01l-11.64-31.75ZM1138.1 177.2h6.01l11.69 31.75h-6.4l-2.26-6.74h-12.27l-2.31 6.74h-6.11l11.64-31.75Zm-1.88 20.64h9.62l-4.81-14.1-4.81 14.1ZM1175.15 217.18l1.97-1.88c.72 1.01 1.83 1.59 2.98 1.59 1.3 0 2.21-.63 2.21-1.78 0-1.35-1.15-2.21-3.27-2.6l1.35-3.27c-7.6-1.25-12.99-8.03-12.99-16.17 0-9 6.59-16.36 15.49-16.36 5.49 0 10.06 2.69 12.17 7.6l-4.81 3.13c-1.59-3.9-4.38-5.63-7.75-5.63-5.34 0-8.71 4.47-8.71 11.26s3.37 11.26 8.71 11.26c3.37 0 6.16-1.73 7.75-5.63l4.81 3.13c-2.12 4.91-6.69 7.6-12.17 7.6h-.1l-.63 1.64c2.31.53 3.75 2.02 3.75 4.04 0 2.65-2.21 4.43-5.39 4.43-2.26 0-4.38-.87-5.39-2.36ZM1217.63 177.2h6.01l11.69 31.75h-6.4l-2.26-6.74h-12.27l-2.31 6.74h-6.11l11.64-31.75Zm.29-9c.91 0 1.73.24 2.69.63 1.11.48 2.02.87 2.93.87 1.49 0 2.31-1.01 2.69-2.93h2.84c-.62 4.33-2.84 6.78-5.68 6.78-.91 0-1.73-.24-2.69-.63-1.11-.48-2.02-.87-2.93-.87-1.49 0-2.31 1.01-2.69 2.93h-2.84c.63-4.33 2.84-6.78 5.68-6.78Zm-2.17 29.64h9.62l-4.81-14.1-4.81 14.1ZM1246.93 193.08c0-8.95 6.54-16.36 15.06-16.36s15.06 7.41 15.06 16.36-6.54 16.36-15.06 16.36-15.06-7.41-15.06-16.36Zm23.72 0c0-6.78-3.46-11.26-8.66-11.26s-8.66 4.52-8.66 11.26 3.42 11.26 8.66 11.26 8.66-4.47 8.66-11.26Z"
                        className={color}
                    />
                </g>
            </svg>
        </>
    );
}
