import './index.css'

const TabItem = props => {
  const {tabsList, onChangeOfCategory, isActive} = props
  const {tabId, displayText} = tabsList
  const changeClass = isActive ? 'click' : ''

  const onClickOfCategory = () => {
    onChangeOfCategory(tabId)
  }
  return (
    <li className="list">
      <button
        className={`"list1" ${changeClass}`}
        onClick={onClickOfCategory}
        type="button"
      >
        {displayText}
      </button>
      <hr />
    </li>
  )
}

export default TabItem
