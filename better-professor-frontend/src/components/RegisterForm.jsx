import React from 'react'



const RegisterForm = (props) => {
  const { values, handlers } = props
  const { username, password, department } = values
  const { onTextChange } = handlers



  return (
    <form>
      <label>Username: <input type="text" name="username" value={username} onChange={onTextChange} /></label>
      <label>Password: <input type="password" name="password" value={password} onChange={onTextChange}/></label>
      <label>Register: <select name="department" value={department} onChange={onTextChange}>
        <option value=""> -- Please select a department -- </option>
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="english">English</option>
        <option value="art">Art</option>
        <option value="history">History</option>
        </select></label>
    </form>
  )
}

export default RegisterForm