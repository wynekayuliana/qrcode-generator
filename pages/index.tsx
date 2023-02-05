import { useEffect, useState } from 'react';
import {
  Popover, Form, InputNumber, Select, Divider, Input, Switch,
  Row, Col, Card
} from 'antd';
import type { InputProps, SelectProps, SwitchProps, InputNumberProps } from 'antd';
import { SmileFilled, CopyrightOutlined } from '@ant-design/icons';
import Head from 'next/head';
import Link from 'next/link';
import { useQRCode } from 'next-qrcode';
import { HexAlphaColorPicker } from "react-colorful";

const FormItem = Form.Item

const content = {
  marginTop: '45px',
}

export default function Home() {
  const { Canvas, Image } = useQRCode();
  const [renderVal, setRenderVal] = useState("Canvas");
  const [textVal, setTextVal] = useState("https://www.instagram.com/ekayulianapd");
  const [includeOptionsVal, setIncludeOptionsVal] = useState(true);
  const [optionTypeVal, setOptionTypeVal] = useState('image/png');
  const [optionQualityVal, setOptionQualityVal] = useState(0.92);
  const [optionLevelVal, setOptionLevelVal] = useState('M');
  const [optionMarginVal, setOptionMarginVal] = useState(2);
  const [optionScaleVal, setOptionScaleVal] = useState(5);
  const [optionWidthVal, setOptionWidthVal] = useState(150);
  const [optionDarkColorVal, setOptionDarkColorVal] = useState("#000000");
  const [optionLightColorVal, setOptionLightColorVal] = useState("#fbfbfb");
  const [includeLogoVal, setIncludeLogoVal] = useState(true);
  const [logoVal, setLogoVal] = useState("https://wynekayuliana.github.io/qrcode-generator/assets/smiling-face.png"); // http://localhost:3000 || https://wynekayuliana.github.io/qrcode-generator
  const [includeLogoOptionVal, setIncludeLogoOptionVal] = useState(true);
  const [optionLogoWidthVal, setOptionLogoWidthVal] = useState(35);
  const [optionLogoXVal, setOptionLogoXVal] = useState(58);
  const [optionLogoYVal, setOptionLogoYVal] = useState(58);

  const [form] = Form.useForm<{
    render: string;
    text: string;
    optionType: string;
    optionQuality: number;
    optionLevel: string;
    optionMargin: number;
    optionScale: number;
    optionWidth: number;
    optionDarkColor: string;
    optionLightColor: string;
    logo: string;
    optionLogoWidth: number;
    optionLogoX: number;
    optionLogoY: number;
  }>();

  useEffect(() => {
    form.setFieldsValue({
      render: renderVal,
      text: textVal,
      optionType: optionTypeVal,
      optionQuality: optionQualityVal,
      optionLevel: optionLevelVal,
      optionMargin: optionMarginVal,
      optionScale: optionScaleVal,
      optionWidth: optionWidthVal,
      optionDarkColor: optionDarkColorVal,
      optionLightColor: optionLightColorVal,
      logo: logoVal,
      optionLogoWidth: optionLogoWidthVal,
      optionLogoX: optionLogoXVal,
      optionLogoY: optionLogoYVal,
    });
  }, []);

  // onChange function
  const onRenderChange: SelectProps["onChange"] = (value, option) => {
    setRenderVal(value);
  }

  const onTextChange: InputProps["onChange"] = (event) => {
    setTextVal(event.target.value);
  }

  const onIncludeOptionsChange: SwitchProps["onChange"] = (checked) => {
    setIncludeOptionsVal(checked);
  }

  const onOptionTypeChange: SelectProps["onChange"] = (value, option) => {
    setOptionTypeVal(value);
  };

  const onOptionQualityChange: InputNumberProps["onChange"] = (value) => {
    if (!value) {
      return
    }
    setOptionQualityVal(Number(Number(value).toFixed(2)));
  }

  const onOptionLevelChange: SelectProps["onChange"] = (value, option) => {
    setOptionLevelVal(value);
  };

  const onOptionMarginChange: InputNumberProps["onChange"] = (value) => {
    if (!value) {
      return
    }
    setOptionMarginVal(Number(value));
  }

  const onOptionScaleChange: InputNumberProps["onChange"] = (value) => {
    if (!value) {
      return
    }
    setOptionScaleVal(Number(Number(value).toFixed(2)));
  }

  const onOptionWidthChange: InputNumberProps["onChange"] = (value) => {
    if (!value) {
      return
    }
    setOptionWidthVal(Number(value));
  }

  const onOptionDarkColorChange: InputProps["onChange"] = (event) => {
    setOptionDarkColorVal(event.target.value);
  }

  const onOptionDarkColorPickerChange = (color: string) => {
    setOptionDarkColorVal(color);
    form.setFieldsValue({
      optionDarkColor: color
    });
  }

  const onOptionLightColorChange: InputProps["onChange"] = (event) => {
    setOptionLightColorVal(event.target.value);
  }

  const onOptionLightColorPickerChange = (color: string) => {
    setOptionLightColorVal(color);
    form.setFieldsValue({
      optionLightColor: color
    });
  }

  const onIncludeLogoChange: SwitchProps["onChange"] = (checked) => {
    setIncludeLogoVal(checked);
  }

  const onLogoChange: InputProps["onChange"] = (event) => {
    setLogoVal(event.target.value);
  }

  const onIncludeLogoOptionChange: SwitchProps["onChange"] = (checked) => {
    setIncludeLogoOptionVal(checked);
  }

  const onOptionLogoWidthChange: InputNumberProps["onChange"] = (value) => {
    if (!value) {
      return
    }
    setOptionLogoWidthVal(Number(Number(value).toFixed(2)));
  }

  const onOptionLogoXChange: InputNumberProps["onChange"] = (value) => {
    if (!value) {
      return
    }
    setOptionLogoXVal(Number(Number(value).toFixed(2)));
  }

  const onOptionLogoYChange: InputNumberProps["onChange"] = (value) => {
    if (!value) {
      return
    }
    setOptionLogoYVal(Number(Number(value).toFixed(2)));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  const canvasProps = {
    text: textVal, // required
    ...(includeOptionsVal ? {
      options: {
        level: optionLevelVal,
        margin: optionMarginVal,
        scale: optionScaleVal,
        width: optionWidthVal,
        color: {
          dark: optionDarkColorVal,
          light: optionLightColorVal,
        }
      }
    } : {}),
    ...(includeLogoVal ? {
      logo: {
        src: logoVal,
        ...(includeLogoOptionVal ? {
          options: {
            width: optionLogoWidthVal,
            x: optionLogoXVal,
            y: optionLogoYVal,
          }
        } : {})
      }
    } : {})
  };

  const imageProps = {
    text: textVal, // required
    ...(includeOptionsVal ? {
      options: {
        type: optionTypeVal,
        quality: optionQualityVal,
        level: optionLevelVal,
        margin: optionMarginVal,
        scale: optionScaleVal,
        width: optionWidthVal,
        color: {
          dark: optionDarkColorVal,
          light: optionLightColorVal,
        }
      }
    } : {}),
  };

  return (
    <div style={content}>

      <Head>
        <title>QR Code Generator | Eka Yuliana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center mb-5">
        <Link href="#" className="logo mr-0">
          <SmileFilled style={{ fontSize: 48 }} />
        </Link>

        <p className="mb-0 mt-3 text-disabled">QR Code Generator</p>

      </div>

      <div className="container">
        <Row>
          <Col xs={{ span: 22, offset: 1 }} lg={{ span: 16, offset: 4 }}>
            <Form
              form={form}
              layout="vertical"
              size={'large'}
            >
              <Card hoverable>

                <Row gutter={8}>

                  <Col span={24}>
                    <FormItem name="render" label="Render">
                      <Select
                        className="width-100-pc"
                        onChange={onRenderChange}
                        options={[
                          {
                            value: 'Canvas',
                            label: 'Canvas',
                          },
                          {
                            value: 'Image',
                            label: 'Image',
                          },
                        ]}
                      />
                    </FormItem>
                  </Col>

                  <Col span={24}>
                    <FormItem name="text" label="Text">
                      <Input
                        className="width-100-pc"
                        onChange={onTextChange}
                      />
                    </FormItem>
                  </Col>

                </Row>

              </Card>

              <div className="mt-5 mb-3">
                Include Options?&nbsp;<Switch onChange={onIncludeOptionsChange} defaultChecked />
              </div>

              <Divider plain orientation="left"><strong>Options</strong></Divider>

              <Card hoverable={includeOptionsVal}>

                <Row gutter={8}>

                  {renderVal === "Image" ? // additional option for render image
                    <>
                      <Col span={24}>
                        <FormItem name="optionType" label="Type">
                          <Select
                            className="width-100-pc"
                            onChange={onOptionTypeChange}
                            options={[
                              {
                                value: 'image/png',
                                label: 'image/png',
                              },
                              {
                                value: 'image/jpeg',
                                label: 'image/jpeg',
                              },
                              {
                                value: 'image/webp',
                                label: 'image/webp',
                              },
                            ]}
                            disabled={!includeOptionsVal}
                          />
                        </FormItem>
                      </Col>

                      <Col span={24}>
                        <FormItem name="optionQuality" label="Quality">
                          <InputNumber
                            className="width-100-pc"
                            onChange={onOptionQualityChange}
                            min={0}
                            max={1}
                            step={0.01}
                            controls
                            disabled={!includeOptionsVal}
                          />
                        </FormItem>
                      </Col>
                    </>
                    : null}

                  <Col span={24}>
                    <FormItem name="optionLevel" label="Level">
                      <Select
                        className="width-100-pc"
                        onChange={onOptionLevelChange}
                        options={[
                          {
                            value: 'L',
                            label: 'Low',
                          },
                          {
                            value: 'M',
                            label: 'Medium',
                          },
                          {
                            value: 'Q',
                            label: 'Quartile',
                          },
                          {
                            value: 'H',
                            label: 'High',
                          },
                        ]}
                        disabled={!includeOptionsVal}
                      />
                    </FormItem>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <FormItem name="optionMargin" label="Margin">
                      <InputNumber
                        className="width-100-pc"
                        onChange={onOptionMarginChange}
                        min={1}
                        controls
                        disabled={!includeOptionsVal}
                      />
                    </FormItem>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <FormItem name="optionScale" label="Scale">
                      <InputNumber
                        className="width-100-pc"
                        onChange={onOptionScaleChange}
                        min={1}
                        controls
                        disabled={!includeOptionsVal}
                      />
                    </FormItem>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <FormItem name="optionWidth" label="Width">
                      <InputNumber
                        className="width-100-pc"
                        onChange={onOptionWidthChange}
                        min={1}
                        controls
                        disabled={!includeOptionsVal}
                      />
                    </FormItem>
                  </Col>

                  <Col lg={12} md={12} sm={24} xs={24}>
                    <FormItem name="optionDarkColor" label="Dark Color">
                      <Input
                        className="width-100-pc"
                        onChange={onOptionDarkColorChange}
                        addonAfter={
                          includeOptionsVal ?
                            <Popover
                              trigger="click"
                              placement="bottomRight"
                              content={<HexAlphaColorPicker color={optionDarkColorVal} onChange={onOptionDarkColorPickerChange} />}
                            >
                              <div style={{ backgroundColor: optionDarkColorVal, width: 90, height: 30 }} />
                            </Popover>
                            : null
                        }
                        disabled={!includeOptionsVal}
                      />
                    </FormItem>
                  </Col>

                  <Col lg={12} md={12} sm={24} xs={24}>
                    <FormItem name="optionLightColor" label="Light Color">
                      <Input
                        className="width-100-pc"
                        onChange={onOptionLightColorChange}
                        addonAfter={
                          includeOptionsVal ?
                            <Popover
                              trigger="click"
                              placement="bottomRight"
                              content={<HexAlphaColorPicker color={optionLightColorVal} onChange={onOptionLightColorPickerChange} />}
                            >
                              <div style={{ backgroundColor: optionLightColorVal, width: 90, height: 30 }} />
                            </Popover>
                            : null
                        }
                        disabled={!includeOptionsVal}
                      />
                    </FormItem>
                  </Col>

                </Row>

              </Card>

              {renderVal === "Canvas" ?

                <div>
                  <div className="mt-5 mb-3">
                    Include Logo?&nbsp;<Switch onChange={onIncludeLogoChange} defaultChecked />
                  </div>

                  <Divider plain orientation="left"><strong>Logo</strong></Divider>

                  <Card hoverable={includeLogoVal}>

                    <FormItem name="logo" label="Source">
                      <Input
                        className="width-100-pc"
                        onChange={onLogoChange}
                        disabled={!includeLogoVal}
                      />
                    </FormItem>

                    <div className="mt-5 mb-3">
                      Include Options?&nbsp;<Switch onChange={onIncludeLogoOptionChange} defaultChecked />
                    </div>

                    <Divider plain orientation="left"><strong>Options</strong></Divider>

                    <Card>

                      <Row gutter={8}>

                        <Col lg={8} md={8} sm={24} xs={24}>
                          <FormItem name="optionLogoWidth" label="Width">
                            <InputNumber
                              className="width-100-pc"
                              onChange={onOptionLogoWidthChange}
                              min={1}
                              controls
                              disabled={!includeLogoVal || !includeLogoOptionVal}
                            />
                          </FormItem>
                        </Col>

                        <Col lg={8} md={8} sm={24} xs={24}>
                          <FormItem name="optionLogoX" label="X">
                            <InputNumber
                              className="width-100-pc"
                              onChange={onOptionLogoXChange}
                              min={1}
                              controls
                              disabled={!includeLogoVal || !includeLogoOptionVal}
                            />
                          </FormItem>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                          <FormItem name="optionLogoY" label="Y">
                            <InputNumber
                              className="width-100-pc"
                              onChange={onOptionLogoYChange}
                              min={1}
                              controls
                              disabled={!includeLogoVal || !includeLogoOptionVal}
                            />
                          </FormItem>
                        </Col>

                      </Row>

                    </Card>

                  </Card>
                </div>

                : null}

            </Form>

            <Divider plain orientation="left"><strong>Result</strong></Divider>

            <Card hoverable>

              <div className="text-center">
                <div className="m-5">
                  {{
                    "Canvas": // if Canvas selected
                      <Canvas
                        {...canvasProps}
                      />
                    , "Image": // If image selected
                      <Image
                        {...imageProps}
                      />
                  }[renderVal]}
                </div>

                <div>
                  Just right click on QR Code and select "Save Image As..."
                </div>
              </div>

            </Card>

          </Col>
        </Row>
      </div>

      <footer className="mt-5">
        <div className="container footer">
          Thanks to <a href="https://www.instagram.com/ekayulianapd" target="_blank">Eka Yuliana</a>
          &nbsp;<CopyrightOutlined /> 2023
          <br />All Rights Reserved
        </div>
      </footer>

    </div>
  )
}
