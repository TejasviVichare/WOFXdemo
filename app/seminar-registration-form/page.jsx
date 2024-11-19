'use client'
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";  // You can use a library like 'react-select' for multiple select
import axios from "axios";
import Swal from "sweetalert2";

// Define the validation schema using Yup
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
  media_cat: Yup.array().min(1, "Please select at least one media category"), // Media category validation
  media_cat_other: Yup.string().when("media_cat", {
    is: (media_cat) => media_cat && media_cat.includes("Others"), // Only required if "Others" is selected
    then: Yup.string().required("Please specify other media category"),
  }),
  industry_products: Yup.array().min(1, "Please select at least one industry/product category"), // Industry/products validation
  industry_products_other: Yup.string().when("industry_products", {
    is: (industry_products) => industry_products && industry_products.includes("Others"), // Only required if "Others" is selected
    then: Yup.string().required("Please specify other industry/product category"),
  }),
});

const MyForm = () => {
  const [showHideLoader, setShowHideLoader] = useState(false);

  const handleSubmit = async (values) => {
    setShowHideLoader(true);
    try {
      // Collect form data and submit it to the API
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
      }).then(() => window.location.reload());
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
            media_cat: [], // Array for multiple select values
            media_cat_other: "", // Other media category
            industry_products: [], // Industry/product categories
            industry_products_other: "", // Other industry/product category
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Personal Details */}
              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" type="text" id="name" name="name" placeholder="Name*" />
                  <ErrorMessage className="text-red-600" name="name" component="div" />
                </div>
                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" type="text" id="organisation" name="organisation" placeholder="Organisation*" />
                  <ErrorMessage className="text-red-600" name="organisation" component="div" />
                </div>
              </div>

              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" type="text" id="designation" name="designation" placeholder="Designation*" />
                  <ErrorMessage className="text-red-600" name="designation" component="div" />
                </div>

                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" type="text" id="city" name="city" placeholder="City*" />
                  <ErrorMessage className="text-red-600" name="city" component="div" />
                </div>
              </div>

              {/* Location Details */}
              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" as="select" id="country" name="country">
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </Field>
                  <ErrorMessage className="text-red-600" name="country" component="div" />
                </div>
                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" type="text" id="mobile" name="mobile" placeholder="Mobile*" />
                  <ErrorMessage className="text-red-600" name="mobile" component="div" />
                </div>
              </div>

              {/* Email and Website */}
              <div className="flex mt-6 gap-8">
                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" type="email" id="primary_email" name="primary_email" placeholder="Email*" />
                  <ErrorMessage className="text-red-600" name="primary_email" component="div" />
                </div>
                <div className="w-full">
                  <Field className="border w-full h-11 px-2 rounded" type="text" id="website" name="website" placeholder="Website" />
                </div>
              </div>

              {/* Media Category */}
              <div className="flex mt-3 gap-8">
                <div className="w-full">
                  <label htmlFor="media_cat">Nature of Business*</label>
                  <Select
                    id="media_cat"
                    name="media_cat"
                    options={[
                      { value: "Dealers", label: "Dealers" },
                      { value: "Distributors", label: "Distributors" },
                      { value: "Wholesalers", label: "Wholesalers" },
                      { value: "Importers", label: "Importers" },
                      { value: "Trading & Buying Houses", label: "Trading & Buying Houses" },
                      { value: "Agents", label: "Agents" },
                      { value: "Retailers", label: "Retailers" },
                      { value: "E-Tailers", label: "E-Tailers" },
                      { value: "Large Format Retailers", label: "Large Format Retailers" },
                      { value: "Online Traders", label: "Online Traders" },
                      { value: "Franchisees", label: "Franchisees" },
                      { value: "Entrepreneurs", label: "Entrepreneurs" },
                      { value: "Consultant", label: "Consultant" },
                      { value: "Architects & Interior Designers", label: "Architects & Interior Designers" },
                      { value: "Interior Designers", label: "Interior Designers" },
                      { value: "Real Estate Developers", label: "Real Estate Developers" },
                      { value: "HORECA", label: "HORECA" },
                      { value: "Corporate Sourcing Heads", label: "Corporate Sourcing Heads" },
                      { value: "Institutional", label: "Institutional" },
                      { value: "Project Management Consultant", label: "Project Management Consultant" },
                      { value: "Others", label: "Others" },
                    ]}
                    isMulti
                    onChange={(selectedOptions) => {
                      setFieldValue(
                        "media_cat",
                        selectedOptions ? selectedOptions.map((option) => option.value) : []
                      );
                      if (!selectedOptions.some((option) => option.value === "Others")) {
                        setFieldValue("media_cat_other", ""); // Clear 'Other' input if not selected
                      }
                    }}
                    value={values.media_cat.map((value) => ({ value, label: value }))}
                  />
                  <ErrorMessage className="text-red-600" name="media_cat" component="div" />
                </div>
              </div>

              {values.media_cat.includes("Others") && (
                <div className="flex mt-3 gap-8">
                  <div className="w-full">
                    <Field className="border w-full h-11 px-2 rounded" type="text" id="media_cat_other" name="media_cat_other" placeholder="Please specify other nature of business* " />
                    <ErrorMessage className="text-red-600" name="media_cat_other" component="div" />
                  </div>
                </div>
              )}

              {/* Industry and Products */}
              <div className="flex mt-6 gap-8">
                <div className="w-full">
                  <label htmlFor="industry_products">Industry/Products*</label>
                  <Select
                    id="industry_products"
                    name="industry_products"
                    
                    options={[
                      { value: "Building & Construction", label: "Building & Construction" },
                      { value: "Designing", label: "Designing" },
                      { value: "Furniture", label: "Furniture" },
                      { value: "Interior & Decor", label: "Interior & Decor" },
                      { value: "Fittings & Fixtures", label: "Fittings & Fixtures" },
                      { value: "Fabrication & Joinery", label: "Fabrication & Joinery" },
                      { value: "Infrastructure", label: "Infrastructure" },
                      { value: "Smart Cities", label: "Smart Cities" },
                      { value: "Others", label: "Others" },
                    ]}
                    isMulti
                    onChange={(selectedOptions) => {
                      setFieldValue(
                        "industry_products",
                        selectedOptions ? selectedOptions.map((option) => option.value) : []
                      );
                      if (!selectedOptions.some((option) => option.value === "Others")) {
                        setFieldValue("industry_products_other", ""); // Clear 'Other' input if not selected
                      }
                    }}
                    value={values.industry_products.map((value) => ({ value, label: value }))}
                  />
                  <ErrorMessage className="text-red-600"  name="industry_products" component="div" />
                </div>
              </div>

              {values.industry_products.includes("Others") && (
                <div className="flex mt-3 gap-8">
                  <div className="w-full">
                    <Field className="border w-full h-11 px-2 rounded" type="text" id="industry_products_other" name="industry_products_other" placeholder="Please specify other industry/product category*" />
                    <ErrorMessage className="text-red-600" name="industry_products_other" component="div" />
                  </div>
                </div>
              )}

              <div className="mt-6">
                <button className= " bg-black text-white px-6 py-3  cursor-pointer hover:bg-white hover:text-black" style={{letterSpacing:"2px", border:"1px solid black"}}>Submit &raquo;</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;
