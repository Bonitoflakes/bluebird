import { Link } from "react-router-dom";

import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

import { useConfig } from "@hooks/useConfig";

const LogoSvg = () => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 2.8509C28.8968 3.31954 27.6962 3.65682 26.4596 3.78818C27.7435 3.03706 28.7049 1.85043 29.1636 0.450902C27.9588 1.15666 26.6389 1.65155 25.2626 1.91362C24.6873 1.30804 23.9916 0.825599 23.2187 0.496372C22.4459 0.167145 21.6124 -0.00181698 20.7703 1.47351e-05C17.3633 1.47351e-05 14.6232 2.71954 14.6232 6.05682C14.6232 6.52545 14.6809 6.99409 14.7747 7.44498C9.67312 7.18226 5.12318 4.78226 2.09831 1.10771C1.54714 2.03474 1.25831 3.09028 1.26187 4.16451C1.26187 6.26628 2.34707 8.11954 4.00192 9.20948C3.0267 9.17166 2.0743 8.90769 1.22221 8.43906V8.51362C1.22221 11.4568 3.33494 13.8959 6.1507 14.4568C5.62201 14.592 5.07814 14.6612 4.53191 14.6627C4.13172 14.6627 3.75315 14.6237 3.37099 14.5704C4.14974 16.9704 6.4175 18.7136 9.11789 18.7704C7.00517 20.4 4.35885 21.3586 1.4854 21.3586C0.969835 21.3586 0.493931 21.3408 0 21.284C2.72563 23.0059 5.95962 24 9.44237 24C20.7487 24 26.9355 14.7763 26.9355 6.77043C26.9355 6.5077 26.9355 6.24498 26.9174 5.98226C28.1144 5.11954 29.1636 4.0509 30 2.8509Z"
        fill="currentColor"
      />
    </svg>
  );
};

const LogoIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={LogoSvg} {...props} />;

export const Logo = ({ size = 2.5 }: { size?: number }) => {
  const { token } = useConfig();

  return (
    <Link to="/">
      <LogoIcon style={{ color: token.colorPrimary, fontSize: `${size}rem` }} />
    </Link>
  );
};
