const styles = {
	main: {
		marginTop: '5%',
		marginBottom: '5%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	contentDiv: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		padding: '0 !important',
	},
	titleDiv: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		width: { xs: '100%', md: '80%' },
		fontFamily: 'Roboto Slab, serif',
		fontSize: { xs: '1rem', md: '2rem' },
		padding: '0px',
	},
	title: {
		fontWeight: 'bold',
		fontSize: { xs: '1rem', md: '2rem' },
		fontFamily: 'Roboto Slab, serif',
	},
	titleBtn: {
		fontSize: { xs: '0.7rem', md: '1rem' },
		color: 'black',
	},
	productList: {
		width: { xs: '100%', md: '80%' },
		display: 'flex',
		flexDirection: 'column',
	},
	link: {
		textDecoration: 'none',
	},
};

export default styles;