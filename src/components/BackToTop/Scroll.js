import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'
import './Scroll.css'

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '4vh',
        backgroundColor: '#DCDCDC',
        color: 'black',
        '&:hover, &.Mui-focusVisible': {
            transition: '0.3s',
            color: 'white',
            backgroundColor: '#090761',
            '&:hover, &.MuiSvgIcon-root': {
                animation: 'scrollUpDown 750ms',
                fontSize: '40px',
            },
        },

        [theme.breakpoints.up('xs')]: {
            right: '2.5%',
            backgroundColor: 'white',
        },
        [theme.breakpoints.up('lg')]: {
            right: '2%',
        },
    },
}))

const Scroll = ({ showBelow }) => {
    const classes = useStyles()

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div className='scroll-btn'>
            {show && (
                <IconButton
                    onClick={handleClick}
                    className={classes.toTop}
                    aria-label='to top'
                    component='span'
                >
                    <ExpandLessIcon />
                </IconButton>
            )}
        </div>
    )
}
export default Scroll
