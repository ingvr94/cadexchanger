
import YouTube, { YouTubeProps } from 'react-youtube';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Video() {

const isAboveMediumScreen=useMediaQuery('(min-width:1060px)')

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height:isAboveMediumScreen ? '300' : '250',
    width: isAboveMediumScreen ? '600' : '400',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId="dQw4w9WgXcQ" opts={opts} onReady={onPlayerReady} />;
}

