import React from 'react'
import Dataset from "./Dataset.jsx"
import DatasetPreview from "./DatasetPreview.jsx"
import DatasetDetails from "./DatasetDetails.jsx"
import Login from "./Login.jsx"
import SignUp from "./SignUp.jsx"
import LandingPage from "./LandingPage.jsx"
import Dashboard from "./Dashboard.jsx"
import Discussions from "./Discussions.jsx"
import PostThread from "./PostThreadPage.jsx"
import Profile from "./Profile.jsx"
import Thread from "./Thread.jsx"
import YourWork from "./YourWork.jsx"
import SignupDoctor from "./SignupDoctor.jsx"
import SignupResearcher from './SignupResearcher.jsx'
import {Route,Routes} from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/discussions" element={<Discussions />}/>
        <Route path="/dataset" element={<Dataset />}/>
        <Route path="/yourwork" element={<YourWork />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/postThread" element={<PostThread />}/>
        <Route path="/Thread" element={<Thread />}/>
        <Route path="/DatasetDetails" element={<DatasetDetails />}/>
        <Route path="/SignupDoctor" element={<SignupDoctor/>} />
        <Route path="/SignupResearcher" element={<SignupResearcher/>} />
        <Route path="/datasetPreview" element={<DatasetPreview/>} />
        
    </Routes>
  
    </>
    
  );
}

export default App