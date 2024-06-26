import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const dotsSvg = () => (
  <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.33818 2.59988C2.07723 2.59988 2.67636 2.01786 2.67636 1.29992C2.67636 0.581977 2.07723 0 1.33818 0C0.599123 0 0 0.581977 0 1.29992C0 2.01786 0.599123 2.59988 1.33818 2.59988Z"
      fill="currentColor"
    />
    <path
      d="M6.5225 2.59988C7.26156 2.59988 7.86068 2.01786 7.86068 1.29992C7.86068 0.581977 7.26156 0 6.5225 0C5.78345 0 5.18433 0.581977 5.18433 1.29992C5.18433 2.01786 5.78345 2.59988 6.5225 2.59988Z"
      fill="currentColor"
    />
    <path
      d="M11.7154 2.59988C12.4544 2.59988 13.0536 2.01786 13.0536 1.29992C13.0536 0.581977 12.4544 0 11.7154 0C10.9763 0 10.3772 0.581977 10.3772 1.29992C10.3772 2.01786 10.9763 2.59988 11.7154 2.59988Z"
      fill="currentColor"
    />
  </svg>
);

export const DotIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={dotsSvg} {...props} />;
