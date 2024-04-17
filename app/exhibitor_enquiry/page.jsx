'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import Loader from '../components/loader/Loader';


const MyForm = () => {
  const [errors, setErrors] = useState({});
  const [showHideLoader, setshowHideLoader] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company_name: '',
    product_cat: [], 
    nob: [], 
    product_cat_other: '',
    mobile: '',
    email: '',
    agree: false,
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.designation) {
      newErrors.designation = 'Designation is required';
      isValid = false;
    }
    if (!formData.company_name) {
      newErrors.company_name = 'company_name is required';
      isValid = false;
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required and should be 10 digits';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Primary email is required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };




  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue;

    if (type === 'checkbox') {
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
    console.log(formData)
    console.log(isValid)
    if (isValid) {
      setshowHideLoader(true);
      try {
        const response = await axios.post(
          'https://forms.worldexindia.net/application-form/api/app.php?type=exh_enq',
          new URLSearchParams(formData),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        setshowHideLoader(false);
        Swal.fire({
          text:
            'Thank you for showing interest in participating at the Intex 2024 Shows. We shall contact you soon with more details.',
          icon: 'success',
        }).then((result) => {
          window.location.reload();
        });
      } catch (error) {
        setshowHideLoader(false);
        Swal.fire({
          text: 'You have already registered',
          icon: 'warning',
          confirmButtonText: 'Close',
        });
      }
    }
    else {
      console.log('form validating error')
    }
  };



  // if (showHideLoader) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   )
  // }





  return (
    <div className='mx-auto   w-full max-w-screen-2xl'>
      <div className="py-4 px-4 md:px-28 md:py-12">
        <div className='flex justify-center mt-5'>
          <div id='newformLayout' className=' w-full  px-6'>
            <h1 className='text-center text-2xl font-semibold'>Exhibitor Enquiry Form</h1>
            <form name='company' className="enquiryForm mt-5 py-3" onSubmit={handleSubmit}>
              <div>

                <div className='flex flex-wrap md:flex-nowrap gap-2 mt-5'>
                  <div className='w-full'>
                    <input type="text" name='name' className="w-full h-12 px-2" placeholder="Name*" onChange={handleChange} />
                    <br />{errors.name && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className='w-full'>
                    <input type="text" name='designation' className="w-full h-12 px-2" placeholder="Designation*" onChange={handleChange} />
                    <br />{errors.designation && <span className="text-red-500">This field is required.</span>}
                  </div>
               
                </div>


                <div className='flex flex-wrap md:flex-nowrap gap-4 mt-5'>
                <div className='w-full'>
                    <input type="text" name='mobile' className="w-full h-12 px-2"
                      placeholder="Contact Number*" minLength="10"
                      maxLength="10" onChange={handleChange} />
                    <br />{errors.mobile && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className='w-full'>
                    <input type="email" name='email' className="w-full h-12 px-2"
                      placeholder="Enter your primary e-mail*" onChange={handleChange} />
                    <br />{errors.email && <span className="text-red-500">This field is required.</span>}
                  </div>
                </div>




                <div className='flex flex-wrap md:flex-nowrap gap-4  mt-5'>
                <div className='w-full'>
                    <input type="text" name='company_name' className="w-full h-12 px-2" placeholder="Enter your company_name*" onChange={handleChange} />
                    <br />{errors.company_name && <span className="text-red-500">This field is required.</span>}
                  </div>
                </div>







                <p className='text-lg mt-4'><strong>Major Exhibit Category*</strong></p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='Apparel Fabric' value='Home' id="2" onChange={handleChange} />&nbsp;  Home</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Office' onChange={handleChange} /> Office</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Outdoor' onChange={handleChange} />&nbsp; Outdoor</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Plastic' onChange={handleChange} />&nbsp; Plastic</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Kid' onChange={handleChange} />&nbsp;  Kids</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Airport' onChange={handleChange} />&nbsp;  Airport</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Theatre / Auditorium' onChange={handleChange} />&nbsp;   Theatre / Auditorium</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Hospital' onChange={handleChange} />&nbsp;   Hospital</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Public' onChange={handleChange} />&nbsp;   Public</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Hotel & Restaurant' onChange={handleChange} />&nbsp;   Hotel & Restaurant</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Accessories' onChange={handleChange} />&nbsp;   Accessories</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Décor' onChange={handleChange} />&nbsp;   Décor</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Modular' onChange={handleChange} />&nbsp;   Modular</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Furniture Fittings' onChange={handleChange} />&nbsp;   Furniture Fittings</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Mattresses' onChange={handleChange} />&nbsp;   Mattresses</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Lighting' onChange={handleChange} />&nbsp;   Lighting</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="product_cat[]" className='exhibit_country' value='Others' onChange={handleChange} />&nbsp;   Others (please mention)</label>
                </div>
                <p>{errors.product_cat && <span className="text-red-500">This field is required.</span>}</p>






                <p className='text-lg mt-4'><strong>Nature of Business*</strong></p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='Apparel Fabric' value='Manufacturer' id="2" onChange={handleChange} />&nbsp;  Manufacturer</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Importer' onChange={handleChange} /> Importer</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Retailer / Trader' onChange={handleChange} />&nbsp; Retailer / Trader</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Testing & Certification' onChange={handleChange} />&nbsp; Testing & Certification</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Trade Body' onChange={handleChange} />&nbsp;  Trade Body</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Brand Owner' onChange={handleChange} />&nbsp;  Brand Owner</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Designer' onChange={handleChange} />&nbsp;   Designer</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Exporter' onChange={handleChange} />&nbsp;   Exporter</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="nob[]" className='exhibit_country' value='Others' onChange={handleChange} />&nbsp;   Others (please mention)</label>
                  
                </div>
                <p>{errors.product_cat && <span className="text-red-500">This field is required.</span>}</p>






                <div className='w-full mt-7 '>
                  <div className="form-group">

                    <label className="checkbox-inline"><input type="checkbox" name='agree'
                      value='agree' /></label>
                    <span className=' text-sm'>I hereby agree to all the below terms & I have read and acknowledged the <a href="https://www.worldexindia.com/privacy-policy.html">privacy policy</a> of Worldex India Exhibition & Promotion Pvt Ltd.  <span id="downBtn"><i id="downarrow" className="fa fa-chevron-down"></i></span></span>
                    <br />{errors.agree && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className="mt-5">
                    <label htmlFor="agree" className="error"></label>
                  </div>
                </div>


                <div className='flex justify-center mt-5 mb-3'>
                  <input type="submit" className='  bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-black hover:rounded-lg' value="SUBMIT &raquo;" />
                </div>



              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
};

export default MyForm;
