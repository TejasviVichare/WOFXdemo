// "use client"
// import React, { useState } from "react";
// import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Select from "react-select";
// import Loader from "../components/loader/Loader";

// const stateOptions = [
//     { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
//     { value: "Andhra Pradesh", label: "Andhra Pradesh" },
//     { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
// ];

// const categoryOptions = [
//     { value: "Architect", label: "Architect" },
//     { value: "Doors/Windows Manufacturers", label: "Doors/Windows Manufacturers" },
//     { value: "Furniture Manufacturer", label: "Furniture Manufacturer" },
// ];

// const demandOptions = [
//     { value: "Interior Designing", label: "Interior Designing", moreOtp: "(Draughtsperson, Interior Designer, Project Managers etc.)" },
//     { value: "Furniture Designing & Engineering", label: "Furniture Designing & Engineering", moreOtp: " (Furniture Designer, Material Resource Planner (Imos, Pytha etc.)" },
// ];

// const categoryJobOptions = [
//     { value: "Entry Level / Freshers", label: "Entry Level / Freshers", moreOtp: "(Helper, Trainee, Assistant, Associate etc.)" },
//     { value: "Leadership Management", label: "Leadership Management", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
// ];


// const CrProcessOption = [
//     { value: "Referral", label: "Referral", moreOtp: "(Helper, Trainee, Assistant, Associate etc.)" },
//     { value: "Job Portals", label: "Job Portals", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
//     { value: "Recruitment Agencies", label: "Recruitment Agencies", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
//     { value: "Social Media Advertisement", label: "Social Media Advertisement", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
//     { value: "Placement Drives", label: "Placement Drives", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
// ];



// const FFSCSerevicesOption = [
//     { value: "Organization Structure Creation", label: "Organization Structure Creation", moreOtp: "(Helper, Trainee, Assistant, Associate etc.)" },
//     { value: "Certification of existing workforce", label: "Certification of existing workforce", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
//     { value: "Recruitment (Placement drives)", label: "Recruitment (Placement drives)", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
//     { value: "Reskilling/upskilling/Learning & development", label: "Reskilling/upskilling/Learning & development", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
//     { value: "Customized Training", label: "Customized Training", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
//     { value: "National Apprenticeship Promotion Scheme (NAPS) financial benefits up to Rs. 9000 per apprentice for minimum 6 months.", label: "National Apprenticeship Promotion Scheme (NAPS) financial benefits up to Rs. 9000 per apprentice for minimum 6 months.", moreOtp: "(Supervisor, Assistant Manager, etc.)" },
// ];


// const validationSchema = Yup.object().shape({
//     companyname: Yup.string().required("Company Name is required"),
//     category: Yup.object().required("Category is required"),
//     state: Yup.object().required("State is required"),
//     district: Yup.string().required("District is required"),
//     name: Yup.string().required("Name is required"),
//     designation: Yup.string().required("Designation is required"),
//     phone: Yup.string()
//         .required("Mobile Number is required")
//         .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     paremployee: Yup.number().required("Number of permanent employees is required"),
//     conemployee: Yup.number().required("Number of contractual employees is required"),
//     femaleemployeesother: Yup.number().required("Number of female employees is required"),
//     demand: Yup.array().min(1, "Select at least one demand option"),
//     FFSCSerevices: Yup.array().min(1, "Select at least one FFSC service  option"),
//     categoryjob: Yup.array().min(1, "Select at least one job category"),
//     CrProcessv: Yup.array().min(1, "Select at least one"),
//     positions: Yup.array().of(
//         Yup.object().shape({
//             positionName: Yup.string().required("Position name is required"),
//             positionNumber: Yup.number().required("Number is required"),
//         })
//     ),
//     hr: Yup.string().required("Please select if HR is present"),
//     Ostructure: Yup.string().required("Please select if Organization Structure"),
//     skilledworkforce: Yup.string().required("Please select one"),
//     skillsBeforeHiring: Yup.string().required("Please select one"),
//     skillCertified: Yup.string().required("Please select one"),
//     ReskillingUpskilling: Yup.string().required("Please select one"),
//     FFSCTraining: Yup.string().required("Please select one"),
//     PlacementFFSC: Yup.string().required("Please select one"),
//     PlacementDrives: Yup.string().required("Please select one"),
//     ApprenticeshipAct1961: Yup.string().required("Please select one"),
//     developSkilled20: Yup.string().required("Please select one"),
//     apprenticeshipAcademy: Yup.string().required("Please select one"),
//     femaleEmployees22: Yup.string().required("Please select one"),
//     multipleLocations: Yup.string().required("Please select an option"),
//     cityNames: Yup.array().when("multipleLocations", {
//         is: "Yes",
//         then:()=> Yup.array().of(Yup.string().required("City name is required")),
//         otherwise:()=> Yup.array().of(Yup.string()),
//     }),
// });

// const SkillGapForm = () => {



//     const [showHideLoader, setShowHideLoader] = useState(false);

//     const handleSubmit = async (values) => {
//       setShowHideLoader(true);
//       try {
  
//         const submissionData = {
//           ...values,
//           media_cat: values.media_cat.concat(
//             values.media_cat_other ? [values.media_cat_other] : []
//           ),
//           industry_products: values.industry_products.concat(
//             values.industry_products_other ? [values.industry_products_other] : []
//           ),
//         };
  
//         console.log(submissionData, "form Data for submit");
//         const response = await axios.post(
//           "https://api.worldexindia.com/wofx/skill-gap-study.php",
//           new URLSearchParams(submissionData),
//           {
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//           }
//         );
//         setShowHideLoader(false);
//         Swal.fire({
//           text: "Thank you for showing interest. We shall contact you soon with more details.",
//           icon: "success",
//         }).then(() => window.location.reload());
//       } catch (error) {
//         setShowHideLoader(false);
//         Swal.fire({
//           text: "You have already registered",
//           icon: "warning",
//           confirmButtonText: "Close",
//         });
//       }
//     };
  
//     if (showHideLoader) {
//       return <Loader />
//     }





//     return (
//              <div className="mainSkil-container">
//                  <div className="mx-auto w-full max-w-screen-2xl mt-32">
//             <div className="py-4 px-4 md:px-44 md:py-12 ">
//                 <Formik
//                     initialValues={{
//                         companyname: "",
//                         category: null,
//                         state: null,
//                         district: "",
//                         name: "",
//                         designation: "",
//                         phone: "",
//                         email: "",
//                         paremployee: "",
//                         conemployee: "",
//                         femaleemployeesother: "",
//                         demand: [],
//                         categoryjob: [],
//                         positions: [{ positionName: "", positionNumber: "" }],
//                         hr: "",  // Initial value for radio buttons
//                         Ostructure: "",
//                         CrProcess: [],
//                         FFSCSerevices: [],
//                         skilledworkforce: "",
//                         skillsBeforeHiring: "",
//                         skillCertified: "",
//                         ReskillingUpskilling: "",
//                         FFSCTraining: "",
//                         PlacementFFSC: "",
//                         PlacementDrives: "",
//                         ApprenticeshipAct1961: "",
//                         developSkilled20: "",
//                         apprenticeshipAcademy: "",
//                         femaleEmployees22: "",
//                         demandOthers: "",
//                         CRPOthers: "",
//                         skillCertifiedOthers: "",
//                         FFSCSerevices: "",
//                         multipleLocations: "No", 
//                         cityNames: [""], 
//                         FFSCSerevicesOther:"",
//                     }}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ values, setFieldValue }) => (
//                         <Form>
//                             <div className=" bg-white shadow-md  py-4 hover:bg-orange-50" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>1. Company Details *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label>Company Name</label><br />
//                                         <Field name="companyname" className="border rounded h-10 w-full bg-gray-100 px-4" placeholder="Please Enter" />
//                                         <ErrorMessage name="companyname" component="div" className="text-red-600" />
//                                     </div>
//                                     <div className="w-full">
//                                         <label>Company Category</label>
//                                         <Select
//                                             options={categoryOptions}
//                                             onChange={(option) => setFieldValue("category", option)}
//                                             value={values.category}
//                                         />
//                                         <ErrorMessage name="category" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label>State/UT</label>
//                                         <Select
//                                             options={stateOptions}
//                                             onChange={(option) => setFieldValue("state", option)}
//                                             value={values.state}
//                                         />
//                                         <ErrorMessage name="state" component="div" className="text-red-600" />
//                                     </div>
//                                     <div className="w-full">
//                                         <label>District</label>
//                                         <Field name="district" className="border h-10 w-full px-4 rounded" placeholder="Please Enter" />
//                                         <ErrorMessage name="district" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>






//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>2. Do you have Multiple Office or Factory Locations? *</strong><br />
//                                 <span className="text-green-600 text-sm mt-2"><strong>(If Yes, Please Enter City Names)</strong></span></p>
                                
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <label>
//                                         <Field type="radio" name="multipleLocations" value="Yes" />
//                                         <strong className="ml-2">Yes</strong>
//                                     </label>
//                                     <label>
//                                         <Field type="radio" name="multipleLocations" value="No" />
//                                         <strong className="ml-2">No</strong>
//                                     </label>
//                                 </div>
//                                 <FieldArray
//                                     name="cityNames"
//                                     render={({ remove, push }) => (
//                                         <>
//                                             {values.multipleLocations === "Yes" && (
//                                                 <div className="mt-4">
//                                                     {values.cityNames.map((city, index) => (
//                                                         <div key={index} className="flex gap-6 px-6 mt-6 mb-6 items-center">
//                                                             <div className="w-full">
//                                                                 <Field
//                                                                     name={`cityNames.${index}`}
//                                                                     placeholder="City Name"
//                                                                     className="border h-10 w-full px-2"
//                                                                 />
//                                                                 <ErrorMessage
//                                                                     name={`cityNames.${index}`}
//                                                                     component="div"
//                                                                     className="text-red-600"
//                                                                 />
//                                                             </div>
//                                                             <button
//                                                                 type="button"
//                                                                 className="w-10 h-10 bg-red-700 text-white"
//                                                                 onClick={() => remove(index)}
//                                                             >
//                                                                 -
//                                                             </button>
//                                                         </div>
//                                                     ))}
//                                                     <button
//                                                         type="button"
//                                                         className="bg-green-700 text-white py-2 px-3 mt-2"
//                                                         onClick={() => push("")}
//                                                     >
//                                                         Add More City +
//                                                     </button>
//                                                 </div>
//                                             )}
//                                         </>
//                                     )}
//                                 />
//                             </div>











//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>3. Contact Person Details *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label>Contact Name</label><br />
//                                         <Field name="name" className="border h-10 w-full px-2 bg-gray-100" placeholder="Please Enter" />
//                                         <ErrorMessage name="name" component="div" className="text-red-600" />
//                                     </div>
//                                     <div className="w-full">
//                                         <label>Designation</label><br />
//                                         <Field name="designation" className="border h-10 w-full px-2 bg-gray-100" placeholder="Please Enter" />
//                                         <ErrorMessage name="designation" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label>Phone</label>
//                                         <Field name="phone" className="border h-10 w-full px-2" placeholder="Please Enter" />
//                                         <ErrorMessage name="phone" component="div" className="text-red-600" />
//                                     </div>
//                                     <div className="w-full">
//                                         <label>Email</label>
//                                         <Field name="email" type="email" className="border h-10 w-full px-2" placeholder="Please Enter" />
//                                         <ErrorMessage name="email" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>







//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>4. Do you have in-house HR Department or HR Professional?*</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="hr"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="hr"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>
//                                         <ErrorMessage name="hr" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>








//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>5. What is the number of employees in your company? *</strong></p>

//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label>Permanent Employees</label><br />
//                                         <Field name="paremployee" type="number" className="border h-10 w-full px-2" placeholder="Please Enter" />
//                                         <ErrorMessage name="paremployee" component="div" className="text-red-600" />
//                                     </div>
//                                     <div className="w-full">
//                                         <label>Contractual Employees</label><br />
//                                         <Field name="conemployee" type="number" className="border h-10 w-full px-2" placeholder="Please Enter" />
//                                         <ErrorMessage name="conemployee" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>6. How many Female employees on the production floor in your company?*</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <Field name="femaleemployeesother" type="number" className="border h-10 w-2/5 px-2" placeholder="Please Enter" />
//                                         <ErrorMessage name="femaleemployeesother" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>7. Do you have a defined Organization Structure? *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="Ostructure"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="Ostructure"
//                                                 value="No"
//                                             />
//                                             <strong>Request FFSC"s support in creating an Organisation Structure for my company</strong>
//                                         </label>
//                                         <ErrorMessage name="Ostructure" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>










//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>8. According to you, which occupation / job positions are high in demand in the industry. *</strong><br /><span className=" text-green-600 text-sm py-2 font-bold">(You can select the multiple options)</span></p>
                                
//                                 <div className="flex gap-2 flex-col px-6 mt-6 mb-6">
//                                     {demandOptions.map((option, index) => (
//                                         <div className="flex flex-col">
//                                             <label key={index} className="flex items-center gap-2">
//                                                 <Field
//                                                     type="checkbox"
//                                                     name="demand"
//                                                     value={option.value}
//                                                     onChange={(e) => {
//                                                         const checked = e.target.checked;
//                                                         if (checked) {
//                                                             setFieldValue("demand", [...values.demand, option.value]);
//                                                         } else {
//                                                             setFieldValue(
//                                                                 "demand",
//                                                                 values.demand.filter((value) => value !== option.value)
//                                                             );
//                                                         }
//                                                     }}
//                                                 />
//                                                 <strong>{option.label}</strong> {option.moreOtp}
//                                             </label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <ErrorMessage name="demand" component="div" className="text-red-600" />
//                                 <div className="w-full px-6 mt-6 mb-6">
//                                     <Field name="demandOthers" className="border h-10 w-2/4 px-2 bg-gray-100" placeholder="Other" />
//                                 </div>
//                             </div>





//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>9. According to you, which category/jobs are high in demand in the company. *</strong><br /><span className=" text-green-600 text-sm py-2 font-bold">(You can select the multiple options)</span></p>
                                
//                                 <div className="flex gap-2 flex-col px-6 mt-6 mb-6">
//                                     {categoryJobOptions.map((option, index) => (
//                                         <label key={index} className="flex items-center gap-2">
//                                             <Field
//                                                 type="checkbox"
//                                                 name="categoryjob"
//                                                 value={option.value}
//                                                 onChange={(e) => {
//                                                     const checked = e.target.checked;
//                                                     if (checked) {
//                                                         setFieldValue("categoryjob", [...values.categoryjob, option.value]);
//                                                     } else {
//                                                         setFieldValue(
//                                                             "categoryjob",
//                                                             values.categoryjob.filter((value) => value !== option.value)
//                                                         );
//                                                     }
//                                                 }}
//                                             />
//                                             <strong>{option.label}</strong>{option.moreOtp}
//                                         </label>
//                                     ))}
//                                 </div>
//                                 <ErrorMessage name="categoryjob" component="div" className="text-red-600" />
//                             </div>







//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>10. Please share job vacancies expected in your company in the next three months. *</strong></p>
//                                 <FieldArray
//                                     name="positions"
//                                     render={({ remove, push }) => (
//                                         <>
//                                             {values.positions.map((position, index) => (
//                                                 <div key={index} className="flex content-between gap-6 px-6 mt-6 mb-6">
//                                                     <div className="w-2/5">
//                                                         <label>Position Name</label><br />
//                                                         <Field name={`positions.${index}.positionName`} placeholder="Please Enter" className="border h-10 w-full px-2" />
//                                                         <ErrorMessage
//                                                             name={`positions.${index}.positionName`}
//                                                             component="div"
//                                                             className="text-red-600"
//                                                         />
//                                                     </div>
//                                                     <div className="w-2/5">
//                                                         <label>Number</label><br />
//                                                         <Field name={`positions.${index}.positionNumber`} placeholder="Please Enter" type="number" className="border h-10 w-full px-2" />
//                                                         <ErrorMessage
//                                                             name={`positions.${index}.positionNumber`}
//                                                             component="div"
//                                                             className="text-red-600"
//                                                         />
//                                                     </div>
//                                                     <div className="">
//                                                         <button type="button" className="w-10 h-10 text-white bg-red-700 mt-6" onClick={() => remove(index)}>
//                                                             -
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                             <button
//                                                 type="button"
//                                                 className="bg-green-700 text-white py-2 ml-6 px-6 mt-6 mb-6"
//                                                 onClick={() => push({ positionName: "", positionNumber: "" })}
//                                             >
//                                                 Add More Position +
//                                             </button>
//                                         </>
//                                     )}
//                                 />
//                             </div>











//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>11. What is your company"s current recruitment process? *</strong><br /><span className=" text-green-600  text-sm py-2 font-bold">(You can select multiple options)</span></p>
                                
//                                 <div className="flex gap-2 flex-col px-6 mt-6 mb-6">
//                                     {CrProcessOption.map((option, index) => (
//                                         <label key={index} className="flex items-center gap-2">
//                                             <Field
//                                                 type="checkbox"
//                                                 name="CrProcess"  // This should match the array field in Formik"s values object
//                                                 value={option.value}
//                                                 checked={values.CrProcess.includes(option.value)} // Ensure the checkbox is checked correctly
//                                                 onChange={(e) => {
//                                                     const checked = e.target.checked;
//                                                     if (checked) {
//                                                         // Add the selected option value to the array
//                                                         setFieldValue("CrProcess", [...values.CrProcess, option.value]);
//                                                     } else {
//                                                         // Remove the selected option value from the array
//                                                         setFieldValue(
//                                                             "CrProcess",
//                                                             values.CrProcess.filter((value) => value !== option.value)
//                                                         );
//                                                     }
//                                                 }}
//                                             />
//                                             <strong>{option.label}</strong>
//                                         </label>
//                                     ))}
//                                 </div>
//                                 <ErrorMessage name="CrProcessv" component="div" className="text-red-600" />

//                                 <div className="w-full px-6 mt-6 mb-6">

//                                     <Field name="CRPOthers" className="border h-10 w-2/4 px-4 bg-gray-100" placeholder="Other" />

//                                 </div>


//                             </div>



//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>12. Do you recruit only skilled workforce? *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="skilledworkforce"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="skilledworkforce"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>
//                                         <ErrorMessage name="skilledworkforce" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>





//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>13. Do you test candidate’s skills before hiring? *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="skillsBeforeHiring"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="skillsBeforeHiring"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>
//                                         <ErrorMessage name="skillsBeforeHiring" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>




//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>14. Is your current workforce skill certified? *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="skillCertified"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="skillCertified"
//                                                 value="Would like to skill certify existing workforce"
//                                             />
//                                             <strong>Would like to skill certify existing workforce</strong>
//                                         </label>

//                                         <ErrorMessage name="skillCertified" component="div" className="text-red-600" />

//                                         <div className="w-full">

//                                             <Field name="skillCertifiedOthers" className="border h-10 w-2/4 px-4 bg-gray-100 mt-6" placeholder="Other" />

//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>15. Do you invest in Reskilling, Upskilling, or Learning Development programs? *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="ReskillingUpskilling"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="ReskillingUpskilling"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>

//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="ReskillingUpskilling"
//                                                 value="We plan to implement in the future"
//                                             />
//                                             <strong>We plan to implement in the future</strong>
//                                         </label>

//                                         <ErrorMessage name="ReskillingUpskilling" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>







//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>16. Do you know about the FFSC"s training programs? *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="FFSCTraining"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="FFSCTraining"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>

//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="FFSCTraining"
//                                                 value="Would like to know more"
//                                             />
//                                             <strong>Would like to know more</strong>
//                                         </label>

//                                         <ErrorMessage name="FFSCTraining" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>




//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>17. Are you aware of the Placement Drives conducted by FFSC? *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="PlacementFFSC"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="PlacementFFSC"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>
//                                         <ErrorMessage name="PlacementFFSC" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>18. Would like to know more and participate in the Placement drives. *</strong></p>
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="PlacementDrives"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="PlacementDrives"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>
//                                         <ErrorMessage name="PlacementDrives" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>








//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>19. Are you familiar with the Apprenticeship Act 1961? *</strong><br />
//                                 <span className="text-green-700 text-sm font-bold">"The Apprenticeship Act, 1961 was enacted with the objective of regulating the program of training of apprentices in the industry by utilising the facilities available therein for imparting on-the-job training. Ministry of Skill Development and Entrepreneurship is the administrative ministry responsible for the implementation of the Act.”
//                                     This financial year, more than one lakh apprentices were enrolled in the Automotive Sector.</span></p>
                                
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="ApprenticeshipAct1961"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="ApprenticeshipAct1961"
//                                                 value="Want to know more"
//                                             />
//                                             <strong>Want to know more</strong>
//                                         </label>
//                                         <ErrorMessage name="ApprenticeshipAct1961" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>















//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>20. Are you looking for a cost-effective way to train and develop skilled workers for your company? *</strong><br /><span className="text-green-700 text-sm font-bold">National Apprenticeship Promotion Scheme (NAPS), where you can avail financial benefits up to Rs. 9000 per apprentice in 6 Months.</span></p>
                                
//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="developSkilled20"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="developSkilled20"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="developSkilled20"
//                                                 value="Want to know more"
//                                             />
//                                             <strong>Want to know more</strong>
//                                         </label>
//                                         <ErrorMessage name="developSkilled20" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>








//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1  pl-6"><strong>21. Would you like to create an apprenticeship academy in your company? *</strong></p>
//                                 <p className="text-green-700 text-sm font-bold px-6">Eligibility criteria for engaging apprentices in company:</p>
//                                 <ul className="border-b pb-6 px-6">
//                                     <li>0 to 3 Employees - 0% of total workforce (Including Contractual) - <strong>Not eligible to engage apprentices</strong></li>
//                                     <li>4 to 29 Employees - 2.5 % to 10% of total workforce (Including Contractual) - <strong>Engaging apprentices is optional</strong></li>
//                                     <li>Above 29 Employees 2.5 % 10% of total workforce (Including Contractual) - <strong>Engaging apprentices is compulsory</strong></li>
//                                 </ul>


//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="apprenticeshipAcademy"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="apprenticeshipAcademy"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>

//                                         <ErrorMessage name="apprenticeshipAcademy" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>







//                             <div className="bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>22. Do you encourage the recruitment of female employees for production floor jobs?*</strong></p>

//                                 <div className="flex gap-6 px-6 mt-6 mb-6">
//                                     <div className="w-full">
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="femaleEmployees22"
//                                                 value="Yes"
//                                             />
//                                             <strong>Yes</strong>
//                                         </label>
//                                         <label className="flex items-center gap-2">
//                                             <Field
//                                                 type="radio"
//                                                 name="femaleEmployees22"
//                                                 value="No"
//                                             />
//                                             <strong>No</strong>
//                                         </label>

//                                         <ErrorMessage name="femaleEmployees22" component="div" className="text-red-600" />
//                                     </div>
//                                 </div>
//                             </div>




//                             <div className=" bg-white shadow-md hover:bg-orange-50  py-4 mt-8" style={{border:"1px solid #EF7F1A"}}>
//                                 <p className=" text-blue-950 text-xl pb-4 pt-1 border-b pl-6"><strong>23. FFSC offers the following services, please select the ones which you are interested in and would like to know more about. * </strong> <br /><span className=" text-green-600 text-sm py-2 font-bold">(You can select the multiple options)</span></p>
                                
//                                 <div className="flex gap-2 flex-col px-6 mt-6 mb-6">
//                                     {FFSCSerevicesOption.map((option, index) => (
//                                         <div className="flex flex-col">
//                                             <label key={index} className="flex items-center gap-2">
//                                                 <Field
//                                                     type="checkbox"
//                                                     name="FFSCSerevices"
//                                                     value={option.value}
//                                                     onChange={(e) => {
//                                                         const checked = e.target.checked;
//                                                         if (checked) {
//                                                             setFieldValue("FFSCSerevices", [...values.FFSCSerevices, option.value]);
//                                                         } else {
//                                                             setFieldValue(
//                                                                 "FFSCSerevices",
//                                                                 values.FFSCSerevices.filter((value) => value !== option.value)
//                                                             );
//                                                         }
//                                                     }}
//                                                 />
//                                                 <strong>{option.label}</strong>
//                                             </label>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <ErrorMessage name="demand" component="div" className="text-red-600" />
//                                 <div className="w-full px-6 mt-6 mb-6">
//                                     <Field name="FFSCSerevicesOther" className="border h-10 w-2/4 px-4 bg-gray-100" placeholder="Other" />
//                                 </div>
//                             </div>







//                             <button type="submit" className="btn btn-success mt-3 bg-orange-600 py-3 border hover:bg-white hover:text-black rounded text-white text-center w-full">
//                                 Submit 
//                             </button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//              </div>
//     );
// };

// export default SkillGapForm;


import React from 'react'

export default function page() {
  return (
    <div>Skill Gap Study Page Design</div>
  )
}

