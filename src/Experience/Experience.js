import moodTunes from './../Images/Screen Shot 2024-08-30 at 5.56.17 AM.png'
import leagueHelper from './../Images/Screen Shot 2024-08-30 at 6.49.01 AM.png'
import resipe from './../Images/Screen Shot 2024-08-30 at 6.49.58 AM.png'
import './Experience.css'
const Experiences = () => {
    return (
        <div className="experience-landing-page">
            <title>My Computer Programming Experience and Projects</title>
            <h1>Work and Education</h1>
            <li>Server
                <p>For six years, I have been a server at Texas Roadhouse. There, I learned how to perform
                    quality and sufficent customer service in a fast paced environment. Also, as both a supply
                    manager and a trainer, I developed leadership and mentorship skills, to both welcome and
                    teach new uncoming employees. Both of these roles were choices that I made, and were not required
                    from me. I have an innate desire to better the workplace, create connections, and make sure everyone
                    feels welcome and accepted.</p>
            </li>
            <li>
                <h1>Education
                    <li>
                        Front End Development at Turing
                        <p>At Turing School of Software and Design, I went through their front end
                            development course. I have done group, solo and partner projects, and completed  18
                            front end programming projects, all using JavaScript. During that course, I learned JavaScript,
                            HTML, CSS3, React,  and Typescript as my techstacks. I also have some experience
                            using GraphQL.
                        </p>
                    </li>
                    <li>Catalyte
                        <p>At Catalyte, I was learned to be both front and a backend devloper. I completed 3 projects ,
                            and each project I used a different programming language. First was Javascript, then Java, and finally
                            I learned a bit of SQL as well.
                        </p>
                    </li>
                </h1>
            </li>
            <main>My projects!</main>
            <li><a href="https://mood-tunes.vercel.app/"><h1>Mood-tunes</h1></a>
                <p>Mood tunes is a group project that I was apart of, using both React and Typescript. It is also my personal favorite project I've worked on.
                    Moodtunes is pretty simple in idea. You input a mood you're feeling, and a list of songs will pop up that associate with that mood.
                    This was our entire groups first time using Typescript, and we all learned as we went together. Furthermore, we also implemented linking
                    the spotify API to have actual songs play  and listen to.</p></li>
            <img alt="mood-tunes" src={moodTunes}></img>
            <li> <a href="https://league-helper-gb5k57fmz-mmartinelli22.vercel.app/"><h1>League Helper:</h1></a>
                <p>
                    League helper is my first solo app I made using the React framework. League of Legends is a very populer video game,
                    and it can be very intimidating at first entering the game, seeing as it has over 150 characters. The idea behind this application
                    is to help guide newer players into finding a character to look at, and help them find a character to play.</p></li>
            <img className='league-helper' alt='league-helper' src={leagueHelper}></img>
            <li> <a href="https://re-sip-e.netlify.app/"><h1>re-SIP-e</h1></a>
                <p>re-SIP-e is a much larger group project than moodtunes. We combined both front end and backend teams to create a fullstacked project together. The front end
                    tech stack is React JS, the Backend used Ruby, and together we implemented the use of GraphQL to retrive and manipulate our data.
                    re-SIP-e allows the user to look through popular cocktails, click on them, and see the ingredients and steps to make them. Also, the user can
                    choose to save the cocktail, or edit it's ingredients directly to make the cocktail your own drink. It is easily the largest
                    and most complext group project I've assisted on.</p></li>
            <img alt='resipe' src={resipe}></img>
        </div>
    )
};
export default Experiences;