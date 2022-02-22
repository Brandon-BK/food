import Button from '@mui/material/Button';

const NavBanner = () => {
  return (
    <div style={{minHeight:'100vh',width:'100%'}}>
        <nav style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',height:100}}>
            
            <Button variant="text" style={{height:60,width:100,cursor:'pointer',fontSize:20,fontWeight:400}}>MY ART</Button>

            
            <Button variant="text" style={{height:60,width:100,cursor:'pointer',fontSize:20,fontWeight:400}}>ABOUT</Button>
        </nav>
        
        <div style={{display:'flex',width:'100%'}}>
            <div style={{width:'50%'}}>
                <img src="./left1.jpg" height='auto' width='100%' />
                <img src="./left2.jpg" height='auto' width='100%' />
                <img src="./left3.jpg" height='auto' width='100%' />
            </div>

            <div style={{width:'50%'}}>
            <img src="./right1.jpg" height='auto' width='100%' />
                <img src="./right2.jpg" height='auto' width='100%' />
            </div>
        </div>
    </div>
  )
}

export default NavBanner