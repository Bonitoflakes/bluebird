import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const notifySvg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.6532 12.0822C4.7013 13.5734 5.92457 14.7692 7.43648 14.7692C8.94839 14.7692 10.1717 13.5734 10.2198 12.0822"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M7.43648 1.23077C5.07927 1.23077 3.05195 2.90074 2.5915 5.20984L1.23077 12.0822H13.6353L12.9549 8.63226"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path d="M11.608 1.23077V6.9073" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
    <path d="M14.4463 4.06903H8.76971" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
  </svg>
);

export const NotifyIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={notifySvg} {...props} />
);
