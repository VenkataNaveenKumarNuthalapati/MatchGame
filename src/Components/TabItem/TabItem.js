import './TabItem.css'

function TabItem(params) {
  const {eachTab, selectedTab, changeTabId} = params
  const classNam = selectedTab === eachTab.tabId ? 'tab-button' : 'normal'

  return (
    <li className="list">
      <button
        className={classNam}
        type="button"
        onClick={() => changeTabId(eachTab.tabId)}
      >
        {eachTab.displayText}
      </button>
    </li>
  )
}

export default TabItem
