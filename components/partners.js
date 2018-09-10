import Section from './section'

export default ({ children }) => (

    <Section bright>
        <a name="partners"></a>

        <div className="narrow">
            <h3>Our partners</h3>
        </div>

        <div className="narrow">
            <div className="list">
                <div className="list-item bright">
                    <a href="https://www.stickermule.com/supports/coldfront2018">
                        <img src="/static/images/logos/stickermule.png" alt="stickermule-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item bright">
                    <a href="https://balsamiq.com/">
                        <img src="/static/images/logos/balsamiq.png" alt="balsamiq-logo" className="logos" />
                    </a>
                </div>
    
                <div className="list-item bright">
                    <a href="http://kraftvaerk.com/">
                        <img src="/static/images/logos/kraftwaerk.png" alt="kraftvaerk-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item bright">
                    <a href="https://shape.dk/">
                        <img src="/static/images/logos/shape.png" alt="shape-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item bright">
                    <a href="https://prosa.dk/">
                        <img src="/static/images/logos/PROSA.png" alt="prosa-logo" className="logos" />
                    </a>
                </div>           

                <div className="list-item bright">
                    <a href="http://itb.dk/">
                        <img src="/static/images/logos/itb.png" alt="itb-logo" className="logos" />
                    </a>
                </div>    

                <div className="list-item bright">
                    <a href="https://universe.ida.dk/techtopia/">
                        <img src="/static/images/partners/techtopia.png" alt="techtopia" className="logos" />
                    </a>
                </div>      

                <div className="list-item bright">
                    <a href="https://www.twentythree.net/">
                        <img src="/static/images/partners/twentythree.png" alt="twentythree" height="60" className="logos" />
                    </a>
                </div>      

                <div className="list-item bright">
                    <a href="https://umbraco.com">
                        <img src="/static/images/partners/umbraco.svg" alt="twentythree" height="60" className="logos" />
                    </a>
                </div>        

                <div className="list-item bright">
                    <a href="https://www.timeshifter.com">
                        <img src="/static/images/partners/timeshifter.png" alt="timeshifter" height="60" className="logos" />
                    </a>
                </div>            

                <div className="list-item bright">
                    <a href="https://www.prodata.dk">
                        <img src="/static/images/partners/prodata.png" alt="prodata" height="60" className="logos" />
                    </a>
                </div>    

                <div className="list-item bright">
                    <a href="https://www.itu.dk">
                        <img src="/static/images/logos/itu.png" alt="itu" width="220" className="logos" />
                    </a>
                </div>    

                <div className="list-item bright">
                    <a href="https://www.offscreenmag.com/">
                        <img src="/static/images/partners/offscreen.png" alt="offscreen" width="150" className="logos" />
                    </a>
                </div>   

                <div className="list-item bright">
                    <a href="https://www.meyers.dk/">
                        <img src="/static/images/partners/meyers.png" alt="meyers" width="150" className="logos" />
                    </a>
                </div>   

                <div className="list-item your-spot bright">
                    <span className="this-can-be">This can be your spot!</span>
                    <span>Email: <a href="mailto:michael@coldfront.co">michael@coldfront.co</a></span>
                </div>

            </div>
            
        </div>

        <style jsx>{`
            
            .list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .list-item {
                    width: 260px;
                    height: 103px;
                    padding: 40px 40px;
    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 48px;
    
                    .logos{
                        max-width: 100%;
                    }

                    &.your-spot{
                        font-size: 16px;
                        padding: 0;

                        .this-can-be{
                            font-weight: bold;
                        }
                    }
                }
            }
          `}</style>
    </Section>
)
