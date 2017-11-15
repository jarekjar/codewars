function songDecoder(song){
  var newSong = song.replace(/WUB/g, " ")
  return newSong.replace(/\s+/g,' ').trim();
}