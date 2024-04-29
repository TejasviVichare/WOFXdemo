'use client'
import React, { useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';
import Loader from '../components/loader/Loader';


const MyForm = () => {
  const [errors, setErrors] = useState({});
  const [showHideLoader, setshowHideLoader] = useState(false)
  const [isMediaCategoryOthersChecked, setisMediaCategoryOthersChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organisation: '',
    media_cat: [],
    media_cat_other: '',
    city: '',
    country: '',
    countrycode:"",
    tel_citycode: '',
    telephone: '',
    mobile: '',
    primary_email: '',
    alternative_email: '',
    website: '',
    agree: false,
  });

  const handleOthersMediaCategoryChange = (event) => {
    setisMediaCategoryOthersChecked(event.target.checked);
  };

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
    if (!formData.organisation) {
      newErrors.organisation = 'Organisation is required';
      isValid = false;
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
      isValid = false;
    }
    if (!formData.country) {
      newErrors.country = 'Country is required';
      isValid = false;
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required and should be 10 digits';
      isValid = false;
    }
    if (!formData.primary_email) {
      newErrors.primary_email = 'Primary email is required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  console.log(formData)


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
    if (name === 'country') {
      const selectedCountry = e.target.selectedOptions[0].getAttribute('data-callingcode');
      setFormData({
        ...formData,
        [name]: value,
        countrycode: selectedCountry,
      });
    } else {
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log(isValid)
    if (isValid) {
      setshowHideLoader(true);
      try {
        const response = await axios.post(
          'https://api.worldexindia.com/wofx/media-registration-next.php',
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
            'Thank you for showing interest. We shall contact you soon with more details.',
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
  if (showHideLoader) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    <div className='mx-auto   w-full max-w-screen-2xl mt-40'>
      <div className="py-4 px-4 md:px-28 md:py-12">
        <div className='flex justify-center'>
          <div id='newformLayout' className='  w-full  px-6'>
            <h1 className='text-center text-2xl font-semibold'>Media Enquiry Form</h1>
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
                    <input type="text" name='organisation' className="w-full h-12 px-2" placeholder="Organisation(Media)*" onChange={handleChange} />
                    <br />{errors.organisation && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className='w-full'>
                    <input type="text" name='website' className="w-full h-12 px-2"
                      placeholder="Website" onChange={handleChange} />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-nowrap gap-4 mt-5'>
                  <div className='w-full'>
                    <select
                    style={{border:"1px solid black", borderRadius:"2px"}}
                      name='country'
                      className="w-full h-12 px-2"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option data-id="none" value="">
                        Select Country*
                      </option>
                      <option data-countrycode="DZ" data-callingcode={213} value="Algeria">
                        Algeria
                      </option>
                      <option data-countrycode="AD" data-callingcode={376} value="Andorra">
                        Andorra
                      </option>
                      <option data-countrycode="AO" data-callingcode={244} value="Angola">
                        Angola
                      </option>
                      <option data-countrycode="AI" data-callingcode={1264} value="Anguilla">
                        Anguilla
                      </option>
                      <option
                        data-countrycode="AG"
                        data-callingcode={1268}
                        value="Antigua & Barbuda"
                      >
                        Antigua &amp; Barbuda
                      </option>
                      <option data-countrycode="AR" data-callingcode={54} value="Argentina">
                        Argentina
                      </option>
                      <option data-countrycode="AM" data-callingcode={374} value="Armenia">
                        Armenia
                      </option>
                      <option data-countrycode="AW" data-callingcode={297} value="Aruba">
                        Aruba
                      </option>
                      <option data-countrycode="AU" data-callingcode={61} value="Australia">
                        Australia
                      </option>
                      <option data-countrycode="AT" data-callingcode={43} value="Austria">
                        Austria
                      </option>
                      <option data-countrycode="AZ" data-callingcode={994} value="Azerbaijan">
                        Azerbaijan
                      </option>
                      <option data-countrycode="BS" data-callingcode={1242} value="Bahamas">
                        Bahamas
                      </option>
                      <option data-countrycode="BH" data-callingcode={973} value="Bahrain">
                        Bahrain
                      </option>
                      <option data-countrycode="BD" data-callingcode={880} value="Bangladesh">
                        Bangladesh
                      </option>
                      <option data-countrycode="BB" data-callingcode={1246} value="Barbados">
                        Barbados
                      </option>
                      <option data-countrycode="BY" data-callingcode={375} value="Belarus">
                        Belarus
                      </option>
                      <option data-countrycode="BE" data-callingcode={32} value="Belgium">
                        Belgium
                      </option>
                      <option data-countrycode="BZ" data-callingcode={501} value="Belize">
                        Belize
                      </option>
                      <option data-countrycode="BJ" data-callingcode={229} value="Benin">
                        Benin
                      </option>
                      <option data-countrycode="BM" data-callingcode={1441} value="Bermuda">
                        Bermuda
                      </option>
                      <option data-countrycode="BT" data-callingcode={975} value="Bhutan">
                        Bhutan
                      </option>
                      <option data-countrycode="BO" data-callingcode={591} value="Bolivia">
                        Bolivia
                      </option>
                      <option
                        data-countrycode="BA"
                        data-callingcode={387}
                        value="Bosnia Herzegovina"
                      >

                        Bosnia Herzegovina
                      </option>
                      <option data-countrycode="BW" data-callingcode={267} value="Botswana">
                        Botswana
                      </option>
                      <option data-countrycode="BR" data-callingcode={55} value="Brazil">
                        Brazil
                      </option>
                      <option data-countrycode="BN" data-callingcode={673} value="Brunei">
                        Brunei
                      </option>
                      <option data-countrycode="BG" data-callingcode={359} value="Bulgaria">
                        Bulgaria
                      </option>
                      <option data-countrycode="BF" data-callingcode={226} value="Burkina Faso">
                        Burkina Faso
                      </option>
                      <option data-countrycode="BI" data-callingcode={257} value="Burundi">
                        Burundi
                      </option>
                      <option data-countrycode="KH" data-callingcode={855} value="Cambodia">
                        Cambodia
                      </option>
                      <option data-countrycode="CM" data-callingcode={237} value="Cameroon">
                        Cameroon
                      </option>
                      <option data-countrycode="CA" data-callingcode={1} value="Canada">
                        Canada
                      </option>
                      <option
                        data-countrycode="CV"
                        data-callingcode={238}
                        value="Cape Verde Islands"
                      >
                        Cape Verde Islands
                      </option>
                      <option data-countrycode="KY" data-callingcode={1345} value="Cayman Islands">
                        Cayman Islands{" "}
                      </option>
                      <option
                        data-countrycode="CF"
                        data-callingcode={236}
                        value="Central African Republic"
                      >
                        Central African Republic
                      </option>
                      <option data-countrycode="CL" data-callingcode={56} value="Chile">
                        Chile
                      </option>
                      <option data-countrycode="CN" data-callingcode={86} value="China">

                        China
                      </option>
                      <option data-countrycode="CO" data-callingcode={57} value="Colombia">
                        Colombia
                      </option>
                      <option data-countrycode="KM" data-callingcode={269} value="Comoros">
                        Comoros
                      </option>
                      <option data-countrycode="CG" data-callingcode={242} value="Congo">
                        Congo
                      </option>
                      <option data-countrycode="CK" data-callingcode={682} value="Cook Islands">
                        Cook Islands{" "}
                      </option>
                      <option data-countrycode="CR" data-callingcode={506} value="Costa Rica">
                        Costa Rica
                      </option>
                      <option data-countrycode="HR" data-callingcode={385} value="Croatia">
                        Croatia
                      </option>
                      <option data-countrycode="CU" data-callingcode={53} value="Cuba">
                        Cuba
                      </option>
                      <option data-countrycode="CY" data-callingcode={90392} value="Cyprus North">
                        Cyprus North
                      </option>
                      <option data-countrycode="CY" data-callingcode={357} value="Cyprus South">
                        Cyprus South
                      </option>
                      <option data-countrycode="CZ" data-callingcode={42} value="Czech Republic">
                        Czech Republic
                      </option>
                      <option data-countrycode="DK" data-callingcode={45} value="Denmark">
                        Denmark
                      </option>
                      <option data-countrycode="DJ" data-callingcode={253} value="Djibouti">
                        Djibouti
                      </option>
                      <option data-countrycode="DM" data-callingcode={1809} value="Dominica">
                        Dominica
                      </option>
                      <option
                        data-countrycode="DO"
                        data-callingcode={1809}
                        value="Dominican Republic"
                      >

                        Dominican Republic
                      </option>
                      <option data-countrycode="EC" data-callingcode={593} value="Ecuador">
                        Ecuador
                      </option>
                      <option data-countrycode="EG" data-callingcode={20} value="Egypt">
                        Egypt
                      </option>
                      <option data-countrycode="SV" data-callingcode={503} value="El Salvador">
                        El Salvador
                      </option>
                      <option
                        data-countrycode="GQ"
                        data-callingcode={240}
                        value="Equatorial Guinea"
                      >
                        Equatorial Guinea
                      </option>
                      <option data-countrycode="ER" data-callingcode={291} value="Eritrea">
                        Eritrea
                      </option>
                      <option data-countrycode="EE" data-callingcode={372} value="Estonia">
                        Estonia
                      </option>
                      <option data-countrycode="ET" data-callingcode={251} value="Ethiopia">
                        Ethiopia
                      </option>
                      <option data-countrycode="FK" data-callingcode={500} value="Falkland Islands">
                        Falkland Islands
                      </option>
                      <option data-countrycode="FO" data-callingcode={298} value="Faroe Islands">
                        Faroe Islands
                      </option>
                      <option data-countrycode="FJ" data-callingcode={679} value="Fiji">
                        Fiji
                      </option>
                      <option data-countrycode="FI" data-callingcode={358} value="Finland">
                        Finland
                      </option>
                      <option data-countrycode="FR" data-callingcode={33} value="France">
                        France
                      </option>
                      <option data-countrycode="GF" data-callingcode={594} value="French Guiana">
                        French Guiana
                      </option>
                      <option data-countrycode="PF" data-callingcode={689} value="French Polynesia">
                        French Polynesia
                      </option>
                      <option data-countrycode="GA" data-callingcode={241} value="Gabon">
                        Gabon
                      </option>
                      <option data-countrycode="GM" data-callingcode={220} value="Gambia">
                        Gambia
                      </option>
                      <option data-countrycode="GE" data-callingcode={7880} value="Georgia">
                        Georgia{" "}
                      </option>
                      <option data-countrycode="DE" data-callingcode={49} value="Germany">
                        Germany
                      </option>
                      <option data-countrycode="GH" data-callingcode={233} value="Ghana">
                        Ghana
                      </option>
                      <option data-countrycode="GI" data-callingcode={350} value="Gibraltar">
                        Gibraltar
                      </option>
                      <option data-countrycode="GR" data-callingcode={30} value="Greece">
                        Greece
                      </option>
                      <option data-countrycode="GL" data-callingcode={299} value="Greenland">
                        Greenland
                      </option>
                      <option data-countrycode="GD" data-callingcode={1473} value="Grenada">
                        Grenada
                      </option>
                      <option data-countrycode="GP" data-callingcode={590} value="Guadeloupe">
                        Guadeloupe
                      </option>
                      <option data-countrycode="GU" data-callingcode={671} value="Guam">
                        Guam
                      </option>
                      <option data-countrycode="GT" data-callingcode={502} value="Guatemala">
                        Guatemala{" "}
                      </option>
                      <option data-countrycode="GN" data-callingcode={224} value="Guinea">
                        Guinea
                      </option>
                      <option data-countrycode="GW" data-callingcode={245} value="Guinea - Bissau">
                        Guinea - Bissau
                      </option>
                      <option data-countrycode="GY" data-callingcode={592} value="Guyana">
                        Guyana
                      </option>
                      <option data-countrycode="HT" data-callingcode={509} value="Haiti">
                        Haiti
                      </option>
                      <option data-countrycode="HN" data-callingcode={504} value="Honduras">
                        Honduras
                      </option>
                      <option data-countrycode="HK" data-callingcode={852} value="Hong Kong">
                        Hong Kong
                      </option>
                      <option data-countrycode="HU" data-callingcode={36} value="Hungary">
                        Hungary
                      </option>
                      <option data-countrycode="IS" data-callingcode={354} value="Iceland">
                        Iceland
                      </option>
                      <option data-countrycode="IN" data-callingcode={91} value="India">
                        India
                      </option>
                      <option data-countrycode="ID" data-callingcode={62} value="Indonesia">
                        Indonesia
                      </option>
                      <option data-countrycode="IR" data-callingcode={98} value="Iran">
                        Iran
                      </option>
                      <option data-countrycode="IQ" data-callingcode={964} value="Iraq">
                        Iraq
                      </option>
                      <option data-countrycode="IE" data-callingcode={353} value="Ireland">
                        Ireland
                      </option>
                      <option data-countrycode="IL" data-callingcode={972} value="Israel">
                        Israel
                      </option>
                      <option data-countrycode="IT" data-callingcode={39} value="Italy">
                        Italy
                      </option>
                      <option data-countrycode="JM" data-callingcode={1876} value="Jamaica">
                        Jamaica
                      </option>
                      <option data-countrycode="JP" data-callingcode={81} value="Japan">
                        Japan
                      </option>
                      <option data-countrycode="JO" data-callingcode={962} value="Jordan">
                        Jordan
                      </option>
                      <option data-countrycode="KZ" data-callingcode={7} value="Kazakhstan">
                        Kazakhstan{" "}
                      </option>
                      <option data-countrycode="KE" data-callingcode={254} value="Kenya">
                        Kenya
                      </option>
                      <option data-countrycode="KI" data-callingcode={686} value="Kiribati">
                        Kiribati
                      </option>
                      <option data-countrycode="KP" data-callingcode={850} value="Korea North">
                        Korea North{" "}
                      </option>
                      <option data-countrycode="KR" data-callingcode={82} value="Korea South">
                        Korea South
                      </option>
                      <option data-countrycode="KW" data-callingcode={965} value="Kuwait">
                        Kuwait
                      </option>
                      <option data-countrycode="KG" data-callingcode={996} value="Kyrgyzstan">
                        Kyrgyzstan
                      </option>
                      <option data-countrycode="LA" data-callingcode={856} value="Laos">
                        Laos
                      </option>
                      <option data-countrycode="LV" data-callingcode={371} value="Latvia">
                        Latvia
                      </option>
                      <option data-countrycode="LB" data-callingcode={961} value="Lebanon">
                        Lebanon
                      </option>
                      <option data-countrycode="LS" data-callingcode={266} value="Lesotho">
                        Lesotho
                      </option>
                      <option data-countrycode="LR" data-callingcode={231} value="Liberia">
                        Liberia
                      </option>
                      <option data-countrycode="LY" data-callingcode={218} value="Libya">
                        Libya
                      </option>
                      <option data-countrycode="LI" data-callingcode={417} value="Liechtenstein">
                        Liechtenstein
                      </option>
                      <option data-countrycode="LT" data-callingcode={370} value="Lithuania">
                        Lithuania
                      </option>
                      <option data-countrycode="LU" data-callingcode={352} value="Luxembourg">
                        Luxembourg
                      </option>
                      <option data-countrycode="MO" data-callingcode={853} value="Macao">
                        Macao
                      </option>
                      <option data-countrycode="MK" data-callingcode={389} value="Macedonia">
                        Macedonia
                      </option>
                      <option data-countrycode="MG" data-callingcode={261} value="Madagascar">
                        Madagascar
                      </option>
                      <option data-countrycode="MW" data-callingcode={265} value="Malawi">
                        Malawi
                      </option>
                      <option data-countrycode="MY" data-callingcode={60} value="Malaysia">
                        Malaysia
                      </option>
                      <option data-countrycode="MV" data-callingcode={960} value="Maldives">
                        Maldives
                      </option>
                      <option data-countrycode="ML" data-callingcode={223} value="Mali">

                        Mali
                      </option>
                      <option data-countrycode="MT" data-callingcode={356} value="Malta">
                        Malta
                      </option>
                      <option data-countrycode="MH" data-callingcode={692} value="Marshall Islands">
                        Marshall Islands
                      </option>
                      <option data-countrycode="MQ" data-callingcode={596} value="Martinique">
                        Martinique{" "}
                      </option>
                      <option data-countrycode="MR" data-callingcode={222} value="Mauritania">
                        Mauritania
                      </option>
                      <option data-countrycode="YT" data-callingcode={269} value="Mayotte">
                        Mayotte
                      </option>
                      <option data-countrycode="MX" data-callingcode={52} value="Mexico">
                        Mexico
                      </option>
                      <option data-countrycode="FM" data-callingcode={691} value="Micronesia">
                        Micronesia
                      </option>
                      <option data-countrycode="MD" data-callingcode={373} value="Moldova">
                        Moldova
                      </option>
                      <option data-countrycode="MC" data-callingcode={377} value="Monaco">
                        Monaco
                      </option>
                      <option data-countrycode="MN" data-callingcode={976} value="Mongolia">
                        Mongolia
                      </option>
                      <option data-countrycode="MS" data-callingcode={1664} value="Montserrat">
                        Montserrat
                      </option>
                      <option data-countrycode="MA" data-callingcode={212} value="Morocco">
                        Morocco
                      </option>
                      <option data-countrycode="MZ" data-callingcode={258} value="Mozambique">
                        Mozambique
                      </option>
                      <option data-countrycode="MN" data-callingcode={95} value="Myanmar">
                        Myanmar
                      </option>
                      <option data-countrycode="NA" data-callingcode={264} value="Namibia">
                        Namibia
                      </option>
                      <option data-countrycode="NR" data-callingcode={674} value="Nauru">
                        Nauru
                      </option>
                      <option data-countrycode="NP" data-callingcode={977} value="Nepal">
                        Nepal
                      </option>
                      <option data-countrycode="NL" data-callingcode={31} value="Netherlands">
                        Netherlands{" "}
                      </option>
                      <option data-countrycode="NC" data-callingcode={687} value="New Caledonia">
                        New Caledonia
                      </option>
                      <option data-countrycode="NZ" data-callingcode={64} value="New Zealand">
                        New Zealand
                      </option>
                      <option data-countrycode="NI" data-callingcode={505} value="Nicaragua">
                        Nicaragua
                      </option>
                      <option data-countrycode="NE" data-callingcode={227} value="Niger">
                        Niger
                      </option>
                      <option data-countrycode="NG" data-callingcode={234} value="Nigeria">
                        Nigeria
                      </option>
                      <option data-countrycode="NU" data-callingcode={683} value="Niue">
                        Niue
                      </option>
                      <option data-countrycode="NF" data-callingcode={672} value="Norfolk Islands">
                        Norfolk Islands
                      </option>
                      <option
                        data-countrycode="NP"
                        data-callingcode={670}
                        value="Northern Marianas"
                      >
                        Northern Marianas
                      </option>
                      <option data-countrycode="NO" data-callingcode={47} value="Norway">
                        Norway
                      </option>
                      <option data-countrycode="OM" data-callingcode={968} value="Oman">
                        Oman
                      </option>
                      <option data-countrycode="PW" data-callingcode={680} value="Palau">
                        Palau
                      </option>
                      <option data-countrycode="PA" data-callingcode={507} value="Panama">
                        Panama
                      </option>
                      <option data-countrycode="PG" data-callingcode={675} value="Papua New Guinea">
                        Papua New Guinea
                      </option>
                      <option data-countrycode="PY" data-callingcode={595} value="Paraguay">
                        Paraguay
                      </option>
                      <option data-countrycode="PE" data-callingcode={51} value="Peru">
                        Peru
                      </option>
                      <option data-countrycode="PH" data-callingcode={63} value="Philippines">
                        Philippines
                      </option>
                      <option data-countrycode="PL" data-callingcode={48} value="Poland">
                        Poland
                      </option>
                      <option data-countrycode="PT" data-callingcode={351} value="Portugal">
                        Portugal
                      </option>
                      <option data-countrycode="PR" data-callingcode={1787} value="Puerto Rico">
                        Puerto Rico
                      </option>
                      <option data-countrycode="QA" data-callingcode={974} value="Qatar">
                        Qatar
                      </option>
                      <option data-countrycode="RE" data-callingcode={262} value="Reunion">
                        Reunion
                      </option>
                      <option data-countrycode="RO" data-callingcode={40} value="Romania">
                        Romania
                      </option>
                      <option data-countrycode="RU" data-callingcode={7} value="Russia">
                        Russia
                      </option>
                      <option data-countrycode="RW" data-callingcode={250} value="Rwanda">
                        Rwanda
                      </option>
                      <option data-countrycode="SM" data-callingcode={378} value="San Marino">
                        San Marino
                      </option>
                      <option
                        data-countrycode="ST"
                        data-callingcode={239}
                        value="Sao Tome & Principe"
                      >
                        Sao Tome &amp; Principe{" "}
                      </option>
                      <option data-countrycode="SA" data-callingcode={966} value="Saudi Arabia">
                        Saudi Arabia
                      </option>
                      <option data-countrycode="SN" data-callingcode={221} value="Senegal">
                        Senegal
                      </option>
                      <option data-countrycode="CS" data-callingcode={381} value="Serbia">
                        Serbia
                      </option>
                      <option data-countrycode="SC" data-callingcode={248} value="Seychelles">
                        Seychelles
                      </option>
                      <option data-countrycode="SL" data-callingcode={232} value="Sierra Leone">
                        Sierra Leone
                      </option>
                      <option data-countrycode="SG" data-callingcode={65} value="Singapore">
                        Singapore
                      </option>
                      <option data-countrycode="SK" data-callingcode={421} value="Slovak Republic">
                        Slovak Republic
                      </option>
                      <option data-countrycode="SI" data-callingcode={386} value="Slovenia">
                        Slovenia
                      </option>
                      <option data-countrycode="SB" data-callingcode={677} value="Solomon Islands">
                        Solomon Islands
                      </option>
                      <option data-countrycode="SO" data-callingcode={252} value="Somalia">
                        Somalia
                      </option>
                      <option data-countrycode="ZA" data-callingcode={27} value="South Africa">
                        South Africa
                      </option>
                      <option data-countrycode="ES" data-callingcode={34} value="Spain">
                        Spain
                      </option>
                      <option data-countrycode="LK" data-callingcode={94} value="Sri Lanka">
                        Sri Lanka
                      </option>
                      <option data-countrycode="SH" data-callingcode={290} value="St. Helena">
                        St. Helena
                      </option>
                      <option data-countrycode="KN" data-callingcode={1869} value="St. Kitts">
                        St. Kitts
                      </option>
                      <option data-countrycode="SC" data-callingcode={1758} value="St. Lucia">
                        St. Lucia
                      </option>
                      <option data-countrycode="SD" data-callingcode={249} value="Sudan">
                        Sudan
                      </option>
                      <option data-countrycode="SR" data-callingcode={597} value="Suriname">
                        Suriname
                      </option>
                      <option data-countrycode="SZ" data-callingcode={268} value="Swaziland">
                        Swaziland
                      </option>
                      <option data-countrycode="SE" data-callingcode={46} value="Sweden">
                        Sweden
                      </option>
                      <option data-countrycode="CH" data-callingcode={41} value="Switzerland">
                        Switzerland{" "}
                      </option>
                      <option data-countrycode="SI" data-callingcode={963} value="Syria">
                        Syria
                      </option>
                      <option data-countrycode="TW" data-callingcode={886} value="Taiwan">
                        Taiwan
                      </option>
                      <option data-countrycode="TJ" data-callingcode={7} value="Tajikstan">
                        Tajikstan
                      </option>
                      <option data-countrycode="TH" data-callingcode={66} value="Thailand">
                        Thailand
                      </option>
                      <option data-countrycode="TG" data-callingcode={228} value="Togo">
                        Togo
                      </option>
                      <option data-countrycode="TO" data-callingcode={676} value="Tonga">
                        Tonga
                      </option>
                      <option
                        data-countrycode="TT"
                        data-callingcode={1868}
                        value="Trinidad & Tobago"
                      >
                        Trinidad &amp; Tobago
                      </option>
                      <option data-countrycode="TN" data-callingcode={216} value="Tunisia">
                        Tunisia
                      </option>
                      <option data-countrycode="TR" data-callingcode={90} value="Turkey">
                        Turkey
                      </option>
                      <option data-countrycode="TM" data-callingcode={993} value="Turkmenistan">
                        Turkmenistan{" "}
                      </option>
                      <option
                        data-countrycode="TC"
                        data-callingcode={1649}
                        value="Turks & Caicos Islands"
                      >
                        Turks &amp; Caicos Islands
                      </option>
                      <option data-countrycode="TV" data-callingcode={688} value="Tuvalu">
                        Tuvalu
                      </option>
                      <option data-countrycode="UG" data-callingcode={256} value="Uganda">
                        Uganda
                      </option>
                      {/* <option data-countryCode="GB" data-callingcode="44" value="UK">UK</option> */}
                      <option data-countrycode="UA" data-callingcode={380} value="Ukraine">
                        Ukraine
                      </option>
                      <option
                        data-countrycode="AE"
                        data-callingcode={971}
                        value="United Arab Emirates"
                      >
                        United Arab Emirates
                      </option>
                      <option data-countrycode="UY" data-callingcode={598} value="Uruguay">
                        Uruguay
                      </option>
                      {/* <option data-countryCode="US" data-callingcode="1" value="USA">USA</option> */}
                      <option data-countrycode="UZ" data-callingcode={7} value="Uzbekistan">
                        Uzbekistan
                      </option>
                      <option data-countrycode="VU" data-callingcode={678} value="Vanuatu">
                        Vanuatu
                      </option>
                      <option data-countrycode="VA" data-callingcode={379} value="Vatican City">
                        Vatican City
                      </option>
                      <option data-countrycode="VE" data-callingcode={58} value="Venezuela">
                        Venezuela
                      </option>
                      <option data-countrycode="VN" data-callingcode={84} value="Vietnam">
                        Vietnam
                      </option>
                      <option
                        data-countrycode="VI"
                        data-callingcode={84}
                        value="Virgin Islands - US"
                      >
                        Virgin Islands - US
                      </option>
                      <option data-countrycode="WF" data-callingcode={681} value="Wallis & Futuna">
                        Wallis &amp; Futuna
                      </option>
                      <option data-countrycode="YE" data-callingcode={967} value="Yemen">
                        Yemen
                      </option>
                      <option data-countrycode="ZM" data-callingcode={260} value="Zambia">
                        Zambia
                      </option>
                      <option data-countrycode="ZW" data-callingcode={263} value="Zimbabwe">
                        Zimbabwe
                      </option>
                      <option data-countrycode="GB" data-callingcode={44} value="UK">
                        UK
                      </option>
                      <option data-countrycode="US" data-callingcode={1} value="USA">
                        USA
                      </option>
                    </select>
                  </div>
                  <div className='w-full'>
                    <input type="text" value={formData.countrycode} name='website' className="w-full h-12 px-2"
                      placeholder="Country Code" onChange={handleChange} />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-nowrap gap-4 mt-5'>
                  <div className='w-full'>
                    <input type="text" name='city' className="w-full h-12 px-2" placeholder="City*" onChange={handleChange} />
                    <br />{errors.city && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className='w-full'>
                    <input type="text" name='tel_citycode' className="w-full h-12 px-2"
                      placeholder="City Code" onChange={handleChange} />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-nowrap mt-5 gap-2'>
                  <div className='w-full'>
                    <input type="text" name='mobile' className="w-full h-12 px-2"
                      placeholder="Mobile Number*" minLength="10"
                      maxLength="10" onChange={handleChange} />
                    <br />{errors.mobile && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className='w-full'>
                    <input type="text" name='telephone' className="w-full h-12 px-2"
                      placeholder="Telephone Number" onChange={handleChange} />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-nowrap gap-4  mt-5'>
                  <div className='w-full'>
                    <input type="email" name='primary_email' className="w-full h-12 px-2"
                      placeholder="Email*" onChange={handleChange} />
                    <br />{errors.primary_email && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className='w-full'>
                    <input type="email" name='alternative_email' className="w-full h-12 px-2"
                      placeholder="Alternative Email" onChange={handleChange} />
                  </div>
                </div>
                <p className='text-lg mt-4'><strong>Media Category*</strong></p>
                <div className="w-full flex justify-between gap-6 py-2 flex-wrap">
                  <label className="checkbox col-sm-12"><input type="checkbox" name="media_cat[]" className='Apparel Fabric' value=' Daily Newspaper' id="2" onChange={handleChange} />&nbsp;  Daily Newspaper</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="media_cat[]" className='exhibit_country' value='Magazine' onChange={handleChange} /> Magazine</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="media_cat[]" className='exhibit_country' value='News Agency' onChange={handleChange} />&nbsp; News Agency</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="media_cat[]" className='exhibit_country' value='Radio' onChange={handleChange} />&nbsp; Radio</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="media_cat[]" className='exhibit_country' value='TV' onChange={handleChange} />&nbsp;  TV</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="media_cat[]" className='exhibit_country' value='Trade media' onChange={handleChange} />&nbsp;  Trade media</label>
                  <label className="checkbox col-sm-12"><input type="checkbox" name="media_cat[]" className='exhibit_country' value='Online' onChange={handleChange} />&nbsp;   Online</label>
                  <label className="checkbox col-sm-12">
                    <input
                      type="checkbox"
                      name="mpc[]"
                      className='exhibit_country'
                      value='Others'
                      onChange={handleOthersMediaCategoryChange}
                      checked={isMediaCategoryOthersChecked}
                    />
                    &nbsp;Others (please mention)
                    {
                      isMediaCategoryOthersChecked ? (
                        <input className='mt-2 h-8' name='media_cat_other' type="text" placeholder='others nature of business' onChange={handleChange} />
                      ) : null
                    }

                  </label>
                </div>
                <p>{errors.media_cat && <span className="text-red-500">This field is required.</span>}</p>
                <div className='w-full mt-7 '>
                  <div className="form-group">

                    <label className="checkbox-inline"><input type="checkbox" name='agree'
                      value='agree' /></label>
                    <span className=' text-sm'>* I agree that
                      the
                      above information may be used by Worldex India Exhibition
                      & Promotion Pvt. Ltd. for incorporation in all
                      of their databases for trade promotional activities and
                      for any other purposes. <span id="downBtn"><i id="downarrow" className="fa fa-chevron-down"></i></span></span>
                    <br />{errors.agree && <span className="text-red-500">This field is required.</span>}
                  </div>
                  <div className="mt-5">
                    <label htmlFor="agree" className="error"></label>
                  </div>
                </div>
                <div className='flex justify-end mt-5 mb-3'>
                  <input type="submit" className='  bg-black text-white px-6 py-3 font-bold cursor-pointer hover:bg-white hover:text-black' value="SUBMIT &raquo;" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <p className='font-bold text-lg'>For Show Information</p>
        <p className='font-semibold'>Hasina Dhopaunkar &nbsp; | &nbsp;<a class="contactDetail" href="mailto:hasina@worldexindia.com">hasina@worldexindia.com</a>&nbsp;|&nbsp;<a class="contactDetail" href="tel:+918169240529">+91 8169240529</a></p>
      </div>
    </div>
  );
};

export default MyForm;
