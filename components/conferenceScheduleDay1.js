import Session from './session'

export default ({ children }) => (
    <>
    <Session 
        title="Registration and breakfast"
        description=""
        color="#7425F3"
        time="8:00 - 9:00"
    />

    <Session 
        title="Welcome to ColdFront 2018!"
        description=""
        color="#0629EA"
        time="9:00 - 9:15"
        speakers={
            ["Phil Hawksworth"]
        }
    />   

    <Session 
        title="The future of web animation"
        description="We talk a lot about how to animate on the web, and what's possible in browsers today, but where is animation heading? In this talk, we'll start with some bleeing edge techniques such as native-like page transitions with client side rendering, but then we'll push it further. The intersection of health and animation with biofeedback sensors, the future of 3d in the browser complete with interviews with people who are writing these specs... this talk will show that in terms of animation on the web, we're just getting started."
        color="#0629EA"
        time="9:15 - 10:00"
        speakers={
            ["Sarah Drasner"]
        }        
    />   

    <Session 
        title="Designing for Augmented Reality"
        description="We thought we could port our existing game to an AR experience. We couldn't. Here's what happened and everything we learned.
        <br /><br />
        In this talk I'll take the audience through the journey we went on creating our first AR-only experience. Our game Conduct AR! I'll talk about how many of the assumptions we had going in turned out to be wrong and how we worked to change them in a race to launch alongside iOS 11.
        <br /><br />
        It'll be an explosive, entertaining and visual journey into one of the most exciting frontiers in technology today."
        color="#0629EA"
        time="10:00 - 10:45"
        speakers={
            ["Michael Flarup"]
        }           
    />  

    <Session 
        title="Coffee break"
        description=""
        color="#7425F3"
        time="10:45 - 11:15"
    />           

    <Session 
        title="What's next for React Native and Expo"
        description="Fabric is a re-implementation of much of the internals of React Native that draws inspiration from the experiences of over three years of production use and turns initial design decisions upside down. In particular, it moves away from a mainly asynchronous bridge between the JavaScript and native runtimes by leveraging the React Fiber architecture. We’ll look at Fabric with a focus on what problems it aims to solve and which will problems will remain.
        <br /><br />We’ll also discuss the company that I work on, Expo. Expo is an important part of the React Native ecosystem because it builds tools, services, and libraries around React Native core that are increasingly depended on by the community. It removes the native build step required to get started and provides a “Create React App”-style experience. Expo also provides a CodeSandbox style web playground called Snack. A key piece of Expo is the extensive native API wrapper modules that are available out of the box. Up until recently, this package has been monolithic and developers have had to buy into the entire Expo toolchain in order to take advantage of the native modules. We recently re-architected them so React Native users can use as few or as many as they like, and Flutter, Cordova, or even normal native apps can take advantage of them to have a cleaner cross-platform interface for interacting with native APIs. 
        <br /><br />We’ll talk about these “universal modules” and other exciting projects underway."
        color="#0629EA"
        time="11:15 - 12:00"
        speakers={
            ["Brent Vatne"]
        }             
    />  

    <Session 
        title="A fresh perspective on multi-platform UI"
        description="Flutter is a Google-sponsored open-source SDK for creating multi-platform user interfaces. We will talk about how Flutter is very different from similar frameworks, any why we have made the technical choices we have."
        color="#0629EA"
        time="12:00 - 12:45"
        speakers={
            ["Michael Thomsen"]
        }             
    />  

    <Session 
        title="Lunchtime"
        description=""
        color="#7425F3"
        time="12:45 - 13:30"
    />             

    <Session 
        title="Will the future of front-end be AI-assisted? (Ideal Bar)"
        description="Artificial Intelligence, Machine Learning, Deep Learning: three buzzwords that made headlines in the tech press all year long. What does it mean for the future of front-end development and UI/UX design?
        <br /><br />
        In this session, we will share our vision of the future and why we believe that AI has the potential to turn all of us into super-developers. We will also do a live demo of the latest technology we are developing at Uizard."
        color="#a203f1"
        time="13:30 - 14:00"
        speakers={
            ["Tony Beltramelli", "Henrik Haugbølle"]
        }              
    />  

    <Session 
        title="Debate: What will AI and ML mean for software developers? (Ideal Bar)"
        description="Our interactive session host Hans will host a debate the role of ML and AI for software engineering as a field."
        color="#a203f1"
        time="14:00 - 14:30"
        speakers={
            ["Hans Ravnkjær Larsen"]
        }           
    />

    <Session 
        title="Working with AR by Jayway (Main Stage)"
        description="With AR capabilities on millions of phones, the users can experience a whole new level of interaction with physical objects. During this presentation we will delve into the key cases Jayway believes will propel AR, i.e. where we see most interest from our customers. We will announce a new AR application, and show in a live coding session how this app takes advantage of image and object recognition of ARKit 2."
        color="#0477F2"
        time="13:30 - 14:00"
        speakers={[
            "Lars Cimber",
            "Mina Ashena"
        ]}     
    />    

    <Session 
        title="Building AR apps with ARKit on iOS by Shape (Main Stage)"
        description="It was not until recently that the term AR has been reserved for a small group of developers, researchers and tech enthusiasts. All that changed with a game catching the interest of the general public and the subsequent introduction of Apple's own technology that promises to deliver augmented reality experiences to the masses - ARKit. <br /><br />
            In this interactive session, we will learn what ARKit is, get a glimpse of what it can do and show you how easy it is to get started with it."
        color="#0477F2"
        time="14:00 - 14:30"
        speakers={
            ["Srđan Rašić"]
        }           
    />  

    <Session 
        title="Coffee and sweets break"
        description=""
        color="#7425F3"
        time="14:30 - 15:00"
    />  

    <Session 
        title="It’s My (Third) Party, and I’ll Cry if I Want To"
        description="Like it or not, a huge part of modern web development involves the use of third-party providers: fonts, analytics, ads, tracking, and more all have an impact of performance, and can leave us (or, more worryingly, our visitors) susceptible to performance degradation.
            <br /><br />In this talk, we’ll take a look at unruly or uninvited (third-)party guests: how to detect them, how to audit them, and how to manage them. We’ll also look at the different tools available to help us stress-test and quantify the overhead these third parties bring, and what that means for users and businesses alike."
        color="#0629EA"
        time="15:00 - 15:45"
        speakers={
            ["Harry Roberts"]
        }          
    /> 

    <Session 
        title="Data visualizations on the web"
        description="Data visualizations are becoming more common on the web, from visual essays to internal business analytics to features within products.  But visualizations and D3.js - the library most commonly used for developing these visualizations - are still considered niche in the front-end ecosystem.  The lack of adoption may come from the initial friction developers face when learning D3.js, but with frameworks like React and Vue, that friction can be greatly reduced.
            <br /><br />In this talk, I'll speak about how React and Vue can make working with D3.js easier, and how to use D3.js with either of the frameworks.  Then, I'll show how we can write more complex interactions with less code using D3.js and React.js.  I hope this talk will show how fun it is to create data visualizations for the web, and I hope it'll lead to more visualizations on the web"
        color="#0629EA"
        time="15:45 - 16:30"
        speakers={
            ["Shirley Wu"]
        }        
    />                   

    <Session 
        title="New Adventures In Responsive Web Design"
        description="You’re a smart cookie. If someone asks you to build a responsive accordion, you’ll figure it out. The same goes for a table. Or a calendar. Or, God forbid, a multi-level-mega-drop-down. But how would you go around slightly more complicated components?
            <br/ ><br/>What if you had to build a sophisticated car configurator with a real-time updated 3D view? What about an advanced feature comparison table, a music festival schedule, an election map, an airfare booking and check-in, a live world football championship leaderboard and a theatre map seat selection? In this session, we’ll take a microscopic examination of common interface components and problems appearing in responsive user interfaces — and we’ll look into simple art-direction techniques to create unique and memorable experiences.  
            <br/ ><br/>Tighten up your seatbelt! Beware: you will not be able to unlearn what you’ll learn in the session! Ah, one more thing, take the techniques with a grain of salt — we do not take responsibility for sleepless nights and nightmares caused by the content of this session."
        color="#0629EA"
        time="16:30 - 17:15"
        speakers={
            ["Vitaly Friedman"]
        }        
    />   

    <Session 
        title="ColdFront Party at VEGA"
        time="17:30 - 22:00"
        description="To finish ColdFront with a blast, we are throwing a party for all ColdFronters. The party will take place in Ideal Bar which is one of Copenhagen's most historic venues."
        color="#7425F3"
        link="/social"
    />  

    <Session 
        title="Afterparty at Warpigs"
        time="22:30 - 24:00+"
        description="For those of you who wants to continue, we are hostig the after party down at Mikkeller Warpigs Brewpub in the Meat Packing District"
        color="#7425F3"
        link="http://mikkeller.dk/location/warpigs/"
    />      
    </>
)