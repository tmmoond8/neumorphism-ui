const responsiveWidth = 768;

const MQ = (styles: string | object) => 
  typeof styles === 'string'
    ? `@media only screen and (min-width: ${responsiveWidth}px) { ${styles} }`
    : `@media only screen and (min-width: ${responsiveWidth}px) {${styles[0]}}`;

  export default MQ; 