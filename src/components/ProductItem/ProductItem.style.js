const styles = {
    card: {
        maxWidth: 345,
        minHeight: 350,
        borderRadius: '25px',
        boxShadow: 'none',
    },

    cardSlider: {
        maxWidth: 345,
        minHeight: 350,
        borderRadius: '25px',
        boxShadow: 'none',

        marginRight: {
            xs: 0,
            md: '30px',
        },
    },

    cardActionArea: {
        padding: {
            lg:'.9rem',
            xs: '0rem .5rem .5rem .5rem',
        },
    },

    cardActionAreaSlider: {
        padding: {
            lg:'.9rem',
            xs: '0rem 1.1rem 1.1rem 1.1rem',
        },
    },

    pImage: {
        objectFit: 'contain'
    },

    pNameWrapper: {
        padding: {
            xs: '0px 10px',
            lg: '10px',
        }
    },

    pName: {
        margin: 0,
        fontSize: {
            xs: '.7rem',
            lg: '.85rem',
        },
        fontWeight: '500',
        minHeight: '80px',
    },

    pNameSlider: {
        margin: 0,
        fontSize: '.85rem',
        fontWeight: '500',
        minHeight: '80px',
    },

    pRatingWrapper: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
    },

    pRating: {
        fontSize: {
            xs: '.9rem',
            lg: '1rem',
        }
    },

    pRatingSlider: {
        fontSize: '1rem',
    },

    pSold: {
        fontSize: {
            xs: '.55rem',
            lg: '.6rem',
        },
        marginLeft: '5px',
    },

    pSoldSlider: {
        fontSize: '.6rem',
        marginLeft: '5px',
    },

    cardBottom: {
        padding: '0px 0px 0px 10px',
    },

    pPrice: {
        fontSize: {
            xs: '.75rem',
            lg: '.9rem',
        },
        fontWeight: '600',
    },

    pPriceSlider: {
        fontSize: '.9rem',
        fontWeight: '600',
    },

    pAddCart: {
        color: 'black',
        marginLeft: 'auto',
    },
}

export default styles;