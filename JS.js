
let namee=prompt("Please Enter Your Name","Name")
let surname=prompt("Please Enter Your Surname","Surname")
let birthDay0=prompt("Please Enter Your Birth Day", "Day")
let birthDay=Number(birthDay0);
let birthMonth0=prompt("Please Enter Which Month You Are Born","Month")
let birthMonth=Number(birthMonth0);
let birthYear=prompt("Please Enter Your Birth Year","Year")

let ttarih=new Date();
let yearr=ttarih.getFullYear();
let yearsOld= yearr-birthYear;

let info = document.querySelector("#info")
info.innerHTML=`${namee.toLocaleUpperCase(0)} ${surname.toLocaleUpperCase(0)}`;

let info2 = document.querySelector("#info2")
info2.innerHTML=`Your birthday is  ${birthDay} / ${birthMonth} / ${birthYear} `;

let info3 = document.querySelector("#info3")
info3.innerHTML=`You are ${yearsOld} years old `;


let yearDay=Number("");


if(birthMonth==1){
    yearDay=birthDay;
}else if(birthMonth==2){
    yearDay=31+birthDay;
}else if(birthMonth==3){
    yearDay=31+28+birthDay;
}else if(birthMonth==4){
    yearDay=31+28+31+birthDay;
}else if(birthMonth==5){
    yearDay=31+28+31+30+birthDay;
}else if(birthMonth==6){
    yearDay=31+28+31+30+31+birthDay;
}else if(birthMonth==7){
    yearDay=31+28+31+30+31+30+birthDay;
}else if(birthMonth==8){
    yearDay=31+28+31+30+31+30+31+birthDay;
}else if(birthMonth==9){
    yearDay=31+28+31+30+31+30+31+31+birthDay;
}else if(birthMonth==10){
    yearDay=31+28+31+30+31+30+31+31+30+birthDay;
}else if(birthMonth==11){
    yearDay=31+28+31+30+31+30+31+31+30+31+birthDay;
}else if(birthMonth==12){
    yearDay=31+28+31+30+31+30+31+31+30+31+30+birthDay;  
} else{"You Have Made an Incorrect Login"}

determineZodiac(yearDay);

function determineZodiac(yearDay){
    let zodiac="";
    
    if (yearDay>=80 && yearDay<=109){
        zodiac="Aries";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML= "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!"
        
    } else if (yearDay>=110 && yearDay<=140){
        zodiac="Taurus";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors."
        
    } else if (yearDay>=141 && yearDay<=172){
        zodiac="Gemini";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. "
    } else if (yearDay>=173 && yearDay<=203){
        zodiac="Cancer";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust! "
    } else if (yearDay>=204 && yearDay<=234){
        zodiac="Leo";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves."
    } else if (yearDay>=235 && yearDay<=265){
        zodiac="Virgo";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="You know the expression, *if you want something done, give it to a busy person?* Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice."
    } else if (yearDay>=266 && yearDay<=296){
        zodiac="Libra";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart."
    } else if (yearDay>=297 && yearDay<=325){
        zodiac="Scorpius";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac. "
    } else if (yearDay>=326 && yearDay<=355){
        zodiac="Sagittarius";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. "
    } else if (yearDay>=356 && yearDay<=365){
        zodiac="Capricornus";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms."
    } else if (yearDay>=1 && yearDay<=19){
        zodiac="Capricornus";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms."
    } else if (yearDay>=20 && yearDay<=49){
        zodiac="Aquarius";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="Despite the *aqua* in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place. "
    } else if (yearDay>=50 && yearDay<=79){
        zodiac="Pisces";
        let zodiacExp = document.querySelector("#zodiacExp")
        zodiacExp.innerHTML="If you looked up the word *psychic* in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality."
    } else {"You Have Made an Incorrect Login"}

    let info4 = document.querySelector("#info4")
    info4.innerHTML=`Your Zodiac Sign is ${zodiac} !!! `;

}





