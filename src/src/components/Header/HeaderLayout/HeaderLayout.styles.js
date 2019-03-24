export default theme => ({
  appBar: {
    background: theme.palette.background.primary,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  toolbar: { justifyContent: 'space-between' },
});
