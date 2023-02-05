type propTypes = {
  name: string,
  value: string,
}

const InputForm = ({ props }: { props: propTypes }) => {
  return (
    <form className="form">
      <label>
        {props.name}
        <input className="form-input" type="text" name="name" />
      </label>
      <input className="form-input-value" type="submit" value={props.value} />
    </form>
  )
}

export default InputForm;