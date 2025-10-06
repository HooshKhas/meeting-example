export const createTypography = (fontFamily) => {
  return {
    fontFamily,
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    button: {
      fontWeight: 600
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase'
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2
    },
    ...customeTypography
  };
};

const customeTypography = {
  textStyleXs: {
    fontSize: '12px',
    lineHeight: "calc(1 / 0.75)"
  },
  textStyleSm: {
    fontSize: '14px',
    lineHeight: "calc(1.25 / 0.875)"
  },
  textStyleBase: {
    fontSize: '16px',
    lineHeight: "calc(1.5 / 1)"
  },
  textStyleLg: {
    fontSize: '18px',
    lineHeight: "calc(1.75 / 1.125)"
  },
  textStyleXl: {
    fontSize: '20px',
    lineHeight: "calc(1.75 / 1.25)"
  },
  textStyle2Xl: {
    fontSize: '24px',
    lineHeight: "calc(2 / 1.5)"
  },
  textStyle3Xl: {
    fontSize: '30px',
    lineHeight: "calc(2.25 / 1.875)"
  },
  textStyle4Xl: {
    fontSize: '36px',
    lineHeight: "calc(2.5 / 2.25)"
  },
  textStyle5Xl: {
    fontSize: '48px',
    lineHeight: "1"
  },
  textStyle6Xl: {
    fontSize: '60px',
    lineHeight: "1"
  },
  textStyle7Xl: {
    fontSize: '72px',
    lineHeight: "1"
  },
  textStyle8Xl: {
    fontSize: '96px',
    lineHeight: "1"
  },
  textStyle9Xl: {
    fontSize: '128px',
    lineHeight: "1"
  }
}
