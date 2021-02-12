import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
    },

    sidebar: {
        width: '20%',
        maxWidth: 360,
        height: '100vh',
        backgroundColor: '#4167d5',
        padding: 16,
    },

    main: {
        width: '80%',
        height: '100vh',
        backgroundColor: '#fff'
    },

    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: 'solid 1px #ddd',
        paddingBottom: 16,
    },

    headerContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    headerIcon: {
        color: '#fff',
        marginRight: 20,
        width: 30,
        height: 30,
    },

    title: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
    },

    list: {
        width: '100%',
        borderBottom: 'solid 1px #ddd',
    },

    mainList: {
        display: 'flex',
        alignItems: 'center',
        padding: 16,
        borderBottom: 'solid 1px #ddd',
    },

    listText: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.8,
    },

    dashboardText: {
        color: '#fff',
        fontSize: 16,
    },


    listIcon: {
        color: '#fff',
        marginRight: 20,
        width: 20,
        height: 20,
    },

    subheader: {
        color: '#fff !important',
        fontSize: '10px !important',
        textTransform: 'uppercase',
        padding: 0,
        opacity: 0.4
    },

    supStyle: {
        marginLeft: 20,
    }
}));