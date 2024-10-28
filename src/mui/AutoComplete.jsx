import React, { useState } from 'react'
import {Autocomplete, MenuItem, Select, Stack, TextField} from "@mui/material"

const skills = ["js","react","next","r","py"]
const skillsOptions = skills.map((skill,index)=>({
    id : index,
    label : skill,
}))

const AutoCompleteA = () => {

  const [value,setValue] = useState(null)  
  const [skill,setSkill] = useState(null)

  const handleChange = (e,newValue) => {
  setValue(newValue)  
  }
  console.log(value);  

  const handleChangeOpt = (e,newvalue) => {
    setSkill(newvalue)
  }
  console.log({skill});
  return (
    <Stack spacing={2} width={'250px'}>
         <Autocomplete 
         freeSolo
         value={value} 
         onChange={handleChange}
         options={skills} 
         renderInput={(params) => <TextField {...params} 
         label="Skills" />} ></Autocomplete>
 <Autocomplete 
        //  freeSolo only name set here 
         value={skill} 
         onChange={handleChangeOpt}
         options={skillsOptions} 
         renderInput={(params) => <TextField {...params} 
         label="Skills" />} ></Autocomplete>     
    </Stack>
  )
}

export default AutoCompleteA
