import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Photo from '../Photo/Photo';
import ContactUs from '../ContactUs/ContactUs';
import PrincipalMsg from '../About_us/AboutUs_Subpage/PrincipalMsg';
import School from '../About_us/AboutUs_Subpage/School';
import HigherSeconderySchool from '../Section/Section_SubPage/HigherSeconderySchool';
import SeconderySchool from '../Section/Section_SubPage/SeconderySchool';
import PrimarySchool from '../Section/Section_SubPage/PrimarySchool';
import PreSchool from '../Section/Section_SubPage/PreSchool';
import OurTeam from '../About_us/AboutUs_Subpage/OurTeam';
import Laboratory from '../Facilities/Facilities_subpage/Laboratory'
import OtherFacilities from '../Facilities/Facilities_subpage/OtherFacilities'
import Admission from '../For_Student/FOrStudent_SubPage/Admission'
import EducationalVisit from '../For_Student/FOrStudent_SubPage/EducationalVisit'
import SchoolSessions from '../For_Student/FOrStudent_SubPage/SchoolSessions'
import SchoolTiming from '../For_Student/FOrStudent_SubPage/SchoolTiming'
import Syllabus from '../For_Student/FOrStudent_SubPage/Syllabus'
import Uniform from '../For_Student/FOrStudent_SubPage/Uniform'

const Links = () => {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Dashboard />} />

                        <Route path="aboutus">
                            <Route path="principalmsg" element={<PrincipalMsg />} />
                            <Route path="school" element={<School />} />
                            <Route path="ourteam" element={<OurTeam />} />
                        </Route>

                        <Route path="photo" element={<Photo />} />

                        <Route path="section">
                            <Route path="highersecondery" element={<HigherSeconderySchool />} />
                            <Route path="secondery" element={<SeconderySchool />} />
                            <Route path="primary" element={<PrimarySchool />} />
                            <Route path="preschool" element={<PreSchool />} />

                        </Route>

                        <Route path="facilities">
                            <Route path="laboratory" element={<Laboratory />} />
                            <Route path="otherfacilities" element={<OtherFacilities />} />
                        </Route>

                        <Route path='forstudent'>
                            <Route path="admission" element={<Admission />} />
                            <Route path="educationalvisit" element={<EducationalVisit />} />
                            <Route path="schoolsession" element={<SchoolSessions />} />
                            <Route path="schooltiming" element={<SchoolTiming />} />
                            <Route path="syllabus" element={<Syllabus />} />
                            <Route path="uniform" element={<Uniform />} />
                        </Route>

                        <Route path="contactus" element={<ContactUs />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default Links