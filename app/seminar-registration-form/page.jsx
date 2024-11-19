'use client';

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  designation: Yup.string().required("Designation is required"),
  organisation: Yup.string().required("Organisation is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  primary_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  media_cat: Yup.array().min(1, "Please select at least one nature of business"),
  media_cat_other: Yup.string().when("media_cat", {
    is: (media_cat) => media_cat.includes("Others"),
    then: Yup.string().required("Please specify other nature of business"),
  }),
  industry_products: Yup.array().min(
    1,
    "Please select at least one industry/product category"
  ),
  industry_products_other: Yup.string().when("industry_products", {
    is: (industry_products) => industry_products.includes("Others"),
    then: Yup.string().required(
      "Please specify other industry/product category"
    ),
  }),
});

const MyForm = () => {
  const [showHideLoader, setShowHideLoader] = useState(false);

  const handleSubmit = async (values) => {
    setShowHideLoader(true);
    try {
      const submissionData = {
        ...values,
        media_cat: values.media_cat.concat(
          values.media_cat_other ? [values.media_cat_other] : []
        ),
        industry_products: values.industry_products.concat(
          values.industry_products_other ? [values.industry_products_other] : []
        ),
      };

      console.log(submissionData, "form Data for submit");
      const response = await axios.post(
        "https://api.worldexindia.com/wofx/seminar-registration-next.php",
        new URLSearchParams(submissionData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setShowHideLoader(false);
      Swal.fire({
        text: "Thank you for showing interest. We shall contact you soon with more details.",
        icon: "success",
      });
    } catch (error) {
      setShowHideLoader(false);
      Swal.fire({
        text: "You have already registered",
        icon: "warning",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl mt-40">
      <div className="py-4 px-4 md:px-28 md:py-12">
        <h1 className="text-3xl text-center pb-4">Seminar Registration Form</h1>
        <Formik
          initialValues={{
            name: "",
            designation: "",
            organisation: "",
            city: "",
            country: "",
            mobile: "",
            primary_email: "",
            media_cat: [],
            media_cat_other: "",
            industry_products: [],
            industry_products_other: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Personal Details */}
              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="name"
                    placeholder="Name*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="name"
                    component="div"
                  />
                </div>
                <div className="w-full">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="designation"
                    placeholder="Designation*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="designation"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="organisation"
                    placeholder="Organisation*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="organisation"
                    component="div"
                  />
                </div>
                <div className="w-full">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="city"
                    placeholder="City*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="city"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="country"
                    placeholder="Country*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="country"
                    component="div"
                  />
                </div>
                <div className="w-full">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="mobile"
                    placeholder="Mobile*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="mobile"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="email"
                    name="primary_email"
                    placeholder="Email*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="primary_email"
                    component="div"
                  />
                </div>
              </div>

              {/* Media Category */}
              <div className="mt-6">
                <label htmlFor="media_cat">Nature of Business*</label>
                <Select
                  id="media_cat"
                  options={[
                    { value: "Dealers", label: "Dealers" },
                    { value: "Others", label: "Others" },
                  ]}
                  isMulti
                  onChange={(options) => {
                    setFieldValue(
                      "media_cat",
                      options.map((option) => option.value)
                    );
                  }}
                  value={values.media_cat.map((value) => ({
                    value,
                    label: value,
                  }))}
                />
                <ErrorMessage
                  className="text-red-600"
                  name="media_cat"
                  component="div"
                />
              </div>
              {values.media_cat.includes("Others") && (
                <div className="mt-3">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="media_cat_other"
                    placeholder="Please specify other nature of business*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="media_cat_other"
                    component="div"
                  />
                </div>
              )}

              {/* Industry Products */}
              <div className="mt-6">
                <label htmlFor="industry_products">Industry/Products*</label>
                <Select
                  id="industry_products"
                  options={[
                    { value: "Building", label: "Building" },
                    { value: "Others", label: "Others" },
                  ]}
                  isMulti
                  onChange={(options) => {
                    setFieldValue(
                      "industry_products",
                      options.map((option) => option.value)
                    );
                  }}
                  value={values.industry_products.map((value) => ({
                    value,
                    label: value,
                  }))}
                />
                <ErrorMessage
                  className="text-red-600"
                  name="industry_products"
                  component="div"
                />
              </div>
              {values.industry_products.includes("Others") && (
                <div className="mt-3">
                  <Field
                    className="border w-full h-11 px-2 rounded"
                    type="text"
                    name="industry_products_other"
                    placeholder="Please specify other industry/product category*"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    name="industry_products_other"
                    component="div"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 bg-black text-white px-6 py-3 cursor-pointer hover:bg-white hover:text-black"
                style={{ letterSpacing: "2px", border: "1px solid black" }}
              >
                Submit &raquo;
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;
