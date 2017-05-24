import AudioPlayer from 'sham-ui-audio-widget';

export default class Player extends AudioPlayer {
    get currentTime() {
        return this.audio.audioCurrent.currentTime;
    }

    get duration() {
        return this.audio.audioCurrent.duration;
    }

    get url() {
        return this.audio.audioList[ this.audio.audioCurrentIndex ];
    }

    get previousUrl() {
        if ( this.audio.audioCurrentIndex > 0 ) {
            return this.audio.audioList[ this.audio.audioCurrentIndex - 1 ];
        }
        return null;
    }
}