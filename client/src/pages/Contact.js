import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact - EL Shop"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">
            ХОЛБОО БАРИХ ХЭСЭГ
          </h1>
          <p className="text-justify mt-2">
            Бүтээгдэхүүний талаархи аливаа асуулт, мэдээллийг бид 24x7
            найдвартай утсаар хүлээн авч байна. Та хүссэн үедээ залгаж болно.
          </p>
          <p className="mt-3">
            <BiMailSend /> : help.info@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 976 9985-5544
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800 1900 (Утас үнэгүй)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
