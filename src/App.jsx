import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'mouredev',
    name: 'Brais Moure',
    isFollowing: true
  },
  {
    userName: 's4vitar',
    name: 'S4vitar',
    isFollowing: true
  },
  {
    userName: 'chinchan',
    name: 'Robot',
    isFollowing: false
  },
  {
    userName: 'mermaid',
    name: 'Sirena',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
