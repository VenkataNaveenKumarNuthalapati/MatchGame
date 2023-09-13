import './ThumbNail.css'

function ThumbNail(params) {
  const {eachImg, checkResult} = params

  return (
    <li className="thumb">
      <button type="button" onClick={() => checkResult(eachImg.imageUrl)}>
        <img className="thumbnail" src={eachImg.thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbNail
