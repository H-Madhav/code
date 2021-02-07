import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},

	body: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		padding: 16,
	},

	buttonStyle: {
		width: 100,
		height: 40,
		borderRadius: 2,
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: '14px',
		margin: '5px',
	},

	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
		borderBottom: '1px solid #E0E0E0',
	},

	title: {
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: '16px',
	},

	icon: {
		width: 24,
		height: 24,
	},

	footer: {
		width: '100%',
		padding: 16,
	},

	footerButton: {
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: '14px',
		color: '#fff',
	},

	selectBox: {
		width: '100%',
		padding: 16,
		borderBottom: '1px solid #E0E0E0',
	},

	selectedText: {
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: '14px',
		color: '#999999',
	},


}));