export default theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: theme.palette.background.primary,
    boxShadow: '0px 1px 5px grey',
    color: '#fff',
  },
  loading: {
    alignSelf: 'flex-start',
    marginLeft: '5px',
  },
});
