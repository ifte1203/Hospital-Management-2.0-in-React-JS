import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginHandle } from "../../slice/authSlice";
import axios from "axios";
import { motion } from "framer-motion";
import { buttonVariants } from "../../../reusable/animation";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    userType: yup.string().required(),
  });
  const { user, isAuthenticated, error } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  const getData = async () => {
    try {
      const result = await axios.get(
        "http://13.127.113.130:3005/api/common/user-type-list"
      );
      setData(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    getData();

    if (isAuthenticated) {
      toast.success("success");
      navigate("/dashboard");
    }

    if (error) {
      console.log(error);
      toast.error(error.message);
    }
    if (errors.email || errors.password) {
      toast.error("pls enter");
    }
  }, [isAuthenticated, error, errors]);

  const submitForm = (data) => {
    dispatch(loginHandle(data));
    console.log(data);
  };
  // console.log(user);
  return (
    <>
      <motion.div
        initial={{ y: -800 }}
        animate={{ y: 10 }}
        transition={{ delay: 0.5, stiffness: 120 }}
        className="main-wrapper account-wrapper"
      >
        <div className="account-page">
          <div className="account-center">
            <div className="account-box">
              <form
                action="http://dreamguys.co.in/preclinic/template/index.html"
                className="form-signin"
              >
                <div className="account-logo">
                  <a href="index-2.html">
                    <img src="assets/img/logo-dark.png" alt="" />
                  </a>
                </div>
                <div className="form-group">
                  <label>Username </label>
                  <input
                    type="text"
                    name="username"
                    autofocus=""
                    className="form-control"
                    {...register("username")}
                  />
                  <p style={{ color: "red" }}>{errors.username?.message}</p>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    {...register("password")}
                  />
                  <p style={{ color: "red" }}>{errors.password?.message}</p>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="userType"
                    {...register("userType")}
                  >
                    <option>Select Type</option>
                    {Array.isArray(data) &&
                      data.map((val) => (
                        <option key={val.id} value={val.name}>
                          {val.name}
                        </option>
                      ))}
                  </select>
                  <p style={{ color: "red" }}>{errors.userType?.message}</p>
                </div>

                <div className="form-group text-center">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    type="submit"
                    className="btn btn-primary account-btn"
                    onClick={handleSubmit(submitForm)}
                  >
                    Login
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
