import s from '../routes/style.css';

type Style = keyof typeof s;

function twcss(style: Style[]): string {
  return style
    .map((name) => {
      return s[name];
    })
    .join(' ');
}

export default twcss;
