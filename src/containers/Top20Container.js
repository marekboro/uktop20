import React, {Component, Fragment} from 'react'
import SongList from '../components/SongList'


export default class Top20Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json",
            songList: []
        }
    }

componentDidMount(){
    fetch(`${this.state.url}`)
    .then (response => response.json())
    .then (songApi => this.setState({songList: songApi.feed.entry}))
    .then(err => console.err)

}

render(){
    return(
        
        <Fragment> 
        <div> Hello, I R the container! </div>
        <SongList songs={this.state.songList}> </SongList>

        </Fragment>
    )
}

}