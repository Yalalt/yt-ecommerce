import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Values ", name, email, password, address, phone);
}


  return (
    <Layout title={"Register - EL Shop"}>
      <div className="register">
        <h3>Хэрэглэгч бүртгүүлэх</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputName1"
              placeholder="Нэрээ оруулна уу"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="И-мэйл оруулна уу"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Нууц үгээ оруулна уу"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputPhone1"
              placeholder="Утасны дугаараа оруулна уу"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Хаягаа оруулна уу"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Хадгалах
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
