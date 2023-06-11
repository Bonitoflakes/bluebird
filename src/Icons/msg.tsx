import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const msgSvg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.23077 4.63751L8.00276 8.49149L14.7692 4.64302"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M13.2552 1.84613H2.74484C1.90864 1.84613 1.23077 2.524 1.23077 3.36019V12.7088C1.23077 13.545 1.90864 14.2229 2.74484 14.2229H13.2552C14.0914 14.2229 14.7692 13.545 14.7692 12.7088V3.36019C14.7692 2.524 14.0914 1.84613 13.2552 1.84613Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);

export const MsgIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={msgSvg} {...props} />;
