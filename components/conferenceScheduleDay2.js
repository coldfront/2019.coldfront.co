import Session from './session'

export default ({ children }) => (
    <>
    <Session 
        title="Breakfast"
        description=""
        color="#7425F3"
        time="8:00am - 9:00am"
    />

    <Session 
        title="Welcome back!"
        description=""
        color="#0629EA"
        time="9:00am - 9:15am"
        speakers={
            ["Phil Hawksworth"]
        }
    />   

    <Session 
        title=""
        description=""
        color="#0629EA"
        time="9:15am - 10:00am"
        speakers={
            ["Sara Soueidan"]
        }        
    />   

    <Session 
        title="How a design tool changes relationships"
        description="Designers and developers can often butt heads. We hail from different backgrounds; we bring different perspectives; we speak different lingo. The level of trust and understanding between designers and developers can make or break a frontend team. And the tools we use can have a remarkable impact on the strength of this relationship.
        <br /><br />This talk will explore how advancements in design tools have brought designers and developers closer together. We’ll take a look at how specific features in a tool can actually influence design methodologies and practices. We’ll also explore the ramifications of letting developers loose in a design tool. For one team in particular, this has had a profound impact on the team’s culture.
        <br /><br />Finally, we’ll extrapolate these current trends into the future. Could a mere design tool change our concept of what it means to be a designer or a developer?"
        color="#0629EA"
        time="10:00am - 10:45am"
        speakers={
            ["Jessica Liu"]
        }        
    />       

    <Session 
        title="Coffee break"
        description=""
        color="#7425F3"
        time="10:45am - 11:15am"
    />           

    <Session 
        title="Top-Level Awaiting for Godot"
        description="It goes without saying that one of the largest challenges in JavaScipt is handling asynchronicity. Along come Async / Await, a language feature made popular by C#. Developers can now use the keyword await to write code in a synchronous fashion without blocking the main thread. The only catch is that the await keyword needs to be used in an asyncfunction.
        <br /><br />What if that were not the case? What if await could be used anywhere inside a JavaScript module? This talk follows the adventure of implementing the Top-Level await feature in the JavaScript language. From deep dives into module loading to a high level overview of socializing standards changes, this talk covers the process of what it takes to change the JavaScript language."
        color="#0629EA"
        time="11:15am - 12:00am"
        speakers={
            ["Myles Borins"]
        }             
    />  

    <Session 
        title="Mind control in JavaScript - Experimenting with alternative interactions"
        description="A typical interaction with a device or interface involves touching it. Either you're pressing buttons on a controller, swiping on a touchscreen or clicking on your laptop's trackpad. But what if you could control things without the use of your hands? What if you could use... your thoughts?
        <br /><br />For the past couple of years, I have been tinkering with a brain sensor and developed an open-source JavaScript framework to allow me (or anyone else) to control interfaces or robots using facial expressions and mental commands. In this talk, I will be sharing what I learnt, showing how it works and talking about the future possibilities of alternative interactions.         "
        color="#0629EA"
        time="12:00am - 12:45am"
        speakers={
            ["Charlie Gerard"]
        }             
    />  

    <Session 
        title="Lunchtime"
        description=""
        color="#7425F3"
        time="12:45am - 13:30am"
    />             

    <Session 
        title="Interactive breakout session by 23Video"
        description=""
        color="#0477F2"
        time="13:30am - 14:00am"      
    />  

    <Session 
        title="“Architecture for an ever changing environment” by Zendesk"
        description="In a industry where the only constant is change and speed to delivery is essential, we can't just stop the process and rebuild everything. But we still need to stay current with technology and changing product demands. To deal with this problem Zendesk Copenhagen have introduced a micro-frontend architecture shared by multiple teams spanning many different areas of the our product."
        color="#0477F2"
        time="13:30am - 14:00am"
        speakers={
            ["Sune Simonsen"]
        }       
    />  
    
    <Session 
        title="Breakout Interactive session"
        description=""
        color="#0477F2"
        time="14:00am - 14:30am"
    />  

    <Session 
        title="Breakout Interactive session"
        description=""
        color="#0477F2"
        time="14:00am - 14:30am"
    />          
      

    <Session 
        title="Coffee break"
        description=""
        color="#7425F3"
        time="14:30am - 15:00am"
    />  

    <Session 
        title="The Future of Product Design"
        description="Product design can go wrong and affect users negatively. How do your users feel using your product? What’s the impact that you cause? Can we build better products if we follow certain principles?
        <br /><br />This talk will explain how to truly care about our users and improve their experience by taking a more ethical approach. Most importantly, this talk will hopefully be an inspiration, question the status quo and help us build for a better future web. "
        color="#0629EA"
        time="15:00am - 15:45am"
        speakers={
            ["Holger Bartel"]
        }          
    /> 

    <Session 
        title="Session details to be announced"
        description=""
        color="#0629EA"
        time="15:45am - 16:30am"
        speakers={
            [""]
        }        
    />                   

    <Session 
        title="Closing session: Future of doing good as a developer"
        description=""
        color="#0629EA"
        time="16:30am - 17:15am"
        speakers={
            ["Mina Markham"]
        }        
    />   

    <Session 
        title="The end + Family photo"
        description=""
        color="#7425F3"
        time="17:15am - 17:30am"
    />       

    <Session 
        title="Social dinners + Meet in the bar"
        description=""
        color="#7425F3"
        time="17:30am - 23:00am"
    />  
    </>
)