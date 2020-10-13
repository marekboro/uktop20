import React, { Fragment } from 'react'
import '../css/Song.css'

export default function Song(props) {
    const song = props.song;
    return (
        <Fragment>
            <section className="songContainer">
            

                <img src={song['im:image'][2].label} />
                <section className="song">
                {/* <p key={song.id.attributes['im:id']}> {song['im:name'].label} </p> */}
                <p></p>
                <p>{song['im:artist'].label} </p>
                <p>{song['im:name'].label} </p>


            </section>
            </section>


        </Fragment>
    )
}