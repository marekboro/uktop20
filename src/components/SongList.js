import React from 'react'
import Song from './Song'
import '../css/SongList.css'

export default function SongList(props) {

    const songs = props.songs.map(song => {

        return (

            <Song song={song}> </Song>
            
            
        );
    })

    return (
        <section className="songList"> 
            {songs}
        </section>

    )

}