import banner from "../../assets/bannerbg.png";
import avatar from "../../assets/Avatar.png";
import { ReactComponent as dots } from "../../assets/dots.svg";

import { Avatar, Button, Image, Space } from "antd";

// Custom Icons
import { NotifyIcon } from "../../Icons/notify";
import { MsgIcon } from "../../Icons/msg";

import Icon from "@ant-design/icons";

export const Banner = () => {
  return (
    <>
      <div style={{ position: "relative", gap: "0" }}>
        <Image src={banner} alt="banner" preview={false} />
        <Avatar
          src={avatar}
          alt="avatar"
          shape="circle"
          size={{ md: 40, lg: 64, xl: 133, xxl: 150 }}
          style={{ position: "absolute", left: "18px", bottom: "-67px" }}
        />
      </div>

      {/* Button Group */}
      <Space style={{ width: "100%", justifyContent: "end", marginTop: "1rem", paddingRight: "1.2rem" }}>
        <Button
          shape="circle"
          className="centered removeshadow"
          style={{ background: "transparent", border: "1px solid #536471" }}
        >
          <Icon component={dots} />
        </Button>

        <Button
          shape="circle"
          className="centered"
          style={{ background: "transparent", border: "1px solid #536471" }}
        >
          <MsgIcon style={{ color: "white" }} />
        </Button>

        <Button
          shape="circle"
          className="centered"
          style={{ background: "transparent", border: "1px solid #536471" }}
        >
          <NotifyIcon style={{ color: "white" }} />
        </Button>

        <Button
          style={{
            background: "transparent",
            border: "1px solid #536471",
            color: "white",
            borderRadius: "100px",
          }}
        >
          Following
        </Button>
      </Space>
    </>
  );
};
