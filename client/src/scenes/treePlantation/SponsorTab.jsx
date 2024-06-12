import React,{useState} from 'react'
import { Box } from '@mui/material'
import AddSponsorModal from './AddSponsorModal'
import Button from 'components/Button'


const SponsorTab = () => {
    const [openModal,setOpenModal]=useState(false);
    

    const handleOpenModal=()=>{
        setOpenModal (true);
    }

    const handleCloseModal=()=>{
        setOpenModal (false);
    }
  return (
    <Box m="1.5rem 2.5rem">

    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button label="Add sponsors" onClick={handleOpenModal}/>
        <AddSponsorModal openModal={openModal} closeModal={handleCloseModal}/>


    </Box>
</Box>
  )
}

export default SponsorTab