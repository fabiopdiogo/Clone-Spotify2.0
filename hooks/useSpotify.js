import { useEffect } from "react";
import { singIn, useSession } from "next-auth/react";
import spotifyApi from '../lib/spotify';

function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() =>{
    
    if(session){
      if(session.error === "RefreshAccessTokenError"){
        singIn();
      }

      spotifyApi.setAccessToken(session.user.setAccessToken);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;