// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on
// an album. If the calling line includes a value for the number of tracks,
//  add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.

function make_album(artist, title, tracks) {
    let album_dict = {
       'artist': artist,
       'title': title
    }
 
    if (tracks == 8) {
       // console.log('dict of album', album_dict['tracks'] = tracks);
       album_dict['tracks'] = tracks
    }
    ;
    return album_dict
 }
 
 let album = make_album('Wiki', 'Half God',)
 console.log('album-1', album);
 
 album = make_album('J. Cole', 'The Off-Season')
 console.log('album-2', album)
 
 album = make_album('Dean Blunt', 'Black Metal 2')
 console.log('album-3', album)
 
 let track_album = make_album('iron maiden', 'piece of mind', tracks = 8)
 console.log('album with tracks', track_album);

//  cd 39-album && node app.js