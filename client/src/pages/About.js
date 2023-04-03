import React from "react";
import Layout from "../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - EL Shop"}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            src="/images/aboutus_dev.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="bg-dark p-2 text-white text-center">
            Манай мэргэжлийн багтай танилцана уу
          </h2>
          <p className="text-justify mt-2">
            Бид туршлагатай хөгжүүлэгчид, инженерүүд, дизайнерууд, зөвлөхүүд юм.
          </p>
          <p className="mt-3">
            Энэ нь танай компанид өндөр чанартай шийдлүүдийг өгөх чадваруудын
            төгс хослол юм.
          </p>
          <p className="mt-3">
            Манай багийн техникийн бат бөх суурь нь бидэнд аливаа бэрхшээлийг
            шийдвэрлэх боломжийг олгодог!
          </p>
          <p className="mt-3">
            Манай цахим худалдааны программ хангамжийг ашиглан онлайнаар бараагаа зарж
            эхлээрэй. Бид олон функц, интеграци бүхий найдвартай програмыг
            хүргэх болно. Та компанийхаа бүх хэрэгцээг хангах хувийн
            шийдлийг авах болно.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
