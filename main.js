/* defining variables */
let img = "";
let sign = "";
let songName = "";
let albumName = "";
let description = "";
let romance = "";
let helping = "";

/* These variables select the buttons corresponding to each zodiac sign. 
They allow the user to click on a specific zodiac sign to display its information. */
const maskAquarius = document.querySelector('.aquarius-button');
const maskpisces = document.querySelector('.pisces-button');
const maskAries = document.querySelector('.aries-button');
const maskTaurus = document.querySelector('.taurus-button');
const maskAGemini = document.querySelector('.gemini-button');
const maskCancer = document.querySelector('.cancer-button');
const maskLeo = document.querySelector('.leo-button');
const maskVirgo = document.querySelector('.virgo-button');
const maskLibra = document.querySelector('.libra-button');
const maskScorpio = document.querySelector('.scorpio-button');
const maskSagittarius = document.querySelector('.sagittarius-button');
const maskCapricorn = document.querySelector('.capricorn-button');


/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */

function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        sign = 'CAPRICORN';
        img = 'images/starboy_graphic.png';
        songName = 'Reminder';
        albumName = 'STARBOY';
        description = "Capricorn's steadfast ambition and self-assured nature resonate strongly with this confident anthem. The song's unapologetic tone aligns with their resilience and determination to reach their goals. Its steady rhythm mirrors Capricorn's disciplined approach to life, while the lyrics reflect their focus on success and mastery. Like the mountain goat that represents them, Capricorns climb steadily toward their dreams, and this track embodies their strength and perseverance in the face of challenges.";
        romance = "Romance: Capricorn is loyal and dependable in relationships, often showing their love through acts of service.";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'SAGITTARIUS';
        img = 'images/kissland_graphic.png';
        songName = 'Wanderlust';
        albumName = 'KISSLAND';
        description = "Wanderlust” perfectly captures Sagittarius' love for exploration and adventure. The song's laid-back, dreamy vibe reflects their desire for new experiences and constant pursuit of freedom. It speaks to their restless spirit and endless curiosity, always seeking something new, whether in the world or in relationships. Sagittarius thrives on the excitement of the unknown, and this track's playful energy and easy rhythm mirror that sense of adventurous wanderlust.";
        romance = "Romance: In love, Sagittarius craves a partner who can keep up with their high energy and share in their passion for exploration and fun.";
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        sign = 'SCORPIO';
        img = 'images/bbtm_graphic.png';
        songName = 'The Hills';
        albumName = 'BEAUTY BEHIND THE MADNESS';
        description = "Scorpio's enigmatic depth and emotional intensity find a kindred spirit in this dark and magnetic track. The song's raw honesty mirrors Scorpio's fearless exploration of life's shadows and their transformative power. Its haunting tone aligns with their mysterious aura, while the unapologetic lyrics reflect Scorpio's authenticity and ability to embrace even the most challenging emotions. Like a phoenix rising from the ashes, Scorpios are drawn to evolution, and this track captures their essence with unrelenting power.";
        romance = "Romance: In love, Sagittarius craves a partner who can keep up with their high energy and share in their passion for exploration and fun.";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        sign = 'LIBRA';
        img = 'images/starboy_graphic.png';
        songName = 'Die for You';
        albumName = 'STARBOY';
        description = "As the zodiac's peacekeeper, Libra's love for harmony and connection is beautifully expressed in this soulful ballad. The song's themes of devotion and sacrifice reflect their deep yearning for balance in all aspects of life. Its smooth, polished sound mirrors Libra's elegance and charm, while the lyrics touch on their willingness to go the extra mile to maintain meaningful relationships. Just like Venus, their ruling planet, this track embodies Libra's appreciation for beauty and emotional resonance.";
        romance = "Romance: Libra seeks balance in love and often goes to great lengths to keep their partner happy.";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'VIRGO';
        img = 'images/kissland_graphic.png';
        songName = 'Professional';
        albumName = 'KISSLAND';
        description = "Virgo's analytical mind and introspective soul are perfectly captured in this precise and reflective track. The song's intricate production mirrors their meticulous attention to detail, while its exploration of inner conflict resonates with Virgo's quest for self-improvement. Virgos thrive in creating order amidst complexity, and the song's layered composition echoes their ability to find clarity in chaos. Its introspective tone aligns with Virgo's natural inclination to turn inward and refine their understanding of the world.";
        romance = "Romance: Virgos approach love with patience and care, preferring to build trust over time.";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'LEO';
        img = 'images/afterhours_graphic.png';
        songName = 'Blinding Lights';
        albumName = 'AFTER HOURS';
        description = "Leos shine brightest when the spotlight's on them, and this high-energy anthem captures their magnetic charisma. The pulsating beat mirrors their boundless vitality, while the song's themes of longing add an emotional layer to their larger-than-life persona. Like the sun that rules them, Leos bring warmth and light wherever they go, and the track's vibrant melody reflects their ability to energize and captivate everyone around them.";
        romance = "Romance: Leo craves attention and adoration in love, often showering their partners with affection in return.";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        sign = 'CANCER';
        img = 'images/mydearmelancholy_graphic.png';
        songName = 'I Was Never There';
        albumName = 'MY DEAR MELANCHOLY';
        description = "Cancer's deep sensitivity and nostalgic tendencies resonate powerfully with this haunting track. The introspective lyrics dive into heartbreak and longing, mirroring Cancer's emotional depth and their intuitive connection to the past. The song's atmospheric production reflects Cancer's ability to embrace vulnerability and navigate the ebb and flow of intense emotions. Like the moon, their ruling celestial body, Cancer waxes and wanes between strength and sensitivity, making this song a perfect reflection of their inner world.";
        romance = "Romance: Cancer's love is nurturing and intense, but they require emotional security to thrive in a relationship.";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        sign = 'GEMINI';
        img = 'images/dawnfm_graphic.png';
        songName = 'Moth to a Flame';
        albumName = 'DAWN FM';
        description = "Gemini's curious and multifaceted nature finds its perfect match in this emotionally layered song. The interplay between the lyrics and production mirrors Gemini's duality, exploring themes of attraction, conflict, and social dynamics. Just like Gemini can effortlessly navigate contrasting energies, the song's complex structure highlights their ability to embrace life's contradictions. With its blend of intrigue and expression, the track embodies Gemini's endless fascination with human connections and their knack for communicating the unspoken.";
        romance = "Romance: Geminis enjoy the thrill of intellectual and emotional stimulation in their relationships.";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'TAURUS';
        img = 'images/kissland_graphic.png';
        songName = 'Pretty';
        albumName = 'KISSLAND';
        description = "Ruled by Venus, Taurus is naturally drawn to beauty, sensuality, and emotional depth, making this sultry track a natural choice. The smooth rhythm mirrors Taurus' grounded energy, while the lush production reflects their love for comfort and indulgence. The song's exploration of loyalty aligns with Taurus' steadfast nature and their dedication to building meaningful, lasting connections. Taurus appreciates life's simple luxuries, and the song's velvety melodies are like an auditory embodiment of their rich and steady vibe.";
        romance = "Romance: Taurus values stability in relationships and expresses their love through actions rather than words.";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'ARIES';
        img = 'images/starboy_graphic.png';
        songName = 'Party Monster';
        albumName = 'STARBOY';
        description = "Aries thrives on excitement and chaos, making this energetic and provocative anthem a perfect fit. The song's rebellious energy reflects Aries' unshakable confidence and their fearless, go-getter attitude. Its fast-paced beats mirror Aries' natural momentum, while the commanding lyrics resonate with their desire to live boldly and take risks. Just like Aries is the trailblazer of the zodiac, the track's unapologetic nature reminds us of their innate ability to ignite change and inspire others with their fiery determination.";
        romance = "Romance: Aries loves fiercely and passionately, often drawing others in with their magnetic energy.";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        sign = 'PISCES';
        img = 'images/dawnfm_graphic.png';
        songName = 'Is There Someone Else';
        albumName = 'DAWN FM';
        description = "Pisces' dreamy and empathetic soul finds its perfect match in this ethereal track. The introspective lyrics delve into themes of vulnerability and longing, reflecting Pisces' deep emotional reservoir. The gentle and fluid production mirrors their artistic nature and their ability to connect with others on a profound level. Just like the fish swimming through vast oceans, this track captures Pisces' ability to navigate the currents of imagination and emotion, creating a world of boundless empathy and creativity.";
        romance = "Romance: Pisces craves emotional connection and often expresses their love through creativity and acts of kindness.";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'AQUARIUS';
        img = 'images/trilogy_graphic.png';
        songName = 'House of Balloons';
        albumName = 'TRILOGY';
        description = "Aquarius' love for the avant-garde and the unexpected is perfectly embodied in this genre-defying track. Its experimental sound reflects their innovative approach to life, while the juxtaposition of light and dark elements mirrors their ability to balance individuality and collective progress. The song's rebellious and unconventional energy aligns with Aquarius' unique perspective and their tendency to break free from societal norms. Like the water bearer, they bring fresh ideas to the world, and this track captures their boundary-pushing nature.";
        romance = "Romance: Aquarius values freedom in relationships, thriving with a partner who respects their individuality.";
    } else return alert('Please enter a valid date!');

    document.getElementById('zodiac-sign').textContent = sign;
    document.getElementById('song-name').textContent = songName;
    document.getElementById('album-name').textContent = albumName;
    document.getElementById('zodiac-description').textContent = description;
    document.getElementById('zodiac-img').src = img;
  }


/*
  function build_my_list() {
    const my_list_items = ['white', 'green'];

    const my_ul = document.createElement('ul');

    my_list_items.forEach((item) => {
        const li = document.createElement('li');
        const label = document.createTextNode(color);
        li.append(label);
        my_ul.appendChild(li);
    });

    document.body.appendChild(my_ul);
}
    
new_p.innerHTML = '<div>
Hello World
</div>'
*/

