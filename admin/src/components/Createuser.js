import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const Createuser = (props) => {
    return (
      <Create title='Create a Post' {...props}>
      <SimpleForm>
      <TextInput source='name'/>
      <TextInput  source='email' />

      </SimpleForm>
      </Create>
    )
}

export default Createuser
