"use client";
import React, { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

export const metadata = {
  title: "Contact us",
};
function Page() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company_name: "",
    email: "",
    mobile: "",
    interested_in: "",
    interested_in_other: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.designation) {
      newErrors.designation = "Designation is required";
      isValid = false;
    }

    if (!formData.company_name) {
      newErrors.company_name = "Company name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = "mobile is required";
      isValid = false;
    }
    if (!formData.interested_in) {
      newErrors.interested_in = "exhibit type is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue;
    if (type === "checkbox") {
      if (checked) {
        newValue = [...(formData[name] || []), value];
      } else {
        newValue = (formData[name] || []).filter((item) => item !== value);
      }
    } else {
      newValue = value;
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await axios.post(
          "https://api.worldexindia.com/wofx/contact_us.php",
          new URLSearchParams(formData),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        Swal.fire({
          text: "Thank you for showing interest in participating at the WOFX 2024 Shows. We shall contact you soon with more details.",
          icon: "success",
        }).then((result) => {
          window.location.reload();
        });
      } catch (error) {
        Swal.fire({
          text: "",
          icon: "warning",
          confirmButtonText: "Close",
        });
      }
    }
  };

  return (
    <>
      <div className="mx-auto   w-full max-w-screen-2xl ">
        <div className="py-4 px-4 md:px-40 md:py-8 mt-40">
        <p className="text-3xl text-center py-6 font-semibold mb-4">
                  Talk To Us
                </p>
          <div className="mx-auto   w-full max-w-screen-2xl">
<<<<<<< HEAD
          <div className="flex pr" id="contactus">

              <div className=" md:w-1/2  pr-10">
                
=======
            <div className="flex pr" id="contactus">
              <div className=" md:w-3/4  pr-10">
                <p className="font-bold mb-4" style={{ fontSize: "19px" }}>
                  Talk To Us
                </p>
>>>>>>> 1b6cd870af941f71578b4ed5463ce95674028a0d

                <form action="" method="POST" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      className="form-control input-sm border rounded px-2 w-full py-2 mb-4"
                      onChange={handleChange}
                    />
                    <br />
                    {errors.name && (
                      <span className="text-red-500">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="designation"
                      placeholder="Designation*"
                      className="form-control input-sm border rounded px-2 w-full py-2 mb-4"
                      onChange={handleChange}
                    />
                    <br />
                    {errors.designation && (
                      <span className="text-red-500">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company_name"
                      placeholder="Company Name*"
                      className="form-control input-sm border rounded px-2 w-full py-2 mb-4"
                      onChange={handleChange}
                    />
                    <br />
                    {errors.company_name && (
                      <span className="text-red-500">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="form-control input-sm border rounded px-2 w-full py-2 mb-4"
                      onChange={handleChange}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile*"
                      className="form-control input-sm border rounded px-2 w-full py-2 mb-4"
                      onChange={handleChange}
                    />
                    <br />
                    {errors.mobile && (
                      <span className="text-red-500">
                        This field is required.
                      </span>
                    )}
                  </div>

                  <div className=" mb-3">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-3 control-label"
                    >
                      Interested in:*
                    </label>
                  </div>
                  <div>
                    <label className="radio col-sm-12">
                      <input
                        type="radio"
                        name="interested_in"
                        className="exhibit_type mb-3"
                        defaultValue="Exhibiting"
                        id={1}
                        onChange={handleChange}
                      />
                      &nbsp; Exhibiting
                    </label>{" "}
                    <br />
                    <label className="radio col-sm-12">
                      <input
                        type="radio"
                        name="interested_in"
                        className="interested_in_other mb-3"
                        defaultValue="Visiting"
                        id={3}
                        onChange={handleChange}
                      />
                      &nbsp; Visiting
                    </label>
                    <br />
                    <label className="radio col-sm-12">
                      <input
                        type="radio"
                        name="interested_in"
                        className="exhibit_type mb-3"
                        defaultValue="Others"
                        id={3}
                        onChange={handleChange}
                      />
                      &nbsp; Others
                    </label>
                    <br />
                    <input
                      type="text"
                      name="interested_in_other"
                      className="form-control input-sm border rounded px-2 py-1 mt-4"
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <div className="text-right">
                      <input
                        type="submit"
                        className="  bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-black  mb-4"
                        value="SUBMIT &raquo;"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="py-8 text-center px-2 pt-16 md:w-1/2"
                style={{ backgroundColor: "#f2f2f2" }}
              >
                <div className="mb-16">
                  <p className="font-bold text-lg">Mumbai</p>
                  <p className="text-base">
                    309, Parvati Premises, Sun Mill Complex, <br /> Lower Parel (W),
                  </p>
                  <p className="text-base"> Mumbai 400013, India.</p>
                  <p className="text-base">
                    <a href="tel:+91 022 40376700">+91 022 40376700</a>
                  </p>
                  <p className="text-base">
                    <a href="mailto:contactus@worldexindia.com">
                      contactus@worldexindia.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg">Delhi</p>
                  <p className="text-base">
                    F-10, First Floor, Kalkaji, <br /> New Delhi 110019, India.
                  </p>
                  <p className="text-base">
                    <a href="tel:+91 11 41802033">+91 11 41802033</a> |{" "}
                    <a href="tel:+91 11 26285142">+91 11 26285142 </a>
                  </p>
                  <p className="text-base">
                    <a href="mailto:contactus@worldexindia.com">
                      contactus@worldexindia.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30180.839334402786!2d72.826897!3d18.993048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8ca8317345%3A0x2633fa2866244aeb!2sWorldex%20India%20Exhibition%20%26%20Promotion%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1694174819419!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  height={500}
                  className="w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28040.962025392528!2d77.25759800000002!3d28.536105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3df117f72e1%3A0x6dccd23003e2e2c6!2sWorldex%20India%20Exhibition%20%26%20Promotion%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1694174849412!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full"
                  height={500}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
