import {
  Button, DatePicker, Form, InputNumber, Select, Divider, Input, Switch,
  Row, Col, Card
} from 'antd';
import type { DatePickerProps } from 'antd';
import { SmileFilled } from '@ant-design/icons';
import Head from 'next/head';
import Link from 'next/link';

const FormItem = Form.Item

const content = {
  marginTop: '45px',
}

export default function Home() {
  const onDatePickerChange: DatePickerProps['onChange'] = (
    date,
    dateString
  ) => {
    console.log(date, dateString)
  }

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
              layout="vertical"
              size={'large'}
            >
              <Card>

                <FormItem label="Render">
                  <Select
                    defaultValue="Canvas"
                    className="width-100-pc"
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

                <FormItem label="Text">
                  <Input
                    className="width-100-pc"
                    defaultValue="https://www.instagram.com/ekayulianapd"
                  />
                </FormItem>

              </Card>

              <FormItem label="Include Options" noStyle>
                <div style={{ marginTop: 45, marginBottom: 18 }}>
                  Include Options:&nbsp;<Switch defaultChecked />
                </div>
              </FormItem>

              <Divider plain orientation="left"><strong>Options</strong></Divider>
              <Card>

                <FormItem label="Level">
                  <Select
                    defaultValue="L"
                    className="width-100-pc"
                    options={[
                      {
                        value: 'L',
                        label: 'L',
                      },
                      {
                        value: 'M',
                        label: 'M',
                      },
                      {
                        value: 'Q',
                        label: 'Q',
                      },
                      {
                        value: 'H',
                        label: 'H',
                      },
                    ]}
                  />
                </FormItem>

                <FormItem label="Margin">
                  <InputNumber
                    className="width-100-pc"
                    defaultValue={2}
                    min={1}
                    controls
                  />
                </FormItem>

                <FormItem label="Scale">
                  <InputNumber
                    className="width-100-pc"
                    defaultValue={5}
                    min={1}
                    controls
                  />
                </FormItem>

                <FormItem label="Width">
                  <InputNumber
                    className="width-100-pc"
                    defaultValue={150}
                    min={1}
                    controls
                  />
                </FormItem>

              </Card>



              <FormItem label="DatePicker">
                <DatePicker showTime onChange={onDatePickerChange} />
              </FormItem>
              <FormItem style={{ marginTop: 48 }} wrapperCol={{ offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  OK
                </Button>
                <Button style={{ marginLeft: 8 }}>Cancel</Button>
              </FormItem>
            </Form>
            <Divider plain orientation="left"><strong>Result</strong></Divider>
          </Col>
        </Row>
      </div>
      <footer>

      </footer>
    </div>
  )
}
