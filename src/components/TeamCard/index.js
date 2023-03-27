// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {details} = this.props
    const {name, id, teamImageUrl} = details
    return (
      <>
        <Link className="link" to={`/team-matches/${id}`}>
          <li className="list-item">
            <img src={teamImageUrl} alt={name} className="team" />
            <p className="text">{name}</p>
          </li>
        </Link>
      </>
    )
  }
}

export default TeamCard
