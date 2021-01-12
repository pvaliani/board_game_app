
import Button from '../Button/Button';

import useSound from 'use-sound'; 
import BoardSoundClick from '../../sounds/boardsound.mp3';


const BoardSounds = () => {

  const [play] = useSound(BoardSoundClick);

  return <Button title="BoardSound" onSubmit={play}/>;

};

export default BoardSounds;

