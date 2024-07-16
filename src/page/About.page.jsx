/* eslint-disable no-unused-vars */
import React from "react";
import { Layout, Form, Input, Button } from "antd";
import { Content } from "antd/es/layout/layout";

const AboutPage = () => {
  const handleSubmit = (values) => {
    console.log("Received values: ", values);
  };
  return (
    <Layout>
      <Content className="px-10">
        <div className="bg-white p-5">
          <h2 className="text-lg text-blue-400 font-bold text-center mb-3">
            About Us
          </h2>
          <p className="text-gray-500 mb-4 leading-5 tracking-wide">
            Welcome to the Anime App! I provide the latest information on top
            anime, currently airing anime, and upcoming anime. Stay updated with
            your favorite shows and explore new ones.
          </p>
          <p className="font-semibold mb-4 leading-5 tracking-wide">
            !! Using ReactJs, Tailwindcss, Redux Toolkit ,RtkQuery, Ant Design
            Ui and Api for Jikan api
          </p>
          <h2 className="text-center my-3 font-bold text-lg">Contact Us</h2>
          <Form
            name="contact"
            layout="vertical"
            onFinish={handleSubmit}
            style={{ maxWidth: "600px" }}
            className="mx-auto"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default AboutPage;
