import { Container,Box,Text,Tab,TabPanel,TabList,Tabs,TabPanels } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
const Homepage = () => {
const history=useHistory();
useEffect(() => {
  const user=JSON.parse(localStorage.getItem('userInfo'))
  if(user)
  {
    history.push('/chats');
  }
}, [history])

  return (
        <Container maxW='xl' centerContent>
         <Box
         d="flex"
         justifyContent="center"
         p={3}
         bg={'white'}
         w="100%"
         m="40px 0 15px 0"
         borderRadius="lg"
         borderWidth="1px"

         >
             <Text fontSize="4x1" fontFamily="Work sans" color="black">
             TalkerZone</Text>
         </Box>
         <Box 
         justifyContent="center"
         p={4}
         bg={'white'}
         w="100%"
         borderRadius="lg"
         borderWidth="1px"
         color="black"
         >
         <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>

         </Box>
        </Container>
    )
}

export default Homepage
