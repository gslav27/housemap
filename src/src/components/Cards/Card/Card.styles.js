export default (theme) => {
  const defaultMargin = 4,
    defaultBorder = '1px solid #bbb';
    
  return ({
    root: {
      width: '100%',
      display: 'flex',
      flexFlow: 'column',
      height: '325px',
      margin: defaultMargin,
      border: defaultBorder,
      transition: 'box-shadow 0.02s linear',
      '&:hover': { boxShadow: '0px 0px 7px black' },
      [theme.breakpoints.only('sm')]: { width: `calc(50% - ${defaultMargin * 2}px)` },
      [theme.breakpoints.only('md')]: { width: `calc(33.3% - ${defaultMargin * 2}px)` },
      [theme.breakpoints.only('lg')]: { width: `calc(25% - ${defaultMargin * 2}px)` },
      [theme.breakpoints.up('xl')]: { width: `calc(20% - ${defaultMargin * 2}px)` },
    },

    sample: {
      width: '100%',
      boxShadow: 'unset',
      '&:hover': { boxShadow: 'unset' },
    },

    imagesContainer: {
      position: 'relative',
      minHeight: 0,
      flex: '100%',
    },

    textContainer: {
      zIndex: 1,
      background: theme.palette.background.secondary,
      padding: '16px',
      '&:last-child': { paddingBottom: '16px' },
    },

    textContainerNested: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      color: 'white',
    },

    media: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
      objectFit: 'cover',
      width: '100%',
      minHeight: '101%',
    },

    fullAddress: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },

    borderTop: { borderTop: defaultBorder },
    borderBottom: { borderBottom: defaultBorder },
  });
};
