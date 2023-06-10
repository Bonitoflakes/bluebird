import { Space, Radio, Checkbox, Switch, Button, Select } from "antd";

export const ConfigCheck = () => {
  const options = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "yiminghe" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];

  return (
    <div>
      <Space direction="vertical">
        <Space wrap>
          <Space>
            <Radio />
            <Checkbox />
            <Switch />
          </Space>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
        <Space wrap>
          <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
          <Select defaultValue="lucy" style={{ width: 120 }} disabled options={options} />
          <Select defaultValue="lucy" style={{ width: 120 }} loading options={options} />
          <Select defaultValue="lucy" style={{ width: 120 }} allowClear options={options} />
        </Space>
      </Space>
    </div>
  );
};
