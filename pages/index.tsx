import { useEffect, useState } from 'react';
import {
  Button, DatePicker, Form, InputNumber, Select, Divider, Input, Switch,
  Row, Col, Card
} from 'antd';
import type { InputProps, SelectProps, SwitchProps, InputNumberProps } from 'antd';
import { SmileFilled, CopyrightOutlined } from '@ant-design/icons';
import Head from 'next/head';
import Link from 'next/link';
import { useQRCode } from 'next-qrcode';

const FormItem = Form.Item

const content = {
  marginTop: '45px',
}

export default function Home() {
  const { Canvas, Image } = useQRCode();
  const [renderVal, setRenderVal] = useState("Canvas");
  const [textVal, setTextVal] = useState("https://www.instagram.com/ekayulianapd");
  const [includeOptionsVal, setIncludeOptionsVal] = useState(true);
  const [optionLevelVal, setOptionLevelVal] = useState('M');
  const [optionMarginVal, setOptionMarginVal] = useState(2);
  const [optionScaleVal, setOptionScaleVal] = useState(5);
  const [optionWidthVal, setOptionWidthVal] = useState(150);
  const [includeLogoVal, setIncludeLogoVal] = useState(true);
  const [logoVal, setLogoVal] = useState("http://localhost:3000/favicon.ico");
  const [includeLogoOptionVal, setIncludeLogoOptionVal] = useState(true);
  const [optionLogoWidthVal, setOptionLogoWidthVal] = useState(35);
  const [optionLogoXVal, setOptionLogoXVal] = useState(58);
  const [optionLogoYVal, setOptionLogoYVal] = useState(58);

  const [form] = Form.useForm<{
    render: string;
    text: string;
    optionLevel: string;
    optionMargin: number;
    optionScale: number;
    optionWidth: number;
    logo: string;
    optionLogoWidth: number;
    optionLogoX: number;
    optionLogoY: number;
  }>();

  useEffect(() => {
    form.setFieldsValue({
      render: renderVal,
      text: textVal,
      optionLevel: optionLevelVal,
      optionMargin: optionMarginVal,
      optionScale: optionScaleVal,
      optionWidth: optionWidthVal,
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
          dark: '#010599FF',
          light: '#FFBF60FF',
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

                <FormItem name="text" label="Text">
                  <Input
                    className="width-100-pc"
                    onChange={onTextChange}
                  />
                </FormItem>

              </Card>

              <FormItem name="includeOptions" label="Include Options" noStyle>
                <div style={{ marginTop: 45, marginBottom: 18 }}>
                  Include Options?&nbsp;<Switch onChange={onIncludeOptionsChange} defaultChecked />
                </div>
              </FormItem>

              <Divider plain orientation="left"><strong>Options</strong></Divider>

              <Card hoverable={includeOptionsVal}>

                <FormItem name="optionLevel" label="Quality">
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

                <FormItem name="optionMargin" label="Margin">
                  <InputNumber
                    className="width-100-pc"
                    onChange={onOptionMarginChange}
                    min={1}
                    controls
                    disabled={!includeOptionsVal}
                  />
                </FormItem>

                <FormItem name="optionScale" label="Scale">
                  <InputNumber
                    className="width-100-pc"
                    onChange={onOptionScaleChange}
                    min={1}
                    controls
                    disabled={!includeOptionsVal}
                  />
                </FormItem>

                <FormItem name="optionWidth" label="Width">
                  <InputNumber
                    className="width-100-pc"
                    onChange={onOptionWidthChange}
                    min={1}
                    controls
                    disabled={!includeOptionsVal}
                  />
                </FormItem>

              </Card>

              <FormItem label="Include Logo" noStyle>
                <div style={{ marginTop: 45, marginBottom: 18 }}>
                  Include Logo?&nbsp;<Switch onChange={onIncludeLogoChange} defaultChecked />
                </div>
              </FormItem>

              <Divider plain orientation="left"><strong>Logo</strong></Divider>

              <Card hoverable={includeLogoVal}>

                <FormItem name="logo" label="Source">
                  <Input
                    className="width-100-pc"
                    onChange={onLogoChange}
                    disabled={!includeLogoVal}
                  />
                </FormItem>

                <FormItem label="Include Logo Options" noStyle>
                  <div style={{ marginTop: 45, marginBottom: 18 }}>
                    Include Options?&nbsp;<Switch onChange={onIncludeLogoOptionChange} defaultChecked />
                  </div>
                </FormItem>

                <Divider plain orientation="left"><strong>Options</strong></Divider>

                <Card>

                  <FormItem name="optionLogoWidth" label="Width">
                    <InputNumber
                      className="width-100-pc"
                      onChange={onOptionLogoWidthChange}
                      min={1}
                      controls
                      disabled={!includeLogoVal || !includeLogoOptionVal}
                    />
                  </FormItem>

                  <FormItem name="optionLogoX" label="X">
                    <InputNumber
                      className="width-100-pc"
                      onChange={onOptionLogoXChange}
                      min={1}
                      controls
                      disabled={!includeLogoVal || !includeLogoOptionVal}
                    />
                  </FormItem>

                  <FormItem name="optionLogoY" label="Y">
                    <InputNumber
                      className="width-100-pc"
                      onChange={onOptionLogoYChange}
                      min={1}
                      controls
                      disabled={!includeLogoVal || !includeLogoOptionVal}
                    />
                  </FormItem>

                </Card>

              </Card>

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
                    ,
                    "Image": // If image selected
                      <Image
                        text={'https://github.com/bunlong/next-qrcode'}
                        options={{
                          type: 'image/jpeg',
                          quality: 0.3,
                          level: 'M',
                          margin: 3,
                          scale: 4,
                          width: 200,
                          color: {
                            dark: '#010599FF',
                            light: '#FFBF60FF',
                          },
                        }}
                      />
                  }[renderVal]}
                </div>

                <p>
                  Just right click on QR Code and select "Save Image As..."
                </p>
              </div>

            </Card>

          </Col>
        </Row>
      </div>
      <footer className="mt-5">
        Thanks to <a href="https://www.instagram.com/ekayulianapd" target="_blank">Eka Yuliana</a>
        &nbsp;<CopyrightOutlined /> 2023
        &nbsp;All Right Reserved
      </footer>
    </div>
  )
}
