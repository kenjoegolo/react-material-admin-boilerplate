import React from 'react';
import clsx from 'clsx';
import { withRouter, matchPath } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import UsersIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AppPanel from '../app-panel/appPanel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap'
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            backgroundColor: '#ebeff4',
            borderRight: 'none',
            overflowY: 'visible'
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(8) + 1
            }
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar
        },
        toolbarBtn: {
            background: '#d7e0ea',
            height: '56px',
            padding: '0 16px',
            margin: '8px 0px',
            color: '#1c252c',
            cursor: 'pointer',
            borderRadius: '500px',
            boxShadow: 'none',
            justifyContent: 'space-between',
            textTransform: 'none',
            '&:hover .adminConsoleRightIcon': {
                transform: 'translateX(3px)',
                transition: 'transform 0.2s'
            }
        },
        nested: {
            paddingLeft: theme.spacing(4)
        },
        avatar: {
            marginRight: theme.spacing(1),
            width: '32px',
            height: '32px'
        },
        flexElem: {
            display: 'inline-flex',
            alignItems: 'center'
        },
        userPanel: {
            minWidth: '400px',
            maxWidth: '600px',
            position: 'absolute',
            opacity: 0,
            visibility: 'hidden',
            top: '8px',
            left: 0,
            zIndex: 2,
            borderRadius: '24px',
            boxShadow: '0 2px 2px rgba(0,0,0,0.02), 0 4px 36px 4px rgba(0,0,0,0.1)',
            background: '#fff',
            transition: 'left 0.3s ease, opacity 0.3s ease',
            padding: '16px'
        },
        userPanelOpen: {
            opacity: 1,
            visibility: 'visible',
            left: '8px'
        },
        userPanelHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        bookingsDropdownIcon: {
            transform: 'rotate(0deg)',
            transition: 'transform 0.2s'
        },
        bookingsDropdownIconOpen: {
            transform: 'rotate(-180deg)',
            transition: 'transform 0.2s'
        }
    })
);

const AppSidebar = (props) => {
    const classes = useStyles();
    const [userPanelOpen, setUserPanelOpen] = React.useState(false);

    function handleToolbarClick() {
        setUserPanelOpen(!userPanelOpen);
    }

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.isDrawerOpen,
                [classes.drawerClose]: !props.isDrawerOpen
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.isDrawerOpen,
                    [classes.drawerClose]: !props.isDrawerOpen
                })
            }}
            open={props.isDrawerOpen}
        >
            <div className={classes.toolbar}>
                <Fab
                    variant="extended"
                    onClick={handleToolbarClick}
                    style={{ width: '100%' }}
                    className={classes.toolbarBtn}
                >
                    <div className={classes.flexElem}>
                        <AccountCircleIcon className={classes.avatar} />
                        <span style={{ fontWeight: 'bold' }}>Admin Template</span>
                    </div>
                    <ChevronRightIcon className="adminConsoleRightIcon" />
                </Fab>
                {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
                <AppPanel isOpen={userPanelOpen} setIsOpen={setUserPanelOpen} />
            </div>
            {/* <Divider /> */}
            <List>
                <ListItem
                    button
                    component={Link}
                    to="/dashboard"
                    className="sidebarmenubtn"
                    selected={matchPath(props.location.pathname, { path: '/dashboard' }) ? true : false}
                >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem
                    button
                    component={Link}
                    to="/users"
                    className="sidebarmenubtn"
                    selected={matchPath(props.location.pathname, { path: '/users' }) ? true : false}
                >
                    <ListItemIcon>
                        <UsersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>

                <ListItem
                    button
                    component={Link}
                    to="/settings"
                    className="sidebarmenubtn"
                    selected={matchPath(props.location.pathname, { path: '/settings' }) ? true : false}
                >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
            {/* <Divider /> */}
        </Drawer>
    );
};


export default withRouter(AppSidebar);
