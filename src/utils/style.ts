// import s from '../routes/style.css';

// type Style = keyof typeof s;
type Style = string;

function twcss(style: Style[]): string {
  return style
    .map((name) => {
      // return s[name];
      return name;
    })
    .join(' ');
}

export default twcss;
