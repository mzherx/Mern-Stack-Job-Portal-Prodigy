import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth, useUser } from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const {user} = useUser()
    const {getToken} = useAuth()

    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    });

    const [isSearched, setIsSearched] = useState(false); // Changed setter to camelCase

    const [jobs , setJobs] = useState([]);

    const [showRecruiterLogin,setShowRecruiterLogin] = useState(false);
    
    const [companyToken, setCompanyToken] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    const [userData,setUserData] = useState(null)
    const [userApplications,setUserApplications] = useState(null)

    // Function to Fetch Jobs data
    const fetchJobs = async () => {
      try {
        
        const {data} = await axios.get(backendUrl + '/api/jobs')

        if(data.success){
          setJobs(data.jobs)
          console.log(data.jobs);
        }
        else{
          toast.error(data.message)
        }
        
      } catch (error) {
        toast.error(error.message)
      }  
      
    }

    // Function to fetch Compnay Data
    // Function to fetch Compnay Data
const fetchCompanyData = async () => {
    try {
        const response = await axios.get(backendUrl + '/api/company/company',{headers: {token: companyToken}});
        const data = response.data;
        console.log(data); // Move the console.log statement here

        if(data.success){
            setCompanyData(data.company);
        }
        else{
            toast.error(data.message);
        }

    } catch (error) {
        toast.error(error.message);
    }
}

// Function to fetch User Data
const fetchUserData = async () => {
  try {
    
    const token = await getToken();

    const {data} = await axios.get(backendUrl+"/api/users/user",
      {headers: {Authorization: `Bearer ${token}`}})
    
      if(data.success){
        setUserData(data.user);
      }else{
        toast.error(data.message)
      }
  } catch (error) {
    toast.error(error.message)
  }
}

// Function to fetch User's  Applied data
  const fetchUserApplications = async () =>{
    try {
      
      const token = await getToken()

      const {data} = await axios.get(backendUrl+"/api/users/applications",
        {headers: {Authorization: `Bearer ${token}`}}
      )

      if(data.success){
        setUserApplications(data.applications)
      }
      else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

useEffect(() => {
    fetchJobs();

    const storedCompanyToken = localStorage.getItem('companyToken');

    if (storedCompanyToken) {
      setCompanyToken(storedCompanyToken);
    }
  }, []);

  useEffect(() => {
    if (companyToken) {
      fetchCompanyData();
    }
  }, [companyToken]);

  useEffect(() => {
    if (companyData) {
      const storedCompanyData = JSON.stringify(companyData);
      localStorage.setItem('companyData', storedCompanyData);
    }
  }, [companyData]);

  useEffect(() => {
    const storedCompanyData = localStorage.getItem('companyData');
    if (storedCompanyData) {
      setCompanyData(JSON.parse(storedCompanyData));
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchUserApplications();
    }
  }, [user]);
  

    
    const value = {
        searchFilter, setSearchFilter,
        setIsSearched, isSearched,
        jobs, setJobs,
        setShowRecruiterLogin, showRecruiterLogin,
        companyToken, setCompanyToken,
        companyData, setCompanyData,
        backendUrl, 
        userData, setUserData,
        userApplications, setUserApplications,
        fetchUserData,
        fetchUserApplications
      
    }

    

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}