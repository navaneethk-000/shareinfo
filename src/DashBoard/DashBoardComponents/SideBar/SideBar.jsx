import { Flex, IconButton } from '@radix-ui/themes'
import './SideBar.css'
import { sidebarData } from './SideBarData'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const SideBar = () => {

  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();

    const handleIconClick = useCallback(
    (name, link) => {
      setActiveIcon(name);
      navigate(link)
    },
    [navigate]
  );

  return (
    <>
    <div className='sidebar'>
      <Flex className='sidebarContainer' p={'3'} gap={'5'} direction={'column'}>
        
        {sidebarData.map((item) => (
          <IconButton
              key={item.name}
              style={{
                color: activeIcon === item.name ? 'var(--yellow-9)' : 'var(--gray-8)',
                cursor: 'pointer'
              }}
              m={'2'}
              variant='ghost'
              color='gray'
              onClick={()=> handleIconClick(item.name, item.link[0])}
          >
            {item.icon}
            
          </IconButton> 
          
        ))}
        
      </Flex>
    </div>
      </>

  )
}