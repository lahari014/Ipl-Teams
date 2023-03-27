// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {details} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = details
    return (
      <>
        <h1>Latest Matches</h1>
        <div className="match-container">
          <div>
            <p className="header">{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-pic"
            />
          </div>
          <div>
            <h4>First Innings</h4>
            <p>{firstInnings}</p>
            <h4>Second Innings</h4>
            <p>{secondInnings}</p>
            <h4>Man Of The Match</h4>
            <p>{manOfTheMatch}</p>
            <h4>Umpires</h4>
            <p>{umpires}</p>
          </div>
        </div>
      </>
    )
  }
}

export default LatestMatch
