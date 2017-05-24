import { DI } from 'sham-ui';
import AudioPlayer from '../widgets/audio-player';

export default function() {

    // Get logic layer
    const audioService = DI.resolve( 'service:audio' );

    // Data layer
    const links = Array.prototype.slice.call( document.querySelectorAll( '.book-part' ) );
    const mapping = new Map();
    const sources = links.map( link => {
        const source = link.getAttribute( 'href' );
        mapping.set( source, {
            currentTime: parseFloat( link.dataset.position ),
            id: link.dataset.id,
            isLoaded: false
        } );
        link.onclick = ( e ) => { e.preventDefault(); return true; };
        return source
    } );

    // User interaction handler macros
    function updatePosition() {
        audioService.updatePosition(
            mapping.get( player.url ),
            player.currentTime,
            player.duration
        );
    }

    // Create audio-player
    const player = new AudioPlayer( '#audio-player', 'audio-player', {
        trackURL: sources,
        onPlay: updatePosition,
        onPause: updatePosition,
        onLoading() {
            const prev = player.previousUrl;
            if ( null !== prev ) {
                audioService.markAsListen( mapping.get( prev ).id );
            }
            const bookPart = mapping.get( player.url );
            player.isLoaded = true;
            player.audio.audioCurrent.currentTime = bookPart.currentTime;
            updatePosition();
        },
        onTimingUpdate: updatePosition
    } );
}
