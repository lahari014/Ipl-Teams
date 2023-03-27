// Write your code here
import './index.css'

const MatchCard = props => {
  const {data} = props
  console.log(data)
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
    matchStatus,
  } = data
  const color = matchStatus === 'Won' ? 'status2' : 'status1'
  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-match-image"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`${color}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
