// Array of music file names in M4A and MP3 formats
const tracks = [
    'Aundre 1.m4a',
    '09 Jump.m4a',
    '01 SKINNY.m4a',
    '02 LUNCH.m4a',
    '03 CHIHIRO.m4a',
    '04 BIRDS OF A FEATHER.m4a',
    '05 WILDFLOWER.m4a',
    '06 THE GREATEST.m4a',
    '07 L_AMOUR DE MA VIE.m4a',
    '08 THE DINER.m4a',
    '09 BITTERSUITE.m4a',
    '10 BLUE.m4a',
    '01 - Travis Scott - HIGHEST IN THE ROOM (feat. ROSALÍA & Lil Baby) (REMIX) (Explicit) (feat. ROSALÍA & Lil Baby).mp3',
    '05 - Jackboys - OUT WEST (feat. Young Thug) (Explicit) (feat. Young Thug).mp3',
    '03 - Jackboys - GANG GANG (Explicit).mp3',
    '06 - Jackboys - WHAT TO DO_ (feat. Don Toliver) (Explicit) (feat. Don Toliver).mp3',
    '07 - Jackboys - GATTI (Explicit).mp3',
    '01 On Time.m4a',
    '02 Superhero (Heroes & Villains).m4a',
    '03 Too Many Nights (feat. Don Tolive.m4a',
    '04 Raindrops (Insane).m4a',
    '05 Umbrella.m4a',
    '06 Trance.m4a',
    '07 Around Me (feat. Don Toliver).m4a',
    '08 Metro Spider.m4a',
    '09 BITTERSUITE.m4a',
    '10 Creepin.m4a',
    '11 Niagara Falls (Foot or 2).m4a',
    '12 Walk Em Down Dont Kill Civilian.m4a',
    '13 Lock On Me.m4a',
    '14 Feel The Fiyaaaah (feat. Takeoff).m4a',
    '15 All The Money (Bonus).m4a',
    'Lifestyle.mp3',
    'Mask Off.mp3',
    'Savage.mp3',
    '01 Bandit.m4a',
    '09 goosebumps.m4a',
    '10 Ski.m4a',
    '18 I Feel It Coming (feat. Daft Punk).m4a',
    '24 Take It To Trial (feat. Yak Gotti.m4a',
    '01 Running Late.m4a',
    '01 Starboy (feat. Daft Punk).m4a',
    '03 SICKO MODE.m4a',
    '02 Ex For A Reason.m4a',
    '07 Circus.m4a',
    'RADIO AD.mp3',
    'Metro Boomin  No Complaints (feat. Offset  Drake).mp3',
    'Girls Want Girls.mp3',
    'Kendrick Lamar  Not Like Us Clean.mp3',
    '03 Water.m4a',
    '05 No.1 (feat. Tems).m4a',
    '10 ART.m4a',
    '01 Lets Get On Dey Ass.m4a',
    'Mamushi (feat. Yuki Chiba).mp3',
    '11 Endless Fashion (feat. Nicki Mina.m4a',
    'Rich Baby Daddy.mp3',
    'Songs About U.mp3',
    'Paint The Town Red.mp3',
    '05 Levitating.m4a',
    '06 Pretty Please.m4a',
    '09 Break My Heart.m4a',
    '10 Good in Bed.m4a',
    '12 Levitating (feat. DaBaby).m4a',
    'BAND4BAND.mp3',
    'Aundre1 ad.m4a',
    'Kiss Me More.mp3',
    '01 Fell In Love.m4a',
    '01 Love Me JeJe.m4a',
    '01 Lavender Haze.m4a',
    '03 Anti-Hero.m4a',
    '01 One Of The Girls.m4a',
    '02 Jealous Guy.m4a',
    '03 Fill The Void.m4a',
    '01 712PM.m4a',
    '09 MASSAGING ME.m4a',
    '01 Taste.m4a',
    'Please Please Please.m4a',
    'Gods Plan.mp3',
    'Snooze.mp3',
    'Up.mp3',
    'ATTITUDE FEAT CHARLIE WILSON  CASH COBAIN.mp3',
    'Pain 1993.mp3',
    'Praise The Lord Da Shine.mp3',
    'Baddest Clean  Yung Bleu feat Chris Brown  2 Chainz.mp3',
    'Laugh Now Cry Later.mp3',
    '3 Headed Goat.mp3',
    '07 rodeo dr.m4a',
    'Doechii  What It Is Solo Version Clean.mp3', 
    'Wild Side.mp3',
    'Turn Yo Clic Up.mp3',
    'MILLION DOLLAR BABY VHS.mp3',
    'Like That.mp3',
    'Family Matters.mp3',
    'Just Wanna Rock.mp3',
    'What Happened To Virgil.mp3',
    'Nice For What.mp3',
    'Loyal West Coast Version.mp3',
    '04 Truth or Dare.m4a',
    'You Know How We Do It.mp3',
    'Did It First.mp3',
    'Bood Up.mp3',
    'Like That metro.mp3',
    'For The Streets.mp3'
];

// Shuffle the tracks array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the tracks
shuffleArray(tracks);

// Get the audio player element
const audioPlayer = document.getElementById('audioPlayer');

// Error handling to detect issues with loading the audio file
audioPlayer.onerror = function() {
    console.error("Error loading the audio file:", audioPlayer.src);
};

// Log when the audio file is ready to play
audioPlayer.oncanplaythrough = function() {
    console.log("Audio is ready to play:", audioPlayer.src);
};

// Variable to keep track of the current track index and the count of songs played
let currentTrackIndex = 0;
let songsPlayed = 0;
const songsBeforeAd = 7; // Number of songs to play before the ad

// Function to play the next track in the shuffled array
function playNextTrack() {
    if (songsPlayed >= songsBeforeAd) {
        // After 7 songs, play the ad
        audioPlayer.src = 'music/Aundre1 ad.m4a';
        songsPlayed = 0; // Reset the counter
    } else {
        // Play the next track
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        audioPlayer.src = 'music/' + tracks[currentTrackIndex];
        songsPlayed++;
    }
    
    // Play the track or ad
    audioPlayer.play().catch(error => {
        console.error("Autoplay failed:", error);
    });
}

// Set the first shuffled track as the source and play it
audioPlayer.src = 'music/' + tracks[currentTrackIndex];
audioPlayer.play().catch(error => {
    console.error("Autoplay failed:", error);
});

// Add event listener to play the next track or ad when the current one ends
audioPlayer.addEventListener('ended', playNextTrack);

//new