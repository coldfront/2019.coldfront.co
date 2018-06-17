import Link from 'next/link'

const DayLink = ({ children, callback, val, href }) => {

    const handleClick = (e) => {
      e.preventDefault()
      callback(val)
    }
  
    return (
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    )
}

export default class extends React.Component {

    render() {
      return (

    <div className="programOverview">

            <div className="narrow days">
                    <div className="day">
                        <DayLink href="/program/day1" callback={this.props.onDayChanged} val="day1">
                            <a><h2>Day 1</h2></a>
                        </DayLink>   
                        <p><strong>November 13</strong> – Talks, amazing food, social dinner and party</p>
                    </div>
                    <div className="day">
                        <DayLink href="/program/day2" callback={this.props.onDayChanged} val="day2">
                            <a><h2>Day2</h2></a>
                        </DayLink>
                        <p><strong>November 14</strong> – Talks, amazing food, and social dinner</p>
                    </div>
                    <div className="day">
                        <Link href="/community-workshop-day">
                            <a><h2>Day 3</h2></a>
                        </Link>
                        <p><strong>November 15</strong> – Community day with workshops and meetups</p>
                    </div>
            </div>

        <style jsx>{`

            .days {
                display: flex;
                justify-content: space-between;
                margin: 100px 0;

                @media (max-width: 768px){
                    flex-direction: column;

                    .day {
                        width: 100%;
                    }
                }
            }

            .day {
                width: 30%;

                @media (min-width: 1200px){
                    width: 25%;
                }
                
                a, a:link, a:hover {
                    color: #fff;
                    cursor: pointer;
                }

                h2 {
                    font-size: 80px;
                }
            }

            
            .arrow {
                width: 40px;
            }

          `}</style>
    </div>
    )
}
}