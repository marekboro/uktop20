import React from 'react'
import Song from './Song'
import '../css/SongList.css'

export default function SongList(props) {
    const all =  props.songs;
    const songs = props.songs.map(song => {
        let songIndex = all.indexOf(song);
        return (
            
            <Song index={songIndex} song={song}> </Song>
            
            
        );
    })

    return (
        <section className="songList"> 
            {songs}
        </section>

    )

}