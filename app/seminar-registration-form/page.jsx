"use client"
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../components/loader/Loader";
import Image from "next/image";

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
    then: () => Yup.string().required("Please specify other media category"),
  }),
  industry_products: Yup.array().min(1, "Please select at least one industry/product category"), // Industry/products validation
  industry_products_other: Yup.string().when("industry_products", {
    is: (industry_products) => industry_products && industry_products.includes("Others"), // Only required if "Others" is selected
    then: () => Yup.string().required("Please specify other industry/product category"),
  }),
  terms_and_conditions: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

const MyForm = () => {
  const [showHideLoader, setShowHideLoader] = useState(false);

  const handleSubmit = async (values) => {
    setShowHideLoader(true);
    const submissionData = {
      person_name: values.name,
      company_name: values.organisation,
      designation: values.designation,
      city: values.city,
      country: values.country,
      mobile: values.mobile,
      email: values.primary_email,
      website: values.website || "",
      nob: values.media_cat.join(", "),
      nob_other: values.media_cat_other || "",
      product_category: values.industry_products.join(", "),
      product_category_other: values.industry_products_other || "",
    };
  
    console.log(submissionData, "form Data for submit");
  
    try {
      const response = await axios.post(
        "https://api.worldexindia.com/wofx/seminar-registration-next.php",
        new URLSearchParams(submissionData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      console.log(response, "response from API");
  
      // Parse the response data
      const responseData = response?.data?.data || "";
      const parsedData = JSON.parse(
        responseData.replace(/Response: /, "")
      );
  
      if (parsedData.status === "success") {
        Swal.fire({
          text: parsedData.message,
          icon: "success",
        }).then(() => window.location.reload());
      } else if (parsedData.status === "F") {
        Swal.fire({
          text: parsedData.message,
          icon: "warning",
          confirmButtonText: "Close",
        });
      } else {
        Swal.fire({
          text: "Unexpected response from the server.",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    } catch (error) {
      console.log(error, "error from first API");
      Swal.fire({
        text: "An error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "Close",
      });
    } finally {
      setShowHideLoader(false);
    }
  };
  


  if (showHideLoader) {
    return <Loader />
  }

  return (
    <div className="mx-auto w-full max-w-screen-2xl mt-32">
      <div className="py-4 px-4 md:px-44 md:py-12 ">

        <div className="border-t border-r border-dashed border-l border-b border-gray-400 rounded-tr-lg rounded-xl"
          style={{
            borderTopStyle: "solid",
            borderRightStyle: "solid",
            borderLeftStyle: "dashed",
            borderBottomStyle: "dashed",
          }}
        >
          <Image className="rounded-t-lg" src="/assests/business-talk.png" width="1000" height="250" />
          <h1 className="text-3xl text-center py-6">Seminar Registration Form</h1>

          <div className="px-4 pb-8">
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
                terms_and_conditions: false,
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
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Eswatini ">Eswatini</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Holy See">Holy See</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea (North)">Korea (North)</option>
                        <option value="Korea (South)">Korea (South)</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="North Macedonia">North Macedonia</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine State">Palestine State</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">United States of America</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>

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
                            setFieldValue("media_cat_other", "");
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
                        <Field className="border w-full h-11 px-2 rounded" type="text" id="media_cat_other" name="media_cat_other" placeholder="Please specify other media category" />
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
                        const options={[
                          { value: "Home", label: "Home" },
                          { value: "Office", label: "Office" },
                          { value: "Outdoor", label: "Outdoor" },
                          { value: "Modular", label: "Modular" },
                          { value: "Kids", label: "Kids" },
                          { value: "Handcrafted", label: "Handcrafted" },
                          { value: "Plastic", label: "Plastic" },
                          { value: "School/College", label: "School/College" },
                          { value: "Institutional", label: "Institutional" },
                          { value: "Mattresses", label: "Mattresses" },
                          { value: "Décor", label: "Décor" },
                          { value: "Others", label: "Others" },
                        ]}
                        isMulti
                        onChange={(selectedOptions) => {
                          setFieldValue(
                            "industry_products",
                            selectedOptions ? selectedOptions.map((option) => option.value) : []
                          );
                          if (!selectedOptions.some((option) => option.value === "Others")) {
                            setFieldValue("industry_products_other", "");
                          }
                        }}
                        value={values.industry_products.map((value) => ({ value, label: value }))}
                      />
                      <ErrorMessage className="text-red-600" name="industry_products" component="div" />
                    </div>
                  </div>

                  {values.industry_products.includes("Others") && (
                    <div className="flex mt-3 gap-8">
                      <div className="w-full">
                        <Field className="border w-full h-11 px-2 rounded" type="text" id="industry_products_other" name="industry_products_other" placeholder="Please specify other industry/product category" />
                        <ErrorMessage className="text-red-600" name="industry_products_other" component="div" />
                      </div>
                    </div>
                  )}
                  <div className="mt-6">
                    <label className="flex items-center text-sm">
                      <Field
                        type="checkbox"
                        name="terms_and_conditions"
                        className="mr-2 "
                      />
                      * I agree that the above information may be used by Worldex
                      India Exhibition & Promotion Pvt. Ltd. for incorporation in
                      all of their databases for trade promotional activities and
                      for any other purposes.
                    </label>
                    <ErrorMessage
                      className="text-red-600"
                      name="terms_and_conditions"
                      component="div"
                    />
                  </div>
                  <div className=" mt-6">
                    <button className="  bg-black text-white px-6 py-3 font-bold cursor-pointer hover:bg-white hover:text-black  " style={{ border: "1px solid black", letterSpacing: "2px" }}>Submit &raquo; </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyForm;
