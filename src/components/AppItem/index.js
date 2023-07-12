import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="listtab">
      <img className="tabimg" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
