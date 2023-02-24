function LocalData(arg) {

        const devs = [
        {   name:"John Panton", 
            url:"https://jp2429.github.io/pokemon-personal-project/", 
            alt:"Screenshot of John Panton's website"
        }, {
            name:"Ali Spittel", 
            url:"https://alispit.tel", 
            alt:"Screenshot of Ali Spittel's website"
        }, {
            name:"Elio Jordan Lopez", 
            url:"https://developer.vercel.app/work", 
            alt:"Screenshot of Elio Jordan Lopez's website"
        }]

        const projects = [
                {
                name: "Kanye quiz",
                url:"https://samuel-williams-ed.github.io/Quiz_React_Project/",
                img:"",
                blog:"Pulling multiple API's into a React based app to make a whimsical quiz. Can you guess which quote is from Kanye?", 
                alt:"Screenshot of Kanye Quiz web app"
            },
                {
                name: "TopTrumpsMMA",
                url:"",
                img:"",
                alt:"Screenshot of TopTrumpsMMA website",
                blog:"The ultimate virtual fighting card game. Check out our team project from CodeClan e62! A browser-based game built using the React framework."
            },
                {
                name: "CodeTraveller",
                url:"https://samuel-williams-ed.github.io/Week_07_Traveller_Project/", 
                img:"",
                alt:"Screenshot of CodeTraveller website",
                blog:"A fun exercise pulling in countries API to a React web-page. See details about your favourite countries with dynamically accessed data."
            }
            ]
        

        if (arg == "devs") { return devs }
        if (arg == "projects" ) { return projects }
}

    // const stored_projects

export default LocalData;