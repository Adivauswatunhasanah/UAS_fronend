

function IndoGloData(props) {
    const {Indos} = props;
  return (
    <div className="kotak">
        <h2>{Indos.status || Indos.status}</h2>
        <h4>{Indos.total || Indos.total}</h4>
    </div>
  )
}

export default IndoGloData;