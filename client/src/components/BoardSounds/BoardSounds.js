
import Button from '../Button/Button';

import useSound from 'use-sound';
import BoardSoundsLibrary from '../../sound_files/boardsound.mp3';


const BoardSounds = () => {
  const [play] = useSound(BoardSoundsLibrary);
  return <Button title="BoardSound" onClick={play}/>;

};

export default BoardSounds;

