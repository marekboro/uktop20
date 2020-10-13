import React, { Fragment } from 'react'
import '../css/Song.css'

export default function Song(props) {
    const song = props.song;
    return (
        <Fragment>
            <section className="all">

            <section className="songContainer">
            

                <img src={song['im:image'][2].label} />
                <section className="song">
                {/* <p key={song.id.attributes['im:id']}> {song['im:name'].label} </p> */}
                {/* <p></p> */}
                <text> #{props.index +1}</text>
                <br></br>
                <text>{song['im:name'].label} </text>
                <br></br>
                <text> by {song['im:artist'].label} </text>


            </section>
            
            </section>
            <audio className="audio" controls preload="auto"> 
            <source src={song.link[1].attributes.href} controls></source>
            
            </audio>
            </section>
        </Fragment>
    )
}