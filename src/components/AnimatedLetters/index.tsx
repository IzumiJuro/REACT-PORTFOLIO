import './index.scss';

interface AnimatedLetters {
  letterClass: string,
  strArray: string[],
  idx: number
}
const AnimatedLetters = (props: AnimatedLetters) => {
  return (
    <span>
      {
        props.strArray.map((char, i) => (
          <span key={ char + i} className={`${props.letterClass} _${i + props.idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  );
};

export default AnimatedLetters;
