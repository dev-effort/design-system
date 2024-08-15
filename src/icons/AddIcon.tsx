import { SvgProps } from './iconType';

const defaultSize = 24;

export const AddIcon = ({ size, width = defaultSize, height = defaultSize, color = '#1C2125', ...props }: SvgProps) => {
  return (
    <svg
      width={size ?? width}
      height={size ?? height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform={`scale(${width / defaultSize}, 1)`}>
        <path
          d="M12 3.99512C12.5523 3.99512 13 4.44283 13 4.99512V10.9951H19C19.5523 10.9951 20 11.4428 20 11.9951C20 12.5474 19.5523 12.9951 19 12.9951H13V18.9951C13 19.5474 12.5523 19.9951 12 19.9951C11.4477 19.9951 11 19.5474 11 18.9951V12.9951H5C4.44772 12.9951 4 12.5474 4 11.9951C4 11.4428 4.44772 10.9951 5 10.9951H11V4.99512C11 4.44283 11.4477 3.99512 12 3.99512Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
