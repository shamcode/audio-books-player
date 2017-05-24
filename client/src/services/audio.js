class Audio {
    updatePosition( bookPart, currentTime, duration ) {
        if ( bookPart.isLoaded && bookPart.currentTime !== currentTime ) {
            bookPart.currentTime = currentTime;
            this.savePosition( bookPart.id, currentTime, bookPart.currentTime >= duration )
        }
    }

    markAsListen( id ) {
        this.savePosition( id, 0, true );
    }

    savePosition( id, currentTime, listen ) {
        const xhr = new XMLHttpRequest();
        const encodedID = encodeURIComponent( id );
        const encodedCurrentTime = encodeURIComponent( parseInt( currentTime ).toString() );
        xhr.open(
            'GET',
            listen ? `listen/${encodedID}`: `/updatePosition/${encodedID}/${encodedCurrentTime}`,
            true
        );
        xhr.send();
    }
}

export default new Audio();