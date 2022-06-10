import React from 'react'
import './Sidebare.scss'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import EscalatorWarningRoundedIcon from '@mui/icons-material/EscalatorWarningRounded';
import PregnantWomanRoundedIcon from '@mui/icons-material/PregnantWomanRounded';
import ImportantDevicesRoundedIcon from '@mui/icons-material/ImportantDevicesRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ApprovalRoundedIcon from '@mui/icons-material/ApprovalRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';

const Sidebare = () => {
  return (
    <div className='sidebar'>
      <div className='top'><span className='logo'>Jivan Santi School </span></div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">Dashboard</p>
          <li>
            <GridViewRoundedIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">About US</p>
          <li>
            <MessageRoundedIcon className='icon' />
            <span>Principal message</span>
          </li>
          <li>
          <GroupsRoundedIcon className='icon' />
            <span>Our Team</span>
          </li>
          <li>
          <SchoolRoundedIcon className='icon' />
            <span>School</span>
          </li>
          <p className="title">Photo</p>
          <li>
          <PhotoCameraRoundedIcon className='icon' />
            <span>Photo</span>
          </li>
          <p className="title">Section</p>
          <li>
          <EscalatorWarningRoundedIcon className='icon' />
          <span>Pre Section</span>
          </li>
          <li>
          <EscalatorWarningRoundedIcon className='icon' />
          <span>Primary Section</span>
          </li>
          <li>
          <PregnantWomanRoundedIcon className='icon' />
          <span>Secondery Section</span>            
          </li>
          <li>
          <PregnantWomanRoundedIcon className='icon' />
          <span>Higher Secondery Section</span>
          </li>
          <p className="title">Facilities</p>
          <li>
          <ImportantDevicesRoundedIcon className='icon' />
            <span>Laboratory</span>
          </li>
          <li>
         <AddCircleRoundedIcon className='icon' />
            <span>Other Facilities</span>
          </li>
          <p className="title">For Student</p>
          <li>
            <ApprovalRoundedIcon className='icon' />
            <span>Admission</span>
          </li>
          <li>
            <ImportContactsRoundedIcon className='icon' />
            <span>School Session</span>
          </li>
          <li>
          <AccessTimeFilledRoundedIcon className='icon' />
            <span>School Timing </span>
          </li>
          <li>
          <BallotRoundedIcon className='icon' />
            <span>Syllabus</span>
          </li>
          <li>
          <CheckroomRoundedIcon className='icon' />
            <span>Uniform</span>
          </li>
          <li>
          <TourRoundedIcon  className='icon'/>
            <span>Educational Visit</span>
          </li>
          <p className="title">Contact US</p>
          <li>
          <AddIcCallRoundedIcon className='icon'/>
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Sidebare