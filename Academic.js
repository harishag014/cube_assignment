// import React, { useState } from 'react';
// import './Academics.css'

// function MyForm() {
//     const [schoolData, setSchoolData] = useState({
//         nameOfSchool: "",
//         schoolId: "",
//         currentClass: "",
//         prevmarks: "",
//         description: "",
//     });

//     const [puData, setPuData] = useState({
//         nameofCollege: "",
//         collegeId: "",
//         sslcmarks: "",
//         prevmarks: "",
//         description: "",
//     });
//     const [grad, setGrad] = useState({
//         nameOfCollege: "",
//         collegeId: "",
//         sslcmarks: "",
//         pucmarks: "",
//         compscore: "",
//         prevmarks: "",
//         description: "",
//     });
//     const [degree, setDegree] = useState("");

//     const handleDegreeChange = (event) => {
//         const selectedDegree = event.target.value;
//         setDegree(selectedDegree);
//     };

//     //added function 
//     const handleBlur = (event) => {
//         if (!event.target.value) {
//           event.target.setCustomValidity("This field is required");
//         } else {
//           event.target.setCustomValidity("");
//         }
//       };

//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         let degreeEntry = "";
//         switch (degree) {
//             case "school":
//                 degreeEntry = JSON.stringify(schoolData, null, 2);
//                 break;
//             case "puc":
//                 degreeEntry = JSON.stringify(puData, null, 2);
//                 break;
//             case "B.E":
//             case "B.Tech":
//             case "B.Sc Nursing":
//             case "BDS":
//             case "MBBS":
//             case "Ph.D":
//             case "B.Sc":
//             case "B.Com":
//             case "B.A":
//             case "M.Tech":
//             case "M.E":
//             case "M.Sc":
//             case "M.Com":
//             case "M.A":
//                 degreeEntry = JSON.stringify(grad, null, 2);
//                 break;
//             default:
//                 degreeEntry = "No specific entry for this degree.";
//         }
//         alert(degreeEntry);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="box-container">
//                     <h1>Academic Details</h1>
//                     <label htmlFor="degree">Select Degree:</label>
//                     <select
//                         id="degree"
//                         value={degree}
//                         onChange={handleDegreeChange}>

//                         <option value="">Select</option>
//                         <option value="school">School </option>
//                         <option value="puc">PUC or Equivalent </option>
//                         <option value="B.E">B.E </option>
//                         <option value="B.Tech">B.Tech </option>
//                         <option value="MBBS">MBBS </option>
//                         <option value="BDS">BDS </option>
//                         <option value="B.Sc Nursing">B.Sc Nursing </option>
//                         <option value="B.Sc">B.Sc</option>
//                         <option value="B.Com">B.Com</option>
//                         <option value="B.A">B.A</option>
//                         <option value="M.Tech">M.Tech</option>
//                         <option value="M.E">M.E</option>
//                         <option value="M.Sc">M.Sc</option>
//                         <option value="M.Com">M.Com</option>
//                         <option value="M.A">M.A</option>
//                         <option value="Ph.D">Ph.D</option>
//                     </select>
//                 </div>

//                 {degree === "school" && (
//                     <div>
//                         <div className="form-group">
//                             <label htmlFor="nameOfSchool">Name of School</label>
//                             <input
//                                 type="text"
//                                 name="academicDetails.nameOfSchool"
//                                 value={schoolData.nameOfSchool}
//                                 onChange={(event) =>
//                                     setSchoolData({
//                                         ...schoolData,
//                                         nameOfSchool: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter a name of school"
//                                 //     )
//                                 // }
//                                 onBlur={handleBlur}
//                             />
//                             {/* <div className='error-message'>
//                                 <span className='invlaid-feedback'>Please enter name of the School</span>
//                             </div> */}

//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="schoolId">School Register Number</label>
//                             <input
//                                 type="text"
//                                 name="academicDetails.schoolId"
//                                 value={schoolData.schoolId}
//                                 onChange={(event) =>
//                                     setSchoolData({
//                                         ...schoolData,
//                                         schoolId: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter a school register number"
//                                 //     )
//                                 // }
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="currentclass">Currently Studying</label>
//                             <input
//                                 type="text"
//                                 name="academicDetails.currentClass"
//                                 value={schoolData.currentClass}
//                                 onChange={(event) =>
//                                     setSchoolData({
//                                         ...schoolData,
//                                         currentClass: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter currently studying"
//                                 //     )
//                                 // }
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="prevmarks">
//                                 Marks obtained in previous 3 years
//                             </label>
//                             <input
//                                 type="file"
//                                 name="academicDetails.prevmarks"
//                                 value={schoolData.prevmarks}
//                                 onChange={(event) =>
//                                     setSchoolData({
//                                         ...schoolData,
//                                         prevmarks: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter marks obtained in previous 3 years"
//                                 //     )
//                                 // }
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="description">Description</label>
//                             <input
//                                 type="text"
//                                 name="academicDetails.description"
//                                 value={schoolData.description}
//                                 onChange={(event) =>
//                                     setSchoolData({
//                                         ...schoolData,
//                                         description: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity("Please enter a description")
//                                 // }
//                             />
//                         </div>
//                     </div>
//                 )}

//                 {degree === "puc" && (
//                     <div>
//                         <div className="form-group">
//                             <label htmlFor="nameOfCollege">Name of College</label>
//                             <input
//                                 type="text"
//                                 name="academicDetails.nameOfCollege"
//                                 value={puData.nameofCollege}
//                                 onChange={(event) =>
//                                     setPuData({
//                                         ...puData,
//                                         nameofCollege: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter a name of college"
//                                 //     )
//                                 // }
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="collegeId">College Register Number</label>
//                             <input
//                                 type="text"
//                                 name="academicDetails.collegeId"
//                                 value={puData.collegeId}
//                                 onChange={(event) =>
//                                     setPuData({
//                                         ...puData,
//                                         collegeId: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter a college register number"
//                                 //     )
//                                 // }
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="sslcmarks">
//                                 Marks obtained on SSLC or Equivalent
//                             </label>
//                             <input
//                                 type="text"
//                                 name="academicDetails.sslcmarks"
//                                 value={puData.sslcmarks}
//                                 onChange={(event) =>
//                                     setPuData({
//                                         ...puData,
//                                         sslcmarks: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter marks obtained on SSLC or Equivalent"
//                                 //     )
//                                 // }
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="prevmarks">
//                                 Marks obtained in previous 3 years
//                             </label>
//                             <input
//                                 type="file"
//                                 name="academicDetails.prevmarks"
//                                 value={puData.prevmarks}
//                                 onChange={(event) =>
//                                     setPuData({
//                                         ...puData,
//                                         prevmarks: event.target.value,
//                                     })
//                                 }
//                                 required
//                                 onBlur={handleBlur}
//                                 // onInvalid={(event) =>
//                                 //     event.target.setCustomValidity(
//                                 //         "Please enter marks obtained in previous 3 years"
//                                 //     )
//                                 // }
//                             />
//                         </div>
//                         <div className="form-group">
//                         <label htmlFor="description">Description</label>
//                         <input
//                             type="text"
//                             name="academicDetails.description"
//                             value={puData.description}
//                             onChange={(event) =>
//                                 setPuData({
//                                     ...puData,
//                                     description: event.target.value,
//                                 })
//                             }
//                             required
//                             onBlur={handleBlur}
//                             // onInvalid={(event) =>
//                             //     event.target.setCustomValidity("Please enter a description")
//                             // }
//                         />
//                     </div>
//           </div>
//     )
// }

// {
//     (degree === "B.E" ||
//         degree === "B.Tech" ||
//         degree === "B.Sc Nursing" ||
//         degree === "BDS" ||
//         degree === "MBBS" ||
//         degree === "Ph.D" ||
//         degree === "B.Sc" ||
//         degree === "B.Com" ||
//         degree === "B.A" ||
//         degree === "M.Tech" ||
//         degree === "M.E" ||
//         degree === "M.Sc" ||
//         degree === "M.Com" ||
//         degree === "M.A") && (
//         <div>
//             <div className="form-group">
//                 <label htmlFor="nameOfCollege">Name of College</label>
//                 <input
//                     type="text"
//                     name="academicDetails.nameOfCollege"
//                     value={grad.nameOfCollege}
//                     onChange={(event) =>
//                         setGrad({
//                             ...grad,
//                             nameOfCollege: event.target.value,
//                         })
//                     }
//                     required
//                     onBlur={handleBlur}
//                     // onInvalid={(event) =>
//                     //     event.target.setCustomValidity(
//                     //         "Please enter a name of college"
//                     //     )
//                     // }
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="collegeId">College Register Number</label>
//                 <input
//                     type="text"
//                     name="academicDetails.collegeId"
//                     value={grad.collegeId}
//                     onChange={(event) =>
//                         setGrad({
//                             ...grad,
//                             collegeId: event.target.value,
//                         })
//                     }
//                     required
//                     onBlur={handleBlur}
//                     // onInvalid={(event) =>
//                     //     event.target.setCustomValidity(
//                     //         "Please enter a college register number"
//                     //     )
//                     // }
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="sslcmarks">
//                     Marks obtained on SSLC or Equivalent
//                 </label>
//                 <input
//                     type="text"
//                     name="academicDetails.sslcmarks"
//                     value={grad.sslcmarks}
//                     onChange={(event) =>
//                         setGrad({
//                             ...grad,
//                             sslcmarks: event.target.value,
//                         })
//                     }
//                     required
//                     onBlur={handleBlur}
//                     // onInvalid={(event) =>
//                     //     event.target.setCustomValidity(
//                     //         "Please enter marks obtained on SSLC or Equivalent"
//                     //     )
//                     // }
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="pucmarks">
//                     Marks obtained on PUC or Equivalent
//                 </label>
//                 <input
//                     type="text"
//                     name="academicDetails.pucmarks"
//                     value={grad.pucmarks}
//                     onChange={(event) =>
//                         setGrad({
//                             ...grad,
//                             pucmarks: event.target.value,
//                         })
//                     }
                    
//                     required
//                     onBlur={handleBlur}
//                     // onInvalid={(event) =>
//                     //     event.target.setCustomValidity(
//                     //         "Please enter marks obtained on PUC or Equivalent"
//                     //     )
//                     // }
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="compscore">
//                     Score obtained on competative exam
//                 </label>
//                 <input
//                     type="text"
//                     name="academicDetails.compscore"
//                     value={grad.compscore}
//                     onChange={(event) =>
//                         setGrad({
//                             ...grad,
//                             compscore: event.target.value,
//                         })
//                     }
//                     required
//                     onBlur={handleBlur}
//                     // onInvalid={(event) =>
//                     //     event.target.setCustomValidity(
//                     //         "Please enter score obtained on competative exam"
//                     //     )
//                     // }
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="prevmarks">
//                     Marks obtained in previous years
//                 </label>
//                 <input
//                     type="text"
//                     name="academicDetails.prevmarks"
//                     value={grad.prevmarks}
//                     onChange={(event) =>
//                         setGrad({
//                             ...grad,
//                             prevmarks: event.target.value,
//                         })
//                     }
//                     required
//                     onBlur={handleBlur}
//                     // onInvalid={(event) =>
//                     //     event.target.setCustomValidity(
//                     //         "Please enter marks obtained in previous years"
//                     //     )
//                     // }
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <input
//                     type="text"
//                     name="academicDetails.description"
//                     value={grad.description}
//                     onChange={(event) =>
//                         setGrad({
//                             ...grad,
//                             description: event.target.value,
//                         })
//                     }
//                     required
//                     onBlur={handleBlur}
//                     // onInvalid={(event) =>
//                     //     event.target.setCustomValidity("Please enter a description")
//                     // }
//                 />
//             </div>
//         </div>
//     )
// }

// <input type="submit" value="Submit" />
//       </form >
//     </div >
//   );
// }

// export default MyForm;

import React, { useState } from 'react';
import './Academics.css'

function MyForm() {
    const [schoolData, setSchoolData] = useState({
        nameOfSchool: "",
        schoolId: "",
        currentClass: "",
        prevmarks: "",
        description: "",
    });

    const [puData, setPuData] = useState({
        nameofCollege: "",
        collegeId: "",
        sslcmarks: "",
        prevmarks: "",
        description: "",
    });
    const [grad, setGrad] = useState({
        nameOfCollege: "",
        collegeId: "",
        sslcmarks: "",
        pucmarks: "",
        compscore: "",
        prevmarks: "",
        description: "",
    });
    const [degree, setDegree] = useState("");

    const handleDegreeChange = (event) => {
        const selectedDegree = event.target.value;
        setDegree(selectedDegree);
    };

    //added function 
    const handleBlur = (event) => {
        if (!event.target.value) {
          event.target.setCustomValidity("This field is required");
        } else {
          event.target.setCustomValidity("");
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let degreeEntry = "";
        switch (degree) {
            case "sch":
                degreeEntry = JSON.stringify(schoolData, null, 2);
                break;
            case "puc":
                degreeEntry = JSON.stringify(puData, null, 2);
                break;
            case "B.E":
            case "B.Tech":
            case "B.Sc Nursing":
            case "BDS":
            case "MBBS":
            case "Ph.D":
            case "B.Sc":
            case "B.Com":
            case "B.A":
            case "M.Tech":
            case "M.E":
            case "M.Sc":
            case "M.Com":
            case "M.A":
                degreeEntry = JSON.stringify(grad, null, 2);
                break;
            default:
                degreeEntry = "No specific entry for this degree.";
        }
        alert(degreeEntry);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="box-container">
                    <h1>Customer Portal</h1>
                    <label htmlFor="degree">Select Customer:</label>
                    <select
                        id="degree"
                        value={degree}
                        onChange={handleDegreeChange}>

                        <option value="" onBlur={handleBlur}>Select</option>
                        <option value="Ankith">Ankit </option>
                        <option value="Ram">Ram </option>
                        <option value="Bhushan">Bhushan </option>
                        <option value="Bhuvana">Bhuvana </option>
                        <option value="Mukesh">Mukesh </option>
                        <option value="Bhavana">Bhavana </option>
                        <option value="Brunda">Brunda</option>
                        <option value="Balaji">alaji</option>
                        <option value="Harsith">Harsith</option>
                        <option value="Nikhil">Nikhil</option>
                        <option value="Manoj">Manoj</option>
                        <option value="Manoradh">Manoradh</option>
                        <option value="Manush">Manush</option>
                    </select>
                </div>

                {degree === "Ankith" && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="nameOfSchool">Name of School</label>
                            <input
                                type="text"
                                name="academicDetails.nameOfSchool"
                                value={schoolData.nameOfSchool}
                                onChange={(event) =>
                                    setSchoolData({
                                        ...schoolData,
                                        nameOfSchool: event.target.value,
                                    })
                                }
                                required
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter a name of school"
                                //     )
                                // }
                                onBlur={handleBlur}
                            />
                            {/* <div className='error-message'>
                                <span className='invlaid-feedback'>Please enter name of the School</span>
                            </div> */}

                        </div>

                        <div className="form-group">
                            <label htmlFor="schoolId">School Register Number</label>
                            <input
                                type="text"
                                name="academicDetails.schoolId"
                                value={schoolData.schoolId}
                                onChange={(event) =>
                                    setSchoolData({
                                        ...schoolData,
                                        schoolId: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter a school register number"
                                //     )
                                // }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentclass">Currently Studying</label>
                            <input
                                type="text"
                                name="academicDetails.currentClass"
                                value={schoolData.currentClass}
                                onChange={(event) =>
                                    setSchoolData({
                                        ...schoolData,
                                        currentClass: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter currently studying"
                                //     )
                                // }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prevmarks">
                                Marks obtained in previous 3 years
                            </label>
                            <input
                                type="file"
                                name="academicDetails.prevmarks"
                                value={schoolData.prevmarks}
                                onChange={(event) =>
                                    setSchoolData({
                                        ...schoolData,
                                        prevmarks: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter marks obtained in previous 3 years"
                                //     )
                                // }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="academicDetails.description"
                                value={schoolData.description}
                                onChange={(event) =>
                                    setSchoolData({
                                        ...schoolData,
                                        description: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity("Please enter a description")
                                // }
                            />
                        </div>
                    </div>
                )}

                {degree === "Manush" && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="nameOfCollege">Name of College</label>
                            <input
                                type="text"
                                name="academicDetails.nameOfCollege"
                                value={puData.nameofCollege}
                                onChange={(event) =>
                                    setPuData({
                                        ...puData,
                                        nameofCollege: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter a name of college"
                                //     )
                                // }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="collegeId">College Register Number</label>
                            <input
                                type="text"
                                name="academicDetails.collegeId"
                                value={puData.collegeId}
                                onChange={(event) =>
                                    setPuData({
                                        ...puData,
                                        collegeId: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter a college register number"
                                //     )
                                // }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sslcmarks">
                                Marks obtained on SSLC or Equivalent
                            </label>
                            <input
                                type="text"
                                name="academicDetails.sslcmarks"
                                value={puData.sslcmarks}
                                onChange={(event) =>
                                    setPuData({
                                        ...puData,
                                        sslcmarks: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter marks obtained on SSLC or Equivalent"
                                //     )
                                // }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prevmarks">
                                Marks obtained in previous 3 years
                            </label>
                            <input
                                type="file"
                                name="academicDetails.prevmarks"
                                value={puData.prevmarks}
                                onChange={(event) =>
                                    setPuData({
                                        ...puData,
                                        prevmarks: event.target.value,
                                    })
                                }
                                required
                                onBlur={handleBlur}
                                // onInvalid={(event) =>
                                //     event.target.setCustomValidity(
                                //         "Please enter marks obtained in previous 3 years"
                                //     )
                                // }
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="academicDetails.description"
                            value={puData.description}
                            onChange={(event) =>
                                setPuData({
                                    ...puData,
                                    description: event.target.value,
                                })
                            }
                            required
                            onBlur={handleBlur}
                            // onInvalid={(event) =>
                            //     event.target.setCustomValidity("Please enter a description")
                            // }
                        />
                    </div>
          </div>
    )
}

{
    (degree === "Ram" ||
        degree === "Bhushan" ||
        degree === "Bhuvana" ||
        degree === "Bhavana" ||
        degree === "Harsith" ||
        degree === "Manoj" ||
        degree === "Brunda" ||
        degree === "Balaji" ||
        degree === "Manoradh" ||
        degree === "Nikhil" ||
        degree === "M.E" ||
        degree === "M.Sc" ||
        degree === "M.Com" ||
        degree === "M.A") && (
        <div>
            <div className="form-group">
                <label htmlFor="nameOfCollege">Name of College</label>
                <input
                    type="text"
                    name="academicDetails.nameOfCollege"
                    value={grad.nameOfCollege}
                    onChange={(event) =>
                        setGrad({
                            ...grad,
                            nameOfCollege: event.target.value,
                        })
                    }
                    required
                    onBlur={handleBlur}
                    // onInvalid={(event) =>
                    //     event.target.setCustomValidity(
                    //         "Please enter a name of college"
                    //     )
                    // }
                />
            </div>
            <div className="form-group">
                <label htmlFor="collegeId">College Register Number</label>
                <input
                    type="text"
                    name="academicDetails.collegeId"
                    value={grad.collegeId}
                    onChange={(event) =>
                        setGrad({
                            ...grad,
                            collegeId: event.target.value,
                        })
                    }
                    required
                    onBlur={handleBlur}
                    // onInvalid={(event) =>
                    //     event.target.setCustomValidity(
                    //         "Please enter a college register number"
                    //     )
                    // }
                />
            </div>
            <div className="form-group">
                <label htmlFor="sslcmarks">
                    Marks obtained on SSLC or Equivalent
                </label>
                <input
                    type="text"
                    name="academicDetails.sslcmarks"
                    value={grad.sslcmarks}
                    onChange={(event) =>
                        setGrad({
                            ...grad,
                            sslcmarks: event.target.value,
                        })
                    }
                    required
                    onBlur={handleBlur}
                    // onInvalid={(event) =>
                    //     event.target.setCustomValidity(
                    //         "Please enter marks obtained on SSLC or Equivalent"
                    //     )
                    // }
                />
            </div>
            <div className="form-group">
                <label htmlFor="pucmarks">
                    Marks obtained on PUC or Equivalent
                </label>
                <input
                    type="text"
                    name="academicDetails.pucmarks"
                    value={grad.pucmarks}
                    onChange={(event) =>
                        setGrad({
                            ...grad,
                            pucmarks: event.target.value,
                        })
                    }
                    
                    required
                    onBlur={handleBlur}
                    // onInvalid={(event) =>
                    //     event.target.setCustomValidity(
                    //         "Please enter marks obtained on PUC or Equivalent"
                    //     )
                    // }
                />
            </div>
            <div className="form-group">
                <label htmlFor="compscore">
                    Score obtained on competative exam
                </label>
                <input
                    type="text"
                    name="academicDetails.compscore"
                    value={grad.compscore}
                    onChange={(event) =>
                        setGrad({
                            ...grad,
                            compscore: event.target.value,
                        })
                    }
                    required
                    onBlur={handleBlur}
                    // onInvalid={(event) =>
                    //     event.target.setCustomValidity(
                    //         "Please enter score obtained on competative exam"
                    //     )
                    // }
                />
            </div>
            <div className="form-group">
                <label htmlFor="prevmarks">
                    Marks obtained in previous years
                </label>
                <input
                    type="text"
                    name="academicDetails.prevmarks"
                    value={grad.prevmarks}
                    onChange={(event) =>
                        setGrad({
                            ...grad,
                            prevmarks: event.target.value,
                        })
                    }
                    required
                    onBlur={handleBlur}
                    // onInvalid={(event) =>
                    //     event.target.setCustomValidity(
                    //         "Please enter marks obtained in previous years"
                    //     )
                    // }
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="academicDetails.description"
                    value={grad.description}
                    onChange={(event) =>
                        setGrad({
                            ...grad,
                            description: event.target.value,
                        })
                    }
                    required
                    onBlur={handleBlur}
                    // onInvalid={(event) =>
                    //     event.target.setCustomValidity("Please enter a description")
                    // }
                />
            </div>
        </div>
    )
}

{/* <input type="submit" value="Submit" /> */}
      </form >
    </div >
  );
}

export default MyForm;


