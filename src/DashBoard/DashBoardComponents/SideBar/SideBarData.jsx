import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const sidebarData = [
    {
        name : 'naviconone',
        icon : <HomeIcon fontSize="medium"/>,
        link : ''
    },
    {
        name : 'navicontwo',
        icon : <PermIdentityIcon fontSize="medium"/>,
        link : ''
    },
    {
        name : 'naviconthree',
        icon : <SettingsIcon fontSize=""/> ,
        link : ''
    },
    {
        name : 'naviconfour',
        icon : <MeetingRoomIcon/>,
        link : ['mycontainer']
    },
    {
        name : 'naviconfive',
        icon : <SettingsIcon fontSize=""/>,
        link : ''
    },
    {
        name : 'naviconsix',
        icon : <LogoutIcon/>,
        link : ''
    },
    {
        name : 'naviconseven',
        icon : <PeopleAltIcon/>,
        link : ''
    },
]