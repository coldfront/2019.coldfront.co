import Section from './section'

export default ({ children }) => (

    <Section sectionName="host">
        <div className="col-md-3 offset-md-3 col-xs-12">
            <h2>YOUR HOST</h2>
            <p>Phil Hawksworth will be your host and take you through the ColdFront experience. Phil spoke at the very first ColdFront, and has since hosted many of our favorite conferences around the world. We are luckiy to have him!.</p>
        </div>

        <div className="host-avatar col-md-5 offset-md-1 col-xs-12">
            <div className="overlay-shadow"></div>
            <div className="text">
                <div>
                    <h3>PHIL HAWKSWORTH</h3>
                    <p>Developer Relations at @Netlify</p>
                </div>
                <img className="arrow" src="/static/images/arrow-purple.svg" />
            </div>
        </div>

        <style jsx>{`

            .host {
                margin-top: 100px;
                margin-bottom: 200px;
            }

            .host-avatar {
                background-image: url(/static/images/phil.jpg);
                background-size: cover;
                 box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);

                height: 500px;

                position: relative;

                .overlay-shadow {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to bottom, #000000 0%, rgba(28, 28, 45, 0.80) 40%, #1c1c2d);
                    //background-image: linear-gradient(to top, #1c1c2d, rgba(28, 28, 45, 0.80) 100%, rgba(108, 28, 45, 0));
                }

                .text {
                    position: absolute;
                    bottom: 0%;
                    left: 0%;
                    right: 0%;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    padding: 20px 40px;
                }
            }

            .arrow {
                width: 40px;
            }

          `}</style>
    </Section>
)