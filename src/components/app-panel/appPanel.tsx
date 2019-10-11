import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { IconButton, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter, Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        profileIcon: {
            marginRight: theme.spacing(1),
            width: '32px',
            height: '32px'
        },
        actionBtnIcon: {
            marginRight: '10px',
            color: '#7c7a7a',
            fontSize: '24px'
        },
        appPanelHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        appPanelHeaderTitle: {
            display: 'inline-flex',
            alignItems: 'center'
        },
        appPanelHeaderTitleText: {
            fontWeight: 100,
            fontSize: '18px',
            color: 'grey'
        },
        appPanelBody: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px'
        },
        appPanel: {
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
        appPanelOpen: {
            opacity: 1,
            visibility: 'visible',
            left: '8px'
        },
        badge: {
            background: '#dcdcdc',
            width: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15px'
        }
    })
);

const AppPanel = (props) => {
    const classes = useStyles();
    const logoutRef: any = useRef(null);
    const wrapperRef: any = useRef(null);

    useEffect(() => {
        // Bind the event listener
        document.addEventListener('mousedown', handleCompoenentClick);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleCompoenentClick);
        };
    });

    const handleCompoenentClick = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            toggleUserPanel(event);
            return;
        }

        if (logoutRef.current.contains(event.target)) {
            handleLogout();
            return;
        }
    };

    const toggleUserPanel = (e) => {
        if (props.isOpen) {
            props.setIsOpen(!props.isOpen);
        }
    };

    const handleLogout = () => {
        props.history.replace('/');
    };

    return (
        <div ref={wrapperRef}
            className={clsx(classes.appPanel, {
                [classes.appPanelOpen]: props.isOpen
            })}>
            <div className={classes.appPanelHeader}>
                <div className={classes.appPanelHeaderTitle}>
                    <AccountCircleIcon className={classes.profileIcon} />
                    <Typography className={classes.appPanelHeaderTitleText} variant="subtitle1">Your Admin Account</Typography>
                </div>
                <IconButton aria-label="close" onClick={toggleUserPanel}><CloseIcon /></IconButton>
            </div>
            <div className={classes.appPanelBody}>
                <Typography variant="subtitle1" style={{ fontSize: '22px' }}>John Doe</Typography>
                <Typography variant="subtitle2" className={classes.badge}>Super Admin</Typography>
            </div>
            <Divider />
            <p style={{ fontSize: '14px' }}>
                You're signed in as <strong>johndoe@gmail.com</strong>
            </p>
            <div>
                <List>
                    <ListItem
                        button
                        to="/profile"
                        component={Link}
                        onClick={toggleUserPanel}
                        style={{ padding: '0px' }}>
                        <AccountCircleIcon fontSize="large" className={classes.actionBtnIcon} />
                        <ListItemText primary="Profile" style={{ fontSize: '14px', color: 'grey' }} />
                    </ListItem>
                    <ListItem button ref={logoutRef} style={{ padding: '0px' }}>
                        <ExitToAppIcon fontSize="large" className={classes.actionBtnIcon} />
                        <ListItemText primary="Logout" style={{ fontSize: '14px', color: 'grey' }} />
                    </ListItem>
                </List>
            </div>
        </div>
    );
};

export default withRouter(AppPanel);
