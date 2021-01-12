import './Boardsounds.css';


import useSound from 'use-sound';
import BoardSounds from 'client/src/sound_files/boardsound.mp3';

const BoardSoundButton = () => {
  const [play] = useSound(BoardSounds);
  return <Button title="BoardSound" onClick={play}/>;

};

export default BoardSounds;

